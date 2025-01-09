/**
 * @description 角度和弧度互相转换
 * @param value 角度值或弧度值
 * @param type 角度类型或弧度类型
 * @link 了解更多：https://www.npmjs.com/package/lyb-js
 * @example
 * //角度转弧度
 * libJsConvertAngle(90, "rad"); //返回 1.5708... (π/2)
 *
 * //弧度转角度
 * libJsConvertAngle(Math.PI, "deg"); //返回 180
 */
export const libJsConvertAngle = (value: number, type: "rad" | "deg") => {
  if (type === "rad") {
    return value * (Math.PI / 180);
  } else if (type === "deg") {
    return value * (180 / Math.PI);
  } else {
    throw new Error("请使用正确类型");
  }
};
