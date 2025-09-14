import { LibJsClassObservable } from "./LibJsClassObservable";

interface PullUpLoadObservable {
  /** 当前加载状态文案 */
  statusText: string;
  /** 加载状态 */
  loadStatus: "idle" | "loading" | "noMore" | "empty";
}

interface PullUpLoadParams {
  /** 滚动容器 */
  scrollEl: HTMLElement;
  /** 加载状态元素 */
  loadStatusEl: HTMLElement;

  /** 触发加载回调 */
  onLoad: () => void;
}

/** @description 上拉加载 */
export class LibJsPullUpLoad extends LibJsClassObservable<PullUpLoadObservable> {
  constructor(params: PullUpLoadParams) {
    super({
      statusText: "加载中...",
      loadStatus: "idle",
    });

    const { scrollEl, loadStatusEl, onLoad } = params;
    this.checkAutoLoad(onLoad, scrollEl);

    this.onValue("loadStatus", (v) => {
      if (v === "idle") {
        this.checkAutoLoad(onLoad, scrollEl);
      }
    });

    /** @description 滚动触发 */
    scrollEl.addEventListener("scroll", () => {
      //如果所有数据已加载完毕，则不再触发加载
      if (["noMore", "empty", "loading"].includes(this.getValue("loadStatus")))
        return;

      const y = scrollEl.scrollTop;

      //获取距离加载触发像素值
      const loadDistance =
        scrollEl.scrollHeight -
        scrollEl.clientHeight -
        y -
        loadStatusEl.offsetHeight;

      if (loadDistance <= 0) {
        this.setValue("loadStatus", "loading");
        this.setValue("statusText", "加载中...");

        setTimeout(() => {
          onLoad();
        }, 500);
      }
    });
  }

  // 1. 新增方法
  private checkAutoLoad(onLoad: () => void, scrollEl: HTMLElement) {
    if (
      !["noMore", "empty", "loading"].includes(this.getValue("loadStatus")) &&
      scrollEl.scrollHeight <= scrollEl.clientHeight
    ) {
      this.setValue("loadStatus", "loading");
      this.setValue("statusText", "加载中...");
      setTimeout(() => {
        onLoad();
      }, 500);
    }
  }
}
