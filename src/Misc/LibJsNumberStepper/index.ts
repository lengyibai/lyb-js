/** @description 数字步进器
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumberStepper-数字步进器
 */
export class LibJsNumberStepper {
  /** 当前数字索引 */
  private _currentIndex = 0;
  /** 金额数 */
  private _numsLength = 0;
  /** 当前按下状态 */
  private _isDown = false;

  /** 定时器ID */
  private _timerId!: NodeJS.Timeout;
  /** 计时器ID */
  private _intervalId!: NodeJS.Timeout;

  /** 数字变动时触发 */
  private _onChange: (index: number) => void;

  /**
   * @param numsLength 数字长度
   * @param onChange 数字变动时触发
   */
  constructor(numsLength: number, onChange: (index: number) => void) {
    this._onChange = onChange;
    this._numsLength = numsLength;

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

  /** @description 更新索引 */
  updateIndex(index: number) {
    this._currentIndex = index;
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
      if (this._currentIndex < this._numsLength - 1) {
        this._currentIndex++;
        this._onChange(this._currentIndex);
      }
    } else if (type === "sub") {
      if (this._currentIndex > 0) {
        this._currentIndex--;
        this._onChange(this._currentIndex);
      }
    }
  }
}
