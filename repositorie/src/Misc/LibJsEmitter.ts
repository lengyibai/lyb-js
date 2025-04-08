/** @description 事件发射器
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsEmitter-事件发射器
 */
export const LibJsEmitter = <T extends Record<string, any>>() => {
  const _eventMap = new Map<keyof T, Function[]>();

  const on = <K extends keyof T>(
    event: K,
    listener: T[K] extends any[] ? (...args: T[K]) => void : (arg: T[K]) => void,
  ) => {
    if (!_eventMap.has(event)) {
      _eventMap.set(event, []);
    }
    _eventMap.get(event)!.push(listener);
  };

  const emit = <K extends keyof T>(event: K, ...args: T[K] extends any[] ? T[K] : [T[K]]) => {
    _eventMap.get(event)?.forEach((listener) => listener(...(args as any)));
  };

  const off = <K extends keyof T>(
    event: K,
    listener?: T[K] extends any[] ? (...args: T[K]) => void : (arg: T[K]) => void,
  ) => {
    if (!listener) {
      _eventMap.delete(event);
    } else {
      const listeners = _eventMap.get(event);
      if (listeners) {
        _eventMap.set(
          event,
          listeners.filter((l) => l !== listener),
        );
      }
    }
  };

  return { on, emit, off };
};