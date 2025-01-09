/** @description 数字步进器
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * const stepper = new libNumerStepper(10, (index) => console.log(index));
 * stepper.down("add"); // 索引加1
 * stepper.updateIndex(5); // 更新索引为5
 * stepper.down("sub"); // 索引减1
 */
export class libNumerStepper {
  /** 数字变动时触发 */
  private _onChange: (index: number) => void;
  /** 当前按下状态 */
  private _isDown = false;
  /** 当前数字索引 */
  private _currentIndex = 0;
  /** 定时器ID */
  private _timerId!: NodeJS.Timeout;
  /** 计时器ID */
  private _intervalId!: NodeJS.Timeout;
  /** 金额数 */
  private _numsLength = 0;

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

  /** @description 按下 */
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

  /** @description 处理数字变化 */
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
