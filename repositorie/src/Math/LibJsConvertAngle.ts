/**
 * @description 角度和弧度互相转换
 * @param value 角度值或弧度值
 * @param type 角度类型或弧度类型
 * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsConvertAngle-角弧度互转
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
