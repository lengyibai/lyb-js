import { libJsDecimal } from "../Math/LibJsDecimal";

/** @description 类属性监听器
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsClassObservable-类属性监听器
 */
export class LibJsClassObservable<T extends Record<string, any>> {
  /** 可监听的对象 */
  private data: T;
  /** 监听器 */
  private listeners = new Map<
    keyof T,
    Map<number, (newValue: any, oldValue: any) => void>
  >();
  /** 监听函数索引ID */
  private index = 0;

  /**
   * @param initialData 监听的数据
   */
  constructor(initialData: T) {
    this.data = { ...initialData };
  }

  /** @description 获取值、
   * @param key 要获取的键
   * @returns 对应的值
   */
  getValue<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  /** @description 设置值
   * @param key 要设置的键
   * @param value 要设置的值
   * @param immediately 是否立即通知监听器
   * @returns 设置后的值
   */
  setValue<K extends keyof T, V extends T[K]>(
    key: K,
    value: V,
    immediately = true
  ) {
    const oldValue = this.data[key];
    if (oldValue === value) return value;
    this.data[key] = value;
    immediately &&
      this.listeners.get(key)?.forEach((fn) => fn(value, oldValue));
    return value;
  }

  /** @description 监听值
   * @param key 要监听的键
   * @param callback 回调函数
   * @param immediately 是否立即触发一次回调函数
   * @returns 取消监听的函数
   */
  onValue<K extends keyof T>(
    key: K,
    callback: (newValue: T[K], oldValue: T[K]) => void,
    immediately = true
  ): () => void {
    const id = this.index++;

    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Map());
    }

    this.listeners.get(key)!.set(id, callback as any);
    immediately && callback(this.data[key], this.data[key]);

    return () => {
      this.listeners.get(key)!.delete(id);
    };
  }

  /** @description 触发某个键名的所有回调函数，适用于同时监听了多个值的场景，用于切换要显示的值，或者延迟在特定时机通知监听器
   * @param key 要触发的键名
   * @returns 触发的键值
   */
  updateFake<K extends keyof T>(key: K) {
    const value = this.data[key];
    this.listeners.get(key)?.forEach((fn) => fn(value, value));
    return value;
  }

  /** @description 数字类型的键值累加或累减
   * @param key 要累加或累减的键
   * @param type 要累加还是要累减
   * @param value 要累加或累减的值
   * @param immediately 是否立即通知监听器
   */
  setNumberValue<K extends keyof T>(
    key: K,
    type: "add" | "sub",
    value = 1,
    immediately = true
  ) {
    let v: number;
    if (type === "add") {
      v = libJsDecimal(this.data[key], value, "+");
      this.setValue(key, v as T[K], immediately);
    } else {
      v = libJsDecimal(this.data[key], value, "-");
      this.setValue(key, v as T[K], immediately);
    }
    return v;
  }

  /** @description 针对布尔类型的键值取反
   * @param key 要取反的键
   * @param immediately 是否立即通知监听器
   */
  setBooleanValue<K extends keyof T>(key: K, immediately = true) {
    const v = !this.data[key];
    this.setValue(key, v as T[K], immediately);
    return v;
  }

  /** @description 清空所有监听 */
  clear() {
    this.listeners.clear();
  }
}
