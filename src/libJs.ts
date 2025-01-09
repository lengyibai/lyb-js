import { libJsGetDataType } from "./Base/LibJsGetDataType";
import { libJsPromiseTimeout } from "./Base/LibJsPromiseTimeout";
import { libJsColorConsole } from "./Browser/LibJsColorConsole";
import { libJsIsMobile } from "./Browser/LibJsIsMobile";
import { libJsIsPad } from "./Browser/LibJsIsPad";
import { libJsPathParams } from "./Browser/LibJsPathParams";
import { libJsSetTitleIcon } from "./Browser/LibJsSetTitleIcon";
import { libJsTagTitleTip } from "./Browser/LibJsTagTitleTip";
import { libJsObjToUrlParams } from "./Browser/LibJsObjToUrlParams";
import { libJsChunkArray } from "./Data/LibJsChunkArray";
import { libJsDeepJSONParse } from "./Data/LibJsDeepJSONParse";
import { libJsGroupArrayByKey } from "./Data/LibJsGroupArrayByKey";
import { libJsMatchEmail } from "./Data/LibJsMatchEmail";
import { libJsShuffleArray } from "./Data/LibJsShuffleArray";
import { libJsStepArray } from "./Data/LibJsStepArray";
import { libReverseArrayFromIndex } from "./Data/LibReverseArrayFromIndex";
import { libJsDownloadImageLink } from "./File/LibJsDownloadImageLink";
import { libJsImageOptimizer } from "./File/LibJsImageOptimizer";
import { libJsSaveJson } from "./File/LibJsSaveJson";
import { libJsSecondsFormatterChinese } from "./Formatter/LibJsSecondsFormatterChinese";
import { libJsFormatterByte } from "./Formatter/LibJsFormatterByte";
import { libJsMaskPhoneNumber } from "./Formatter/LibJsMaskPhoneNumber";
import { libJsNumComma } from "./Formatter/LibJsNumComma";
import { libJsNumberUnit } from "./Formatter/LibJsNumberUnit";
import { libJsCalculateExpression } from "./Math/LibJsCalculateExpression";
import { libJsConvertAngle } from "./Math/LibJsConvertAngle";
import { libJsCoordsAngle } from "./Math/LibJsCoordsAngle";
import { libJsCoordsDistance } from "./Math/LibJsCoordsDistance";
import { libJsDecimal } from "./Math/LibJsDecimal";
import { libJsRegFormValidate } from "./Misc/LibJsRegFormValidate";
import { libJsRetryRequest } from "./Misc/LibJsRetryRequest";
import { libJsProbabilityResult } from "./Random/LibJsProbabilityResult";
import { libJsRandom } from "./Random/LibJsRandom";
import { libJsRandomColor } from "./Random/LibJsRandomColor";
import { libJsUniqueRandomNumbers } from "./Random/LibJsUniqueRandomNumbers";
import { libJsSameTimeCheck } from "./Time/LibJsSameTimeCheck";
import { libJsTimeAgo } from "./Time/LibJsTimeAgo";
import { libJsTimeGreeting } from "./Time/LibJsTimeGreeting";
import { libNumerStepper } from "./Misc/LibNumerStepper";

/** @description 基础方法 */
export const Base = {
  /**
   * @description 返回数据类型
   * @param v 需要判断类型的数据
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsGetDataType(123); //"number"
   * libJsGetDataType("hello"); //"string"
   * libJsGetDataType([1, 2, 3]); //"array"
   */
  libJsGetDataType,

  /**
   * @description 延时执行，切换到其他页面会暂停
   * @param delay 延时毫秒数
   * @param fn 延时执行函数
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsPromiseTimeout(3000, () => {
   *   console.log("执行延时函数");
   * });
   */
  libJsPromiseTimeout,
};

/** @description 浏览器相关方法 */
export const Browser = {
  /** @description console颜色打印
   * @param title 标题
   * @param color 颜色
   * @param logs 信息
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * //使用红色打印日志
   * libJsColorConsole("错误提示", "red", [{ label: "错误代码", value: 500 }]);
   *
   * //使用蓝色打印简单日志
   * libJsColorConsole("信息", "blue", "操作成功");
   */
  libJsColorConsole,

  /** @description 判断是否为移动设备
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const isMobile = libJsIsMobile();
   * console.log(isMobile); //true 或 false
   */
  libJsIsMobile,

  /** @description 判断是否为平板
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const isPad = libJsIsPad();
   * console.log(isPad); //true 或 false
   */
  libJsIsPad,

  /** @description 获取浏览器地址栏参数
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const params = libJsPathParams();
   * console.log(params); //{ param1: "value1", param2: "value2" }
   */
  libJsPathParams,

  /** @description 动态设置网站标题及图标
   * @param title 网站标题
   * @param url 网站图标地址
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsSetTitleIcon("我的网站", "https://example.com/favicon.ico");
   */
  libJsSetTitleIcon,

  /** @description 网站标题交互，当从当前网页切换到其他网页，网站标题自动切换
   * @param backTitle 从其他网页返回时显示的标题
   * @param leaveTitle 从当前网页离开时显示的标题
   *  * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsTagTitleTip("欢迎回来", "来和妲己玩耍吧！");
   */
  libJsTagTitleTip,

  /** @description 对象转为url参数
   * @param params 对象参数
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsObjToUrlParams({ name: "John", age: 30, active: true });
   * // "name=John&age=30&active=true"
   */
  libJsObjToUrlParams,
};

/** @description 数据相关方法 */
export const Data = {
  /**
   * @description 将数组拆分成指定数组元素数量的多个数组
   * @param arr 需要拆分的数组
   * @param chunkSize 每个数组的元素数量
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const chunks = libJsChunkArray([1, 2, 3, 4, 5, 6], 2);
   * console.log(chunks); //[[1, 2], [3, 4], [5, 6]]
   */
  libJsChunkArray,

  /** @description 递归将JSON字符串深度解析为对象
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const obj = libJsDeepJSONParse('{"a": 1, "b": "{\"c\": 2}"}');
   * console.log(obj); //{ a: 1, b: { c: 2 } }
   */
  libJsDeepJSONParse,

  /**
   * @description 分类汇总，将数组对象按照指定键值整理成一个以键值为键名的对象
   * @param arr 要分组的数组
   * @param key 分组的键
   * @returns 分组后的对象
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const grouped = libJsGroupArrayByKey([{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }], 'id');
   * console.log(grouped); //{ 1: [{ id: 1, name: 'A' }, { id: 1, name: 'C' }], 2: [{ id: 2, name: 'B' }] }
   */
  libJsGroupArrayByKey,

  /**
   * @description 匹配电子邮件，可用于实时输入时，自动补全常用邮箱后缀
   * @param str 要匹配的字符串
   * @param emailList 电子邮件后缀列表
   * @returns 匹配结果数组
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const emails = libJsMatchEmail("user", ["@gmail.com", "@yahoo.com"]);
   * console.log(emails); //["user@gmail.com", "user@yahoo.com"]
   */
  libJsMatchEmail,

  /** @description 数组乱序
   * @param arr 需要乱序的数组
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const shuffled = libJsShuffleArray([1, 2, 3, 4, 5]);
   * console.log(shuffled); //[3, 5, 2, 1, 4] （结果每次不同）
   */
  libJsShuffleArray,

  /** @description 数组元素整体步数移动
   * @param arr 移动的数组
   * @param step 负数为向后移动，正数为向前移动
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const moved = libJsStepArray([1, 2, 3, 4, 5], 2);
   * console.log(moved); //[4, 5, 1, 2, 3]
   */
  libJsStepArray,

  /** @description 翻转指定索引后面的数组
   * @param arr 数组
   * @param index 开始索引
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libReverseArrayFromIndex([1, 2, 3, 4, 5], 1);
   * // [1, 2, 5, 4, 3]
   */
  libReverseArrayFromIndex,
};

/** @description 文件相关方法 */
export const File = {
  /** @description 下载图片链接
   * @param link 图片链接
   * @param name 图片名称
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsDownloadImageLink("https://example.com/image.jpg", "downloaded-image.jpg");
   */
  libJsDownloadImageLink,

  /** @description 图片压缩
   * @param obj 压缩参数
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * //图片压缩使用示例
   * libJsImageOptimizerOptionsParams({
   *   file: myFile,
   *   ratio: 0.8,
   *   width: 800,
   *   maxSize: 1024,
   *   success: (data, file, url) => {
   *     console.log('压缩成功', data, file, url);
   *   },
   *   fail: (error) => {
   *     console.error('压缩失败', error);
   *   }
   * });
   */
  libJsImageOptimizer,

  /**
   * @description 保存文件到本地
   * @param data 要保存的数据
   * @param name 文件名
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsSaveJson("example.json", JSON.stringify({ key: "value" }));
   */
  libJsSaveJson,
};

/** @description 格式化相关方法 */
export const Formatter = {
  /**
   * @description 格式化字节大小
   * @param bytes 字节数
   * @returns ['大小', '单位', '大小及单位']
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const [size, unit, formatted] = libJsFormatterByte(2048);
   * console.log(size, unit, formatted); //2.00 KB 2.00 KB
   */
  libJsFormatterByte,

  /**
   * @description 隐藏手机号码中间的四位数字
   * @param mobile 需要处理的手机号码
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const masked = libJsMaskPhoneNumber("13812345678");
   * console.log(masked); //138****5678
   */
  libJsMaskPhoneNumber,

  /**
   * @description 数字每三位添加逗号
   * @param num 需要格式化的数字
   * @param reserve 保留小数位数
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const formatted = libJsNumComma(1234567.89);
   * console.log(formatted); //1,234,567.89
   */
  libJsNumComma,

  /** @description 将大于1000的数字使用k为单位
   * @param num 数字
   * @param units 单位组，key为单位，value为格式化阈值
   * @returns [数字, 单位]
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const [value, unit] = libJsNumberUnit(1500, { K: 1000, M: 1000000 });
   * console.log(value, unit); //1.50 K
   */
  libJsNumberUnit,

  /**
   * @description 将秒数格式化为中文时间描述，支持扩展到年和月
   * @param seconds 秒数
   * @returns 格式化后的中文时间
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsSecondsFormatterChinese(100000); //"1天3小时46分40秒"
   * libJsSecondsFormatterChinese(31536000); //"1年"
   * libJsSecondsFormatterChinese(3600); //"1小时"
   * libJsSecondsFormatterChinese(90); //"1分30秒"
   */
  libJsSecondsFormatterChinese,
};

/** @description 数学相关方法 */
export const Math = {
  /** @description 计算表达式字符串
   * @param expression 表达式字符串
   * @param point 小数点精度
   * @returns 计算结果
   *
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const result = libJsCalculateExpression("(1+2)-(3*4)/5");
   * console.log(result); //0.6
   */
  libJsCalculateExpression,

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
  libJsConvertAngle,

  /** @description 计算两点角度
   * @param coord1 起点坐标
   * @param coord2 终点坐标
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsCoordsAngle({ x: 0, y: 0 }, { x: 1, y: 0 }); //0
   * libJsCoordsAngle({ x: 0, y: 0 }, { x: 1, y: 1 }); //45
   * libJsCoordsAngle({ x: 0, y: 0 }, { x: 0, y: 1 }); //90
   */
  libJsCoordsAngle,

  /** @description 计算两点距离
   * @param coord1 起点坐标
   * @param coord2 终点坐标
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsCoordsDistance({ x: 0, y: 0 }, { x: 3, y: 4 }); //5
   * libJsCoordsDistance({ x: 1, y: 1 }, { x: 4, y: 5 }); //5
   * libJsCoordsDistance({ x: 0, y: 0 }, { x: 0, y: 0 }); //0
   */
  libJsCoordsDistance,

  /** @description 计算两个数的运算结果，并保留指定位数的小数
   * @param num1 第一个数
   * @param num2 第二个数
   * @param operator 运算符，支持加减乘除
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsDecimal(10, 3, "+"); //13
   * libJsDecimal(10, 3, "-"); //7
   * libJsDecimal(10, 3, "/", 2); //3.33
   */
  libJsDecimal,
};

/** @description 杂项相关方法 */
export const Misc = {
  /**
   * @description 表单验证函数
   * @param form 表单数据对象
   * @param rules 验证规则数组
   * @returns 验证结果数组，包含未通过验证的项
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const form = { username: "john", email: "john@example.com" };
   * const rules = [
   *   { key: "username", verify: /^[a-zA-Z0-9]{3,}$/, msg: "用户名不合法", name: "用户名" },
   *   { key: "email", verify: /^\S+@\S+\.\S+$/, msg: "邮箱格式不正确", name: "邮箱" },
   * ];
   * libJsRegFormValidate(form, rules);
   * //返回结果: []
   *
   * const invalidForm = { username: "jo", email: "invalid-email" };
   * libJsRegFormValidate(invalidForm, rules);
   * //返回结果: [
   * //  { key: "username", msg: "用户名不合法", name: "用户名" },
   * //  { key: "email", msg: "邮箱格式不正确", name: "邮箱" }
   * //]
   */
  libJsRegFormValidate,

  /** @description 请求失败重连
   * @param promiseFn 请求函数
   * @param maxRetries 最大重试次数
   * @param retryDelay 重试间隔时间
   * @param params 请求参数
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const requestFn = (params: { url: string }) => fetch(params.url).then(res => res.json());
   * const params = { url: "https://api.example.com/data" };
   * libJsRetryRequest({
   *   promiseFn: requestFn,
   *   params,
   *   maxRetries: 5,
   *   retryDelay: 1000
   * })
   * .then(data => console.log(data))
   * .catch(err => console.error(err));
   */
  libJsRetryRequest,

  /** @description 数字步进器
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * const stepper = new libNumerStepper(10, (index) => console.log(index));
   * stepper.down("add"); // 索引加1
   * stepper.updateIndex(5); // 更新索引为5
   * stepper.down("sub"); // 索引减1
   */
  libNumerStepper,
};

/** @description 随机相关方法 */
export const Random = {
  /** @description 百分比概率结果
   * @param probability 触发概率，百分比，0-100
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsProbabilityResult(50); //50% 概率为 true
   * libJsProbabilityResult(80); //80% 概率为 true
   * libJsProbabilityResult(100); //100% 概率为 true
   */
  libJsProbabilityResult,

  /** @description 随机数
   * @param min 最小值
   * @param max 最大值
   * @param num 保留小数位数
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsRandom(1, 10); //1 到 10 之间的随机整数
   * libJsRandom(1, 10, 2); //1 到 10 之间保留两位小数的随机数
   * libJsRandom(5, 5, 3); //返回 5.000
   */
  libJsRandom,

  /** @description 随机 RGBA 颜色
   * @param alpha 透明度
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsRandomColor(); //生成随机的 RGBA 颜色，默认透明度 1
   * libJsRandomColor(0.5); //生成随机的 RGBA 颜色，透明度为 0.5
   */
  libJsRandomColor,

  /** @description 随机生成n个指定范围的随机数数组
   * @param min 最小值
   * @param max 最大值
   * @param count 数组长度
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsUniqueRandomNumbers(1, 10, 5); //从 1 到 10 中随机生成 5 个唯一数字
   * libJsUniqueRandomNumbers(1, 100, 10); //从 1 到 100 中随机生成 10 个唯一数字
   */
  libJsUniqueRandomNumbers,
};

/** @description 时间相关方法 */
export const Time = {
  /**
   * @description 传入时间戳与当前时间判断是否为同一天或同一周
   * @param timestamp 毫秒时间戳
   * @param unit 判断单位
   * @returns 0-同一单位时间 1-新单位时间 -1时间戳大于当前时间
   */
  libJsSameTimeCheck,

  /** @description 时间差计算
   * @param timestamp 毫秒时间戳
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsTimeAgotamp(Date.now() - 3600000); //"1 小时前"
   * libJsTimeAgotamp(Date.now() - 86400000); //"1 天前"
   * libJsTimeAgotamp(Date.now() - 31536000000); //"1 年前"
   * libJsTimeAgotamp(Date.now() - 10000); //"刚刚"
   */
  libJsTimeAgo,

  /**
   * @description 根据当前时间返回问候语
   * @param greet 自定义问候语对象
   * @link 了解更多：https://www.npmjs.com/package/lyb-js
   * @example
   * libJsTimeGreeting(); //根据当前时间返回默认问候语
   * libJsTimeGreeting({ morning: "早安" }); //自定义早上问候语
   * libJsTimeGreeting({ afternoon: "午后好" }); //自定义下午问候语
   */
  libJsTimeGreeting,
};
