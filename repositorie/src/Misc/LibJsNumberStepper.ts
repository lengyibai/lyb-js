/** @description 数字步进器
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumberStepper-数字步进器
 */
export class LibJsNumberStepper {
  /** 当前按下状态 */
  private _isDown = false;

  /** 定时器ID */
  private _timerId!: NodeJS.Timeout;
  /** 计时器ID */
  private _intervalId!: NodeJS.Timeout;

  /** 数字变动时触发 */
  private _onChange: (index: "add" | "sub") => void;

  /**
   * @param numsLength 数字长度
   * @param onChange 数字变动时触发
   */
  constructor(onChange: (index: "add" | "sub") => void) {
    this._onChange = onChange;

    window.addEventListener("pointerup", () => {
      this._isDown && this._up();
    });
  }

  /** @description 按下
   * @param type 操作类型 add:加 sub:减
   */
  down(type: "add" | "sub") {
    this._isDown = true;
    this._handleChange(type);

    this._timerId = setTimeout(() => {
      if (this._isDown) {
        this._intervalId = setInterval(() => {
          this._handleChange(type);
        }, 100);
      }
    }, 100);
  }

  /** @description 抬起 */
  private _up() {
    this._isDown = false;
    clearTimeout(this._timerId);
    clearInterval(this._intervalId);
  }

  /** @description 处理数字变化
   * @param type 操作类型 add:加 sub:减
   */
  private _handleChange(type: "add" | "sub") {
    if (type === "add") {
      this._onChange("add");
    } else if (type === "sub") {
      this._onChange("sub");
    }
  }
}
