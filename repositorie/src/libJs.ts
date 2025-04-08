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
import { LibJsNumberStepper } from "./Misc/LibJsNumberStepper";
import { libJsFormatterByte } from "./Formatter/LibJsFormatterByte";
import { libJsMaskPhoneNumber } from "./Formatter/LibJsMaskPhoneNumber";
import { libJsNumberUnit } from "./Formatter/LibJsNumberUnit";
import { libJsNumComma } from "./Formatter/LibJsNumComma";
import { libJsSecondsFormatterChinese } from "./Formatter/LibJsSecondsFormatterChinese";
import { libJsCalculateExpression } from "./Math/LibJsCalculateExpression";
import { LibJsEmitter } from "./Misc/LibJsEmitter";
import { LibJsLerp } from "./Math/LibJsLerp";
import { LibJsNormalizeInRange } from "./Math/LibJsNormalizeInRange";
import { LibJsClassObservable } from "./Misc/LibJsClassObservable";

/** @description 基础方法 */
export const Base = {
  /**
   * @description 返回数据类型
   * @param v 需要判断类型的数据
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsColorConsole-有色打印
   */
  libJsGetDataType,

  /**
   * @description 延时执行，切换到其他页面会暂停
   * @param delay 延时毫秒数
   * @param fn 延时执行函数
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsPromiseTimeout-延时执行
   */
  libJsPromiseTimeout,
};

/** @description 浏览器相关方法 */
export const Browser = {
  /** @description console颜色打印
   * @param title 标题
   * @param color 颜色
   * @param logs 信息
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsColorConsole-有色打印
   */
  libJsColorConsole,

  /** @description 判断是否为移动设备
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsIsMobile-判断手机
   */
  libJsIsMobile,

  /** @description 判断是否为平板
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsIsPad-判断平板
   */
  libJsIsPad,

  /** @description 获取浏览器地址栏参数
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsPathParams-地址栏参数
   */
  libJsPathParams,

  /** @description 动态设置网站标题及图标
   * @param title 网站标题
   * @param url 网站图标地址
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsSetTitleIcon-网站标题图标
   */
  libJsSetTitleIcon,

  /** @description 网站标题交互，当从当前网页切换到其他网页，网站标题自动切换
   * @param backTitle 从其他网页返回时显示的标题
   * @param leaveTitle 从当前网页离开时显示的标题
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsTagTitleTip-网站标题交互
   */
  libJsTagTitleTip,

  /** @description 对象转为url参数
   * @param params 对象参数
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsObjToUrlParams-对象转Url参数
   */
  libJsObjToUrlParams,
};

/** @description 数据相关方法 */
export const Data = {
  /**
   * @description 将数组拆分成指定数组元素数量的多个数组
   * @param arr 需要拆分的数组
   * @param chunkSize 每个数组的元素数量
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsChunkArray-数组拆分
   */
  libJsChunkArray,

  /** @description 递归将JSON字符串深度解析为对象
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsDeepJSONParse-深度解析JSON
   */
  libJsDeepJSONParse,

  /**
   * @description 分类汇总，将数组对象按照指定键值整理成一个以键值为键名的对象
   * @param arr 要分组的数组
   * @param key 分组的键
   * @returns 分组后的对象
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsGroupArrayByKey-分类汇总
   */
  libJsGroupArrayByKey,

  /**
   * @description 匹配电子邮件，可用于实时输入时，自动补全常用邮箱后缀
   * @param str 要匹配的字符串
   * @param emailList 电子邮件后缀列表
   * @returns 匹配结果数组
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsMatchEmail-匹配E-Mail
   */
  libJsMatchEmail,

  /** @description 数组乱序
   * @param arr 需要乱序的数组
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsShuffleArray-数组乱序
   */
  libJsShuffleArray,

  /** @description 数组元素整体步数移动
   * @param arr 移动的数组
   * @param step 负数为向后移动，正数为向前移动
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsStepArray-数组偏移
   */
  libJsStepArray,

  /** @description 翻转指定索引后面的数组
   * @param arr 数组
   * @param index 开始索引
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibReverseArrayFromIndex-数组定位翻转
   */
  libReverseArrayFromIndex,
};

/** @description 文件相关方法 */
export const File = {
  /** @description 下载图片链接
   * @param link 图片链接
   * @param name 图片名称
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsDownloadImageLink-图片下载
   */
  libJsDownloadImageLink,

  /** @description 图片压缩
   * @param obj 压缩参数
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsImageOptimizer-图片压缩
   */
  libJsImageOptimizer,

  /**
   * @description 保存文件到本地
   * @param data 要保存的数据
   * @param name 文件名
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsSaveJson-保存文件
   */
  libJsSaveJson,
};

/** @description 格式化相关方法 */
export const Formatter = {
  /**
   * @description 格式化字节大小
   * @param bytes 字节数
   * @returns ['大小', '单位', '大小及单位']
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsFormatterByte-字节格式化
   */
  libJsFormatterByte,

  /**
   * @description 隐藏手机号码中间的四位数字
   * @param mobile 需要处理的手机号码
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsMaskPhoneNumber-隐藏手机号码
   */
  libJsMaskPhoneNumber,

  /**
   * @description 数字每三位添加逗号
   * @param num 需要格式化的数字
   * @param reserve 保留小数位数
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumComma-数字逗号
   */
  libJsNumComma,

  /** @description 将大于1000的数字使用k为单位
   * @param num 数字
   * @param units 单位组，key为单位，value为格式化阈值
   * @returns [数字, 单位]
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumberUnit-数字单位
   */
  libJsNumberUnit,

  /**
   * @description 将秒数格式化为中文时间描述，支持扩展到年和月
   * @param seconds 秒数
   * @returns 格式化后的中文时间
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsSecondsFormatterChinese-中文时间
   */
  libJsSecondsFormatterChinese,
};

/** @description 数学相关方法 */
export const Math = {
  /** @description 计算表达式字符串
   * @param expression 表达式字符串
   * @param point 小数点精度
   * @returns 计算结果
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsCalculateExpression-表达式字符串
   */
  libJsCalculateExpression,

  /**
   * @description 角度和弧度互相转换
   * @param value 角度值或弧度值
   * @param type 角度类型或弧度类型
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsConvertAngle-角弧度互转
   */
  libJsConvertAngle,

  /** @description 计算两点角度
   * @param coord1 起点坐标
   * @param coord2 终点坐标
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsCoordsAngle-两点角度
   */
  libJsCoordsAngle,

  /** @description 计算两点距离
   * @param coord1 起点坐标
   * @param coord2 终点坐标
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsCoordsDistance-两点距离
   */
  libJsCoordsDistance,

  /** @description 计算两个数的运算结果，并保留指定位数的小数
   * @param num1 第一个数
   * @param num2 第二个数
   * @param operator 运算符，支持加减乘除
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsDecimal-高精度计算
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
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsRegFormValidate-表单验证
   */
  libJsRegFormValidate,

  /** @description 请求失败重连
   * @param promiseFn 请求函数
   * @param maxRetries 最大重试次数
   * @param retryDelay 重试间隔时间
   * @param params 请求参数
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsRetryRequest-请求重连
   */
  libJsRetryRequest,

  /** @description 数字步进器
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNumberStepper-数字步进器
   */
  LibJsNumberStepper,


  /** @description 线性插值
   * @param start 当 value = 0 时，返回 start
   * @param end 当 value = 1 时，返回 end
   * @param value 插值比例，取值范围 0~1
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsLerp-线性插值
   */
  LibJsLerp,

  /** @description 值介于起点与终点之间时返回一个介于0与1之间的数
   * @param start 起点
   * @param end 终点
   * @param value 动态值
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsNormalizeInRange-范围归一化
   */
  LibJsNormalizeInRange,

  /** @description 事件发射器
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsEmitter-事件发射器
   */
  LibJsEmitter,

  /** @description 类属性监听器
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsClassObservable-类属性监听器
   */
  LibJsClassObservable,
};

/** @description 随机相关方法 */
export const Random = {
  /** @description 百分比概率结果
   * @param probability 触发概率，百分比，0-100
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsProbabilityResult-概率触发
   */
  libJsProbabilityResult,

  /** @description 随机数
   * @param min 最小值
   * @param max 最大值
   * @param num 保留小数位数
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsRandom-随机数
   */
  libJsRandom,

  /** @description 随机 RGBA 颜色
   * @param alpha 透明度
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsRandomColor-随机色
   */
  libJsRandomColor,

  /** @description 随机生成n个指定范围的随机数数组
   * @param min 最小值
   * @param max 最大值
   * @param count 数组长度
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsUniqueRandomNumbers-随机数数组
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
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsSameTimeCheck-时间比对
   */
  libJsSameTimeCheck,

  /** @description 时间差计算
   * @param timestamp 毫秒时间戳
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsTimeAgo-中文时间差
   */
  libJsTimeAgo,

  /**
   * @description 根据当前时间返回问候语
   * @param greet 自定义问候语对象
   * @link 使用方法：https://www.npmjs.com/package/lyb-js#LibJsTimeGreeting-时间问候
   */
  libJsTimeGreeting,
};
