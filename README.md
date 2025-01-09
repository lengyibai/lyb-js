# Lib自用JS工具方法

## 介绍

> 该库为作者在写项目时收集的常用方法，代码简陋，没有严格的边缘处理
>
> 鼠标悬浮在每一个方法上都有较为完整的`Jsdoc`提示

## 起步

> 完整使用

```ts
import { LibJs } from "lyb-js";

LibJs.Base.libJsGetDataType("Hellow World!"); //"string"
```

> 按需引入，打包时就不会把整个库打进去

```ts
import { libJsGetDataType } from "lyb-js/dist/Base/LibJsGetDataType";

libJsGetDataType("Hellow World!"); //"string"
```

> 如果在多个文件使用到同一个方法，建议采用按需引入聚合导出

```ts
//你的公共工具函数文件 utils.ts
export * from "lyb-js/dist/Base/LibJsGetDataType";
export * from "lyb-js/dist/Math/LibJsCalculateExpression";

//你的项目文件 index.ts
import { libJsGetDataType,libJsCalculateExpression } from "utils";

libJsGetDataType("Hellow World!"); //"string"
libJsCalculateExpression("(1+2)-(3*4)/5"); //0.6
```

**通过 `CDN ` 使用 `LibJs`**

> 你可以借助 `script` 标签直接通过 `CDN` 来使用 `LibJs`

```html
<script src="https://unpkg.com/lyb-js/umd/lyb.js"></script>

<script>
LibJs.Base.libJsGetDataType("Hellow World!"); //"string"
</script>
```

## 目录

### 基础

\- [LibJsGetDataType-数据类型](#LibJsGetDataType-数据类型)

\- [LibJsPromiseTimeout-延时执行](#LibJsPromiseTimeout-延时执行)


### Browser-浏览器

\- [LibJsColorConsole-有色打印](#LibJsColorConsole-有色打印)

\- [LibJsIsMobile-判断手机](#LibJsIsMobile-判断手机)

\- [LibJsIsPad-判断平板](#LibJsIsPad-判断平板)

\- [LibJsPathParams-地址栏参数](#LibJsPathParams-地址栏参数)

\- [LibJsSetTitleIcon-网站标题图标](#LibJsSetTitleIcon-网站标题图标)

\- [LibJsTagTitleTip-网站标题交互](#LibJsTagTitleTip-网站标题交互)

\- [LibJsObjToUrlParams-对象转Url参数](#LibJsObjToUrlParams-对象转Url参数)


### Data-数据

\- [LibJsChunkArray-数组拆分](#LibJsChunkArray-数组拆分)

\- [LibJsDeepJSONParse-深度解析JSON](#LibJsDeepJSONParse-深度解析JSON)

\- [LibJsGroupArrayByKey-分类汇总](#LibJsGroupArrayByKey-分类汇总)

\- [LibJsMatchEmail-匹配E-Mail](#LibJsMatchEmail-匹配E-Mail)

\- [LibJsShuffleArray-数组乱序](#LibJsShuffleArray-数组乱序)

\- [LibJsStepArray-数组偏移](#LibJsStepArray-数组偏移)

\- [LibReverseArrayFromIndex-数组定位翻转](#LibReverseArrayFromIndex-数组定位翻转)


### File-文件

\- [LibJsDownloadImageLink-图片下载](#LibJsDownloadImageLink-图片下载)

\- [LibJsImageOptimizer-图片压缩](#LibJsImageOptimizer-图片压缩)

\- [LibJsSaveJson-保存文件](#LibJsSaveJson-保存文件)


### Formatter-格式化

\- [LibJsFormatterByte-字节格式化](#LibJsFormatterByte-字节格式化)

\- [LibJsMaskPhoneNumber-隐藏手机号码](#LibJsMaskPhoneNumber-隐藏手机号码)

\- [LibJsNumberUnit-数字单位](#LibJsNumberUnit-数字单位)

\- [LibJsNumComma-数字逗号](#LibJsNumComma-数字逗号)

\- [LibJsSecondsFormatterChinese-中文时间](#LibJsSecondsFormatterChinese-中文时间)


### Math-数学

\- [LibJsCalculateExpression-表达式字符串](#LibJsCalculateExpression-表达式字符串)

\- [LibJsConvertAngle-角弧度互转](#LibJsConvertAngle-角弧度互转)

\- [LibJsCoordsAngle-两点角度](#LibJsCoordsAngle-两点角度)

\- [LibJsCoordsDistance-两点距离](#LibJsCoordsDistance-两点距离)

\- [LibJsDecimal-高精度计算](#LibJsDecimal-高精度计算)

### Misc-杂项

\- [LibJsRegFormValidate-表单验证](#LibJsRegFormValidate-表单验证)

\- [LibJsRetryRequest-请求重连](#LibJsRetryRequest-请求重连)

\- [LibNumerStepper-数字步进器](#LibNumerStepper-数字步进器)


### Random-随机

\- [LibJsProbabilityResult-概率触发](#LibJsProbabilityResult-概率触发)

\- [LibJsRandom-随机数](#LibJsRandom-随机数)

\- [LibJsRandomColor-随机色](#LibJsRandomColor-随机色)

\- [LibJsUniqueRandomNumbers-随机数数组](#LibJsUniqueRandomNumbers-随机数数组)


### Time-时间

\- [LibJsSameTimeCheck-时间比对](#LibJsSameTimeCheck-时间比对)

\- [LibJsTimeAgo-中文时间差](#LibJsTimeAgo-中文时间差)

\- [LibJsTimeGreeting-时间问候](#LibJsTimeGreeting-时间问候)


## Base-基础

### LibJsGetDataType-数据类型

> 返回数据类型

```ts
libJsGetDataType(123); //"number"
libJsGetDataType("hello"); //"string"
libJsGetDataType([1, 2, 3]); //"array"
```

### LibJsPromiseTimeout-延时执行

> 延时执行，切换到其他页面会暂停

```ts
libJsPromiseTimeout(3000, () => {
  console.log("执行延时函数");
});
```

## Browser-浏览器

### LibJsColorConsole-有色打印

> `console`有色打印

```ts
//使用红色打印日志
libJsColorConsole("错误提示", "red", [{ label: "错误代码", value: 500 }]);

//使用蓝色打印简单日志
libJsColorConsole("信息", "blue", "操作成功");
```

### LibJsIsMobile-判断手机

> 判断是否为移动设备

```ts
const isMobile = libJsIsMobile();
console.log(isMobile); //true 或 false
```

### LibJsIsPad-判断平板

> 判断是否为平板

```ts
const isPad = libJsIsPad();
console.log(isPad); //true 或 false
```

### LibJsPathParams-地址栏参数

> 获取浏览器地址栏参数

```ts
const params = libJsPathParams();
console.log(params); //{ param1: "value1", param2: "value2" }
```

### LibJsSetTitleIcon-网站标题图标

> 动态设置网站标题及图标，涉及到不同平台的打包，可以根据不同环境来设置网站标题和图标

```ts
libJsSetTitleIcon("我的网站", "https://example.com/favicon.ico");
```

### LibJsTagTitleTip-网站标题交互

> 网站标题交互，当从当前网页切换到其他网页，网站标题自动切换

```ts
libJsTagTitleTip("欢迎回来", "来和妲己玩耍吧！");
```

### LibJsObjToUrlParams-对象转Url参数

> 将对象转为地址栏参数

```js
libJsObjToParams({ name: "John", age: 30, active: true });
// "name=John&age=30&active=true"
```

## Data-数据

### LibJsChunkArray-数组拆分

> 将数组拆分成指定数组元素数量的多个数组

```ts
const chunks = libJsChunkArray([1, 2, 3, 4, 5, 6], 2);
console.log(chunks); //[[1, 2], [3, 4], [5, 6]]
```

### LibJsDeepJSONParse-深度解析JSON

> 递归将JSON字符串深度解析为对象

```ts
const obj = libJsDeepJSONParse('{"a": 1, "b": "{\"c\": 2}"}');
console.log(obj); //{ a: 1, b: { c: 2 } }
```

### LibJsGroupArrayByKey-分类汇总

> 将数组对象按照指定键值整理成一个以键值为键名的对象

```ts
const grouped = libJsGroupArrayByKey([{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 1, name: 'C' }], 'id');
console.log(grouped); //{ 1: [{ id: 1, name: 'A' }, { id: 1, name: 'C' }], 2: [{ id: 2, name: 'B' }] }
```

### LibJsMatchEmail-匹配E-Mail

> 可用于实时输入时，自动补全常用邮箱后缀

```ts
const emails = libJsMatchEmail("user", ["@gmail.com", "@yahoo.com"]);
console.log(emails); //["user@gmail.com", "user@yahoo.com"]
```

### LibJsShuffleArray-数组乱序

> 将数组打乱顺序

```ts
const shuffled = libJsShuffleArray([1, 2, 3, 4, 5]);
console.log(shuffled); //[3, 5, 2, 1, 4] （结果每次不同）
```

### LibJsStepArray-数组偏移

> 数组元素整体步数移动

```ts
const moved = libJsStepArray([1, 2, 3, 4, 5], 2);
console.log(moved); //[4, 5, 1, 2, 3]
```

### LibReverseArrayFromIndex-数组定位翻转

> 翻转指定索引后面的数组

```ts
libReverseArrayFromIndex([1, 2, 3, 4, 5], 1);
// [1, 2, 5, 4, 3]
```

## File-文件

### LibJsDownloadImageLink-图片下载

> 将链接图片下载到本地

```ts
libJsDownloadImageLink("https://example.com/image.jpg", "图片.jpg");
```

### LibJsImageOptimizer-图片压缩

> 支持`png`压缩，保留透明背景

```ts
//图片压缩使用示例
libJsImageOptimizerOptionsParams({
  file: myFile,
  ratio: 0.8,
  width: 800,
  maxSize: 1024,
  success: (formData, file, url) => {
    console.log('压缩成功', formData, file, url);
  },
  fail: (error) => {
    console.error('压缩失败', error);
  }
});
```

### LibJsSaveJson-保存文件

> 保存`JSON`文件到本地，也支持保存纯文本的`txt`文件

```ts
libJsSaveJson("example.json", JSON.stringify({ key: "value" }));
libJsSaveJson("example.txt", "Hellow World!");
```

## Formatter-格式化

### LibJsFormatterByte-字节格式化

> 将字节单位的数字格式化

```ts
const [size, unit, formatted] = libJsFormatterByte(2048);
console.log(size, unit, formatted); //2.00 KB 2.00 KB
```

### LibJsMaskPhoneNumber-隐藏手机号码

> 隐藏手机号码中间的四位数字

```ts
const masked = libJsMaskPhoneNumber("13812345678");
console.log(masked); //138****5678
```

### LibJsNumberUnit-数字单位

> 大于指定数字，用单位标识，你甚至可以用中文

```ts
const [value, unit] = libJsNumberUnit(1500, { K: 1000, M: 1000000 });
console.log(value, unit); //1.50 K

const [value, unit] = libJsNumberUnit(0.05, { 分: 0.01, 角: 0.1, 元: 1 });
console.log(value, unit); //0.05 分
```

### LibJsNumComma-数字逗号

> 数字每三位添加逗号

```ts
const formatted = libJsNumComma(1234567.89);
console.log(formatted); //1,234,567.89
```

### LibJsSecondsFormatterChinese-中文时间

> 将秒数格式化为中文时间描述，支持扩展到年

```ts
libJsSecondsFormatterChinese(100000); //"1天3小时46分40秒"
libJsSecondsFormatterChinese(31536000); //"1年"
libJsSecondsFormatterChinese(3600); //"1小时"
libJsSecondsFormatterChinese(90); //"1分30秒"
```

## Math-数学

### LibJsCalculateExpression-表达式字符串

> 计算表达式字符串

```ts
const result = libJsCalculateExpression("(1+2)-(3*4)/5");
console.log(result); //0.6
```

### LibJsConvertAngle-角弧度互转

> 角度和弧度互相转换

```ts
//角度转弧度
libJsConvertAngle(90, "rad"); //返回 1.5708... (π/2)

//弧度转角度
libJsConvertAngle(Math.PI, "deg"); //返回 180
```

### LibJsCoordsAngle-两点角度

> 计算两点角度

```ts
libJsCoordsAngle({ x: 0, y: 0 }, { x: 1, y: 0 }); //0
libJsCoordsAngle({ x: 0, y: 0 }, { x: 1, y: 1 }); //45
libJsCoordsAngle({ x: 0, y: 0 }, { x: 0, y: 1 }); //90
```

### LibJsCoordsDistance-两点距离

> 计算两点距离

```ts
libJsCoordsDistance({ x: 0, y: 0 }, { x: 3, y: 4 }); //5
libJsCoordsDistance({ x: 1, y: 1 }, { x: 4, y: 5 }); //5
libJsCoordsDistance({ x: 0, y: 0 }, { x: 0, y: 0 }); //0
```

### LibJsDecimal-高精度计算

> 计算两个数的运算结果，并保留指定位数的小数

```ts
libJsDecimal(10, 3, "+"); //13
libJsDecimal(10, 3, "-"); //7
libJsDecimal(10, 3, "/", 2); //3.33
```

## Misc-杂项

### LibJsRegFormValidate-表单验证

> 通过传递对象数字的方式进行正则或自定义函数进行验证

```ts
const form = { username: "john", email: "john@example.com" };
const rules = [
  { key: "username", verify: /^[a-zA-Z0-9]{3,}$/, msg: "用户名不合法", name: "用户名" },
  { key: "email", verify: /^\S+@\S+\.\S+$/, msg: "邮箱格式不正确", name: "邮箱" },
];
libJsRegFormValidate(form, rules);
//返回结果: []

const invalidForm = { username: "jo", email: "invalid-email" };
libJsRegFormValidate(invalidForm, rules);
//返回结果: [
//  { key: "username", msg: "用户名不合法", name: "用户名" },
//  { key: "email", msg: "邮箱格式不正确", name: "邮箱" }
//]
```

### LibJsRetryRequest-请求重连

> 请求失败重连

```ts
const requestFn = (params: { url: string }) => fetch(params.url).then(res => res.json());
const params = { url: "https://api.example.com/data" };
libJsRetryRequest({
  promiseFn: requestFn,
  params,
  maxRetries: 5,
  retryDelay: 1000
})
.then(data => console.log(data))
.catch(err => console.error(err));
```

### LibNumerStepper-数字步进器

> 通过调用方法来增加和减少数字索引

```ts
const stepper = new libNumerStepper(10, (index) => console.log(index));
stepper.down("add"); // 索引加1
stepper.updateIndex(5); // 更新索引为5
stepper.down("sub"); // 索引减1
```

## Random-随机

### LibJsProbabilityResult-概率触发

> 百分比概率结果

```ts
libJsProbabilityResult(50); //50% 概率为 true
libJsProbabilityResult(80); //80% 概率为 true
libJsProbabilityResult(100); //100% 概率为 true
```

### LibJsRandom-随机数

> 随机获取两个数之间的值，包含两数自身

```ts
libJsRandom(1, 10); //1 到 10 之间的随机整数
libJsRandom(1, 10, 2); //1 到 10 之间保留两位小数的随机数
```

### LibJsRandomColor-随机色

> 随机 RGBA 颜色

```ts
libJsRandomColor(); //生成随机的 RGBA 颜色，默认透明度 1
libJsRandomColor(0.5); //生成随机的 RGBA 颜色，透明度为 0.5
```

### LibJsUniqueRandomNumbers-随机数数组

> 随机生成指定个数、指定范围不重复的随机数数组

```ts
libJsUniqueRandomNumbers(1, 10, 5); //从 1 到 10 中随机生成 5 个唯一数字
libJsUniqueRandomNumbers(1, 100, 10); //从 1 到 100 中随机生成 10 个唯一数字
```

## Time-时间

### LibJsSameTimeCheck-时间比对

> 传入时间戳与当前时间判断是否为同一分、同一时、同一天、同一周、同一月、同一年

```ts
const timestamp = 1679872800000; //时间戳
const result = libJsSameTimeCheck(timestamp, 'day'); //判断是否为同一天
console.log(result); //0: 同一天, 1: 新的一天, -1: 时间戳大于当前时间
```

### LibJsTimeAgo-中文时间差

> 时间差计算

```ts
libJsTimeAgotamp(Date.now() - 3600000); //"1 小时前"
libJsTimeAgotamp(Date.now() - 86400000); //"1 天前"
libJsTimeAgotamp(Date.now() - 31536000000); //"1 年前"
libJsTimeAgotamp(Date.now() - 10000); //"刚刚"
```

### LibJsTimeGreeting-时间问候

> 根据当前时间返回问候语

```ts
libJsTimeGreeting(); //根据当前时间返回默认问候语
libJsTimeGreeting({ morning: "早安" }); //自定义早上问候语
libJsTimeGreeting({ afternoon: "午后好" }); //自定义下午问候语
```

