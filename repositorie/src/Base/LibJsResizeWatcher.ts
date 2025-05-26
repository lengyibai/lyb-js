/**
 * @description 用于监听浏览器窗口尺寸变化的类
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsResizeWatcher-窗口监听
 */
type Listener = (w: number, h: number) => void;

/** @description 监听窗口变化，内部只注册一次resize事件，调用监听自身可取消监听 */
export class LibJsResizeWatcher {
  /** 存储所有监听器及其是否需要立即执行的标志 */
  private _listeners: { cb: Listener; immediate: boolean }[] = [];

  constructor() {
    //初始化时绑定窗口 resize 事件
    window.addEventListener("resize", this._handleResize);
  }

  /**
   * @description 注册一个窗口尺寸变化的监听器
   * @param cb 回调函数，参数为当前窗口宽度和高度
   * @param immediate 是否在注册时立即执行一次回调，默认为 true
   * @returns 一个函数，用于移除该监听器
   */
  on(cb: Listener, immediate = true): () => void {
    const item = { cb, immediate };
    this._listeners.push(item);
    if (immediate) cb(window.innerWidth, window.innerHeight);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== item);
    };
  }

  /** @description 内部 resize 回调函数，调用所有注册的监听器 */
  private _handleResize = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this._listeners.forEach(({ cb }) => cb(w, h));
  };
}
