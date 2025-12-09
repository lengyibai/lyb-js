/**
 * @description 用于监听浏览器窗口尺寸变化的类
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsResizeWatcher-窗口监听
 */
type Listener = (w: number, h: number, s: number) => void;

/** @description 监听窗口变化，内部只注册一次resize事件，调用监听自身可取消监听 */
export class LibJsResizeWatcher {
  /** 存储所有监听器及其是否需要立即执行的标志 */
  private _listeners: { cb: Listener; immediate: boolean }[] = [];
  /** 按id存储监听器 */
  private _listenerMap = new Map<string, Listener>();
  /** 当前适配模式 */
  private _mode: "h" | "v" | "hv";

  constructor(mode: "h" | "v" | "hv" = "hv") {
    this._mode = mode;

    if (mode === "h" || mode === "v") return;
    //初始化时绑定窗口 resize 事件
    window.addEventListener("resize", this._handleResize);
    window.addEventListener("orientationchange", this._handleResize);
  }

  /**
   * @description 注册一个窗口尺寸变化的监听器
   * @param cb 回调函数，参数为当前窗口宽度和高度
   * @param immediate 是否在注册时立即执行一次回调，默认为 true
   * @returns 一个函数，用于移除该监听器
   */
  on(cb: Listener, immediate = true): () => void {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const orientation = w > h ? "h" : "v";

    if (this._mode === "h") {
      immediate && cb(1920, 1080, Math.min(w / 1920, h / 1080));
      return () => {};
    } else if (this._mode === "v") {
      immediate && cb(1080, 1920, Math.min(w / 1080, h / 1920));
      return () => {};
    }

    let s;
    if (orientation === "h") {
      s = Math.min(w / 1920, h / 1080);
    } else {
      s = Math.min(w / 1080, h / 1920);
    }

    const item = { cb, immediate };
    this._listeners.push(item);
    immediate && cb(window.innerWidth, window.innerHeight, s);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== item);
    };
  }

  /** 新增方法：通过id注册监听器（若id已存在会先移除旧的） */
  onById(id: string, cb: Listener, immediate = true): void {
    this.offById(id);
  }

  /** 通过id移除监听器 */
  offById(...ids: (string | string[])[]): void {
    const flatIds = ids.flat();
    for (const id of flatIds) {
      const remove = (this._listenerMap as any).get(`${id}_remove`);
      if (typeof remove === "function") remove();
      this._listenerMap.delete(id);
      (this._listenerMap as any).delete(`${id}_remove`);
    }
  }

  /** @description 内部 resize 回调函数，调用所有注册的监听器 */
  private _handleResize = (): void => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    let s;
    const orientation = w > h ? "h" : "v";

    if (orientation === "h") {
      s = Math.min(w / 1920, h / 1080);
    } else {
      s = Math.min(w / 1080, h / 1920);
    }
    this._listeners.forEach(({ cb }) => cb(w, h, s));
  };
}
