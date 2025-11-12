type Listener = () => void;

/** @description 关闭监听 */
export class LibJsEmitterClose {
  private static listeners = new Map<string, Set<Listener>>();

  static on(eventName: string, listener: Listener) {
    if (!this.listeners.has(eventName))
      this.listeners.set(eventName, new Set());
    this.listeners.get(eventName)!.add(listener);
  }

  static emit(eventName: string) {
    const set = this.listeners.get(eventName);
    if (!set) return;
    for (const listener of set) listener();
    this.listeners.delete(eventName);
  }
}
