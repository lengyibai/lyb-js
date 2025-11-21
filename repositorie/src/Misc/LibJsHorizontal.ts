/** @description 用于游戏判断是否为横版状态
 * @param mode h-纯横版游戏 v-纯竖版
 */
export const libJsHorizontal = (mode: string) => {
  let w = window.innerWidth;
  let h = window.innerHeight;

  let isH = w > h;

  if (mode === "h") {
    isH = true;
    w = 1920;
    h = 1080;
  } else if (mode === "v") {
    isH = false;
    w = 1080;
    h = 1920;
  }

  return {
    isH,
    w,
    h,
  };
};
