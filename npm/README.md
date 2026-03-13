# Lib自用JS工具方法

## 介绍

`lyb-js` 是一个偏项目实用型的工具集合，覆盖浏览器交互、数据处理、数学计算、时间格式化、随机工具等常见场景。

文档以“快速上手”为目标：

- 先告诉你怎么安装、怎么导入
- 再给每个工具最常用的调用方式
- 示例尽量贴近实际项目，不把 README 写成冗长 API 手册

## 安装

```bash
npm install lyb-js
```

```bash
pnpm add lyb-js
```

```bash
yarn add lyb-js
```

## 起步

### 1. 整库引入

适合快速试用，或者你已经统一通过 `LibJs` 管理工具访问。

```ts
import { LibJs } from "lyb-js";

const type = LibJs.Base.libJsGetDataType("Hello World");
console.log(type); // "string"
```

### 2. 按需引入

更推荐。只引入当前用到的方法，路径按分类和文件名区分。

```ts
import { libJsGetDataType } from "lyb-js/Base/LibJsGetDataType";
import { libJsCalculateExpression } from "lyb-js/Math/LibJsCalculateExpression";

console.log(libJsGetDataType([1, 2, 3])); // "array"
console.log(libJsCalculateExpression("(1+2)-(3*4)/5")); // 0.6
```

### 3. 项目内二次封装

如果同一批工具会在多个文件重复使用，建议在你自己的 `utils.ts` 中统一导出。

```ts
// utils.ts
export * from "lyb-js/Base/LibJsGetDataType";
export * from "lyb-js/Math/LibJsCalculateExpression";
export * from "lyb-js/Browser/LibJsGetRowValue";
```

```ts
// page.ts
import {
  libJsGetDataType,
  libJsCalculateExpression,
  libJsGetRowValue,
} from "./utils";

console.log(libJsGetDataType({ a: 1 })); // "object"
console.log(libJsCalculateExpression("10/4", 2)); // 2.5
console.log(libJsGetRowValue({ user: { name: "Tom" } }, "user.name")); // "Tom"
```

## 使用说明

### 环境说明

- `Browser`、`File` 中的大多数工具依赖 `window`、`document`、`navigator`，适合浏览器环境。
- `Data`、`Formatter`、`Math`、`Random` 中的大多数工具既可在浏览器使用，也可在 Node 环境使用。
- `Time` 分类依赖 `dayjs` 的少量能力，但作为库使用时你只需要正常安装 `lyb-js` 即可。

### 阅读方式

每个工具章节都遵循同一结构：

1. 作用说明
2. 按需导入
3. 1 到 2 个最常见示例

如果你只想找某个工具的导入方式，可以直接看每个章节的第一段代码。

## 目录

### Base-基础

- [LibJsGetDataType-数据类型](#libjsgetdatatype-数据类型)
- [LibJsIsNull-是否为空值](#libjsisnull-是否为空值)
- [LibJsPromiseTimeout-延时执行](#libjspromisetimeout-延时执行)
- [LibJsResizeWatcher-窗口监听](#libjsresizewatcher-窗口监听)

### Browser-浏览器

- [LibJsColorConsole-有色打印](#libjscolorconsole-有色打印)
- [LibJsCopy-复制文本到剪贴板](#libjscopy-复制文本到剪贴板)
- [LibJsGetRowValue-按点路径获取对象值](#libjsgetrowvalue-按点路径获取对象值)
- [LibJsIsMobile-判断手机](#libjsismobile-判断手机)
- [LibJsIsPad-判断平板](#libjsispad-判断平板)
- [LibJsObjToUrlParams-对象转Url参数](#libjsobjtourlparams-对象转url参数)
- [LibJsParseQueryString-URL参数转对象](#libjsparsequerystring-url参数转对象)
- [LibJsPathParams-地址栏参数](#libjspathparams-地址栏参数)
- [LibJsSetTitleIcon-网站标题图标](#libjssettitleicon-网站标题图标)
- [LibJsTagTitleTip-网站标题交互](#libjstagtitletip-网站标题交互)

### Data-数据

- [LibJsChunkArray-数组拆分](#libjschunkarray-数组拆分)
- [LibJsDeepJSONParse-深度解析JSON](#libjsdeepjsonparse-深度解析json)
- [LibJsGroupArrayByKey-分类汇总](#libjsgrouparraybykey-分类汇总)
- [LibJsMatchEmail-匹配E-Mail](#libjsmatchemail-匹配e-mail)
- [libJsPickUnique-随机选择未使用元素](#libjspickunique-随机选择未使用元素)
- [LibJsShuffleArray-数组乱序](#libjsshufflearray-数组乱序)
- [LibJsStepArray-数组偏移](#libjssteparray-数组偏移)
- [LibReverseArrayFromIndex-数组定位翻转](#libreversearrayfromindex-数组定位翻转)

### File-文件

- [LibJsDownloadImageLink-图片下载](#libjsdownloadimagelink-图片下载)
- [LibJsImageOptimizer-图片压缩](#libjsimageoptimizer-图片压缩)
- [LibJsSaveJson-保存文件](#libjssavejson-保存文件)

### Formatter-格式化

- [LibJsFormatterByte-字节格式化](#libjsformatterbyte-字节格式化)
- [LibJsMaskPhoneNumber-隐藏手机号码](#libjsmaskphonenumber-隐藏手机号码)
- [LibJsNumberUnit-数字单位](#libjsnumberunit-数字单位)
- [LibJsNumComma-数字逗号](#libjsnumcomma-数字逗号)
- [LibJsSecondsFormatterChinese-中文时间](#libjssecondsformatterchinese-中文时间)

### Math-数学

- [LibJsCalculateExpression-表达式字符串](#libjscalculateexpression-表达式字符串)
- [LibJsConvertAngle-角弧度互转](#libjsconvertangle-角弧度互转)
- [LibJsCoordsAngle-两点角度](#libjscoordsangle-两点角度)
- [LibJsCoordsDistance-两点距离](#libjscoordsdistance-两点距离)
- [LibJsDecimal-高精度计算](#libjsdecimal-高精度计算)
- [LibJsLerp-线性插值](#libjslerp-线性插值)
- [LibJsNormalizeInRange-范围归一化](#libjsnormalizeinrange-范围归一化)

### Misc-杂项

- [LibJsClassObservable-类属性监听器](#libjsclassobservable-类属性监听器)
- [LibJsEmitter-事件发射器](#libjsemitter-事件发射器)
- [LibJsEmitterClose-一次性关闭监听](#libjsemitterclose-一次性关闭监听)
- [LibJsHorizontal-游戏横版状态](#libjshorizontal-游戏横版状态)
- [LibJsNumberStepper-数字步进器](#libjsnumberstepper-数字步进器)
- [LibJsPruneEmpty-对象属性去空值](#libjspruneempty-对象属性去空值)
- [LibJsPullUpLoad-上拉加载](#libjspullupload-上拉加载)
- [LibJsRegFormValidate-表单验证](#libjsregformvalidate-表单验证)
- [LibJsRetryRequest-请求重连](#libjsretryrequest-请求重连)

### Random-随机

- [LibJsProbabilityResult-概率触发](#libjsprobabilityresult-概率触发)
- [LibJsRandom-随机数](#libjsrandom-随机数)
- [LibJsRandomColor-随机色](#libjsrandomcolor-随机色)
- [LibJsUniqueRandomNumbers-随机数数组](#libjsuniquerandomnumbers-随机数数组)

### Time-时间

- [LibJsCountdown-倒计时](#libjscountdown-倒计时)
- [LibJsSameTimeCheck-时间比对](#libjssametimecheck-时间比对)
- [LibJsTimeAgo-中文时间差](#libjstimeago-中文时间差)
- [LibJsTimeGreeting-时间问候](#libjstimegreeting-时间问候)

## Base-基础

### LibJsGetDataType-数据类型

返回标准化后的数据类型字符串。

```ts
import { libJsGetDataType } from "lyb-js/Base/LibJsGetDataType";

console.log(libJsGetDataType(123)); // "number"
console.log(libJsGetDataType("hello")); // "string"
console.log(libJsGetDataType([1, 2, 3])); // "array"
console.log(libJsGetDataType(() => {})); // "function"
```

### LibJsIsNull-是否为空值

判断值是否为 `null`、`undefined` 或空字符串 `""`。

```ts
import { libJsIsNull } from "lyb-js/Base/LibJsIsNull";

console.log(libJsIsNull(null)); // true
console.log(libJsIsNull(undefined)); // true
console.log(libJsIsNull("")); // true
console.log(libJsIsNull(0)); // false
```

### LibJsPromiseTimeout-延时执行

延时执行回调；页面切到后台时会暂停计时，回到当前页后继续。

```ts
import { libJsPromiseTimeout } from "lyb-js/Base/LibJsPromiseTimeout";

await libJsPromiseTimeout(1000, () => {
  console.log("1 秒后执行");
});

console.log("延时结束");
```

### LibJsResizeWatcher-窗口监听

监听窗口尺寸变化，适合做画布缩放、布局适配或横竖屏比例计算。

```ts
import { LibJsResizeWatcher } from "lyb-js/Base/LibJsResizeWatcher";

const watcher = new LibJsResizeWatcher();

const off = watcher.on((w, h, scale) => {
  console.log("窗口宽高", w, h);
  console.log("缩放比例", scale);
});

off();
```

```ts
const fixedHorizontal = new LibJsResizeWatcher("h");
fixedHorizontal.on((w, h, scale) => {
  console.log(w, h, scale); // 1920 1080 ...
});
```

## Browser-浏览器

### LibJsColorConsole-有色打印

给 `console.log` 增加标题色块和结构化信息，适合调试接口和业务流程。

```ts
import { libJsColorConsole } from "lyb-js/Browser/LibJsColorConsole";

libJsColorConsole("请求成功", "green", [
  { label: "接口", value: "/api/user" },
  { label: "状态码", value: 200 },
]);

libJsColorConsole("调试信息", "blue", { page: "home", loaded: true });
```

### LibJsCopy-复制文本到剪贴板

复制字符串到剪贴板，内部兼容 `navigator.clipboard` 和降级方案。

```ts
import { libJsCopy } from "lyb-js/Browser/LibJsCopy";

button.addEventListener("click", () => {
  libJsCopy("Hello World!");
});
```

### LibJsGetRowValue-按点路径获取对象值

按点路径读取对象中的嵌套值，路径不存在时返回 `undefined`。

```ts
import { libJsGetRowValue } from "lyb-js/Browser/LibJsGetRowValue";

const row = {
  user: {
    profile: {
      name: "Tom",
    },
  },
};

console.log(libJsGetRowValue(row, "user.profile.name")); // "Tom"
console.log(libJsGetRowValue(row, "user.profile.age")); // undefined
```

### LibJsIsMobile-判断手机

通过 `userAgent` 判断当前设备是否为手机端。

```ts
import { libJsIsMobile } from "lyb-js/Browser/LibJsIsMobile";

if (libJsIsMobile()) {
  console.log("当前是手机设备");
}
```

### LibJsIsPad-判断平板

结合 `userAgent`、屏幕尺寸、宽高比判断是否为平板设备。

```ts
import { libJsIsPad } from "lyb-js/Browser/LibJsIsPad";

console.log(libJsIsPad()); // true 或 false
```

### LibJsObjToUrlParams-对象转Url参数

把普通对象拼接成查询字符串。

```ts
import { libJsObjToUrlParams } from "lyb-js/Browser/LibJsObjToUrlParams";

const query = libJsObjToUrlParams({
  name: "John",
  age: 30,
  active: true,
});

console.log(query); // "name=John&age=30&active=true"
```

### LibJsParseQueryString-URL参数转对象

把查询字符串转回对象。注意导入路径文件名是小写 `libJsParseQueryString`。

```ts
import { libJsParseQueryString } from "lyb-js/Browser/libJsParseQueryString";

console.log(libJsParseQueryString("name=lengyibai&age=18"));
// { name: "lengyibai", age: "18" }
```

### LibJsPathParams-地址栏参数

读取当前地址栏参数，也可以传入一段完整 URL 进行解析。

```ts
import { libJsPathParams } from "lyb-js/Browser/LibJsPathParams";

console.log(libJsPathParams("https://example.com?a=1&b=hello"));
// { a: "1", b: "hello" }
```

### LibJsSetTitleIcon-网站标题图标

动态设置网页标题和 favicon。

```ts
import { libJsSetTitleIcon } from "lyb-js/Browser/LibJsSetTitleIcon";

libJsSetTitleIcon("我的网站", "/favicon.ico");
```

### LibJsTagTitleTip-网站标题交互

页面隐藏和返回时切换标题，适合网页消息提醒。

```ts
import { libJsTagTitleTip } from "lyb-js/Browser/LibJsTagTitleTip";

libJsTagTitleTip("欢迎回来", "你有新的消息");
```

## Data-数据

### LibJsChunkArray-数组拆分

把数组按固定长度拆成多个小数组。

```ts
import { libJsChunkArray } from "lyb-js/Data/LibJsChunkArray";

console.log(libJsChunkArray([1, 2, 3, 4, 5, 6], 2));
// [[1, 2], [3, 4], [5, 6]]
```

### LibJsDeepJSONParse-深度解析JSON

递归解析对象或数组中嵌套的 JSON 字符串。

```ts
import { libJsDeepJSONParse } from "lyb-js/Data/LibJsDeepJSONParse";

const data = '{"user":"{\\"name\\":\\"Tom\\",\\"age\\":18}"}';
console.log(libJsDeepJSONParse(data));
// { user: { name: "Tom", age: 18 } }
```

### LibJsGroupArrayByKey-分类汇总

按对象中的某个字段分组。

```ts
import { libJsGroupArrayByKey } from "lyb-js/Data/LibJsGroupArrayByKey";

const list = [
  { type: "fruit", name: "apple" },
  { type: "fruit", name: "banana" },
  { type: "drink", name: "tea" },
];

console.log(libJsGroupArrayByKey(list, "type"));
// {
//   fruit: [{...}, {...}],
//   drink: [{...}]
// }
```

### LibJsMatchEmail-匹配E-Mail

根据当前输入自动补全邮箱后缀。

```ts
import { libJsMatchEmail } from "lyb-js/Data/LibJsMatchEmail";

const result = libJsMatchEmail("user@g", ["@gmail.com", "@github.com"]);
console.log(result); // ["user@gmail.com", "user@github.com"]
```

### libJsPickUnique-随机选择未使用元素

从候选数组中随机选一个还没有被使用过的元素。

```ts
import { libJsPickUnique } from "lyb-js/Data/libJsPickUnique";

const pool = ["A", "B", "C", "D"];
const used = ["A", "B"];

console.log(libJsPickUnique(pool, used)); // "C" 或 "D"
console.log(libJsPickUnique(["A"], ["A"])); // undefined
```

### LibJsShuffleArray-数组乱序

返回一个打乱顺序的新数组，不会直接修改原数组。

```ts
import { libJsShuffleArray } from "lyb-js/Data/LibJsShuffleArray";

console.log(libJsShuffleArray([1, 2, 3, 4, 5]));
// [3, 5, 1, 4, 2] 结果每次不同
```

### LibJsStepArray-数组偏移

让数组整体循环移动；正数向右移，负数向左移。

```ts
import { libJsStepArray } from "lyb-js/Data/LibJsStepArray";

console.log(libJsStepArray([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]

console.log(libJsStepArray([1, 2, 3, 4, 5], -1));
// [2, 3, 4, 5, 1]
```

### LibReverseArrayFromIndex-数组定位翻转

保留某个索引之前的内容，把该索引后面的数组反转。

```ts
import { libReverseArrayFromIndex } from "lyb-js/Data/LibReverseArrayFromIndex";

console.log(libReverseArrayFromIndex([1, 2, 3, 4, 5], 1));
// [1, 2, 5, 4, 3]
```

## File-文件

### LibJsDownloadImageLink-图片下载

把图片链接下载到本地。

```ts
import { libJsDownloadImageLink } from "lyb-js/File/LibJsDownloadImageLink";

libJsDownloadImageLink("https://example.com/banner.jpg", "banner.jpg");
```

### LibJsImageOptimizer-图片压缩

在浏览器里压缩图片，并通过回调拿到压缩后的 `File`、`FormData` 和预览地址。

```ts
import { libJsImageOptimizer } from "lyb-js/File/LibJsImageOptimizer";

input.addEventListener("change", () => {
  const file = input.files?.[0];
  if (!file) return;

  libJsImageOptimizer({
    file,
    width: 1200,
    ratio: 0.8,
    maxSize: 1024,
    success(formData, newFile, url) {
      console.log(formData, newFile);
      preview.src = url;
    },
    fail(error) {
      console.error("压缩失败", error);
    },
  });
});
```

### LibJsSaveJson-保存文件

把字符串或 JSON 内容保存成浏览器下载文件。

```ts
import { libJsSaveJson } from "lyb-js/File/LibJsSaveJson";

const content = JSON.stringify({ name: "Tom", age: 18 }, null, 2);
libJsSaveJson("user.json", content);
```

## Formatter-格式化

### LibJsFormatterByte-字节格式化

把字节数格式化为更易读的大小信息。

```ts
import { libJsFormatterByte } from "lyb-js/Formatter/LibJsFormatterByte";

console.log(libJsFormatterByte(1536));
// ["1.50", "KB", "1.50 KB"]
```

### LibJsMaskPhoneNumber-隐藏手机号码

文件名是 `LibJsMaskPhoneNumber`，导出的方法名是 `libJsMaskCenterFour`。

```ts
import { libJsMaskCenterFour } from "lyb-js/Formatter/LibJsMaskPhoneNumber";

console.log(libJsMaskCenterFour("13800138000"));
// "138****8000"
```

### LibJsNumberUnit-数字单位

根据阈值自动追加单位，适合展示“万、亿、K、M”等短格式数字。

```ts
import { libJsNumberUnit } from "lyb-js/Formatter/LibJsNumberUnit";

console.log(libJsNumberUnit(12600, { 万: 10000, 亿: 100000000 }, 1));
// "1.2万"

console.log(libJsNumberUnit(2500000, { K: 1000, M: 1000000 }, 2));
// "2.50M"
```

### LibJsNumComma-数字逗号

给数字加千分位，并按指定小数位截断，不做四舍五入。

```ts
import { libJsNumComma } from "lyb-js/Formatter/LibJsNumComma";

console.log(libJsNumComma(1234567.8912, 2));
// "1,234,567.89"
```

### LibJsSecondsFormatterChinese-中文时间

把秒数格式化成中文时间描述。

```ts
import { libJsSecondsFormatterChinese } from "lyb-js/Formatter/LibJsSecondsFormatterChinese";

console.log(libJsSecondsFormatterChinese(90));
// "1分钟30秒"

console.log(libJsSecondsFormatterChinese(3661));
// "1小时1分钟1秒"
```

## Math-数学

### LibJsCalculateExpression-表达式字符串

计算只包含加减乘除和括号的表达式字符串。

```ts
import { libJsCalculateExpression } from "lyb-js/Math/LibJsCalculateExpression";

console.log(libJsCalculateExpression("(1+2)-(3*4)/5"));
// 0.6

console.log(libJsCalculateExpression("10/3", 2));
// 3.33
```

### LibJsConvertAngle-角弧度互转

在角度和弧度之间转换。

```ts
import { libJsConvertAngle } from "lyb-js/Math/LibJsConvertAngle";

console.log(libJsConvertAngle(180, "rad")); // 3.141592653589793
console.log(libJsConvertAngle(Math.PI, "deg")); // 180
```

### LibJsCoordsAngle-两点角度

计算两点连线角度，默认返回角度制。

```ts
import { libJsCoordsAngle } from "lyb-js/Math/LibJsCoordsAngle";

console.log(libJsCoordsAngle({ x: 0, y: 0 }, { x: 1, y: 0 }));
console.log(libJsCoordsAngle({ x: 0, y: 0 }, { x: 1, y: 1 }, "rad"));
```

### LibJsCoordsDistance-两点距离

计算两点之间的直线距离。

```ts
import { libJsCoordsDistance } from "lyb-js/Math/LibJsCoordsDistance";

console.log(libJsCoordsDistance({ x: 0, y: 0 }, { x: 3, y: 4 }));
// 5
```

### LibJsDecimal-高精度计算

使用 `decimal.js` 处理高精度加减乘除。

```ts
import { libJsDecimal } from "lyb-js/Math/LibJsDecimal";

console.log(libJsDecimal(0.1, 0.2, "+", 2)); // 0.3
console.log(libJsDecimal(1.5, 0.3, "*", 2)); // 0.45
```

### LibJsLerp-线性插值

文件名是 `LibJsLerp`，导出的方法名也是 `LibJsLerp`。

```ts
import { LibJsLerp } from "lyb-js/Math/LibJsLerp";

console.log(LibJsLerp(0, 100, 0.25)); // 25
console.log(LibJsLerp(10, 20, 0.5)); // 15
```

### LibJsNormalizeInRange-范围归一化

把一个值映射到 `0 ~ 1` 区间。

```ts
import { LibJsNormalizeInRange } from "lyb-js/Math/LibJsNormalizeInRange";

console.log(LibJsNormalizeInRange(0, 100, 50)); // 0.5
console.log(LibJsNormalizeInRange(0, 100, 120)); // 1
```

## Misc-杂项

### LibJsClassObservable-类属性监听器

给普通对象状态加上监听、按键更新、批量订阅等能力。

```ts
import { LibJsClassObservable } from "lyb-js/Misc/LibJsClassObservable";

const store = new LibJsClassObservable({
  count: 0,
  visible: false,
});

const off = store.onValue("count", (value) => {
  console.log("count changed:", value);
});

store.setValue("count", 1);
store.setNumberValue("count", "add", 2);
store.setBooleanValue("visible");
off();
```

### LibJsEmitter-事件发射器

创建一个带类型约束的轻量事件中心。

```ts
import { LibJsEmitter } from "lyb-js/Misc/LibJsEmitter";

type Events = {
  loaded: { page: string };
  resize: [number, number];
};

const emitter = LibJsEmitter<Events>();

emitter.on("loaded", (payload) => {
  console.log(payload.page);
});

emitter.on("resize", (w, h) => {
  console.log(w, h);
});

emitter.emit("loaded", { page: "home" });
emitter.emit("resize", 1920, 1080);
emitter.clear();
```

### LibJsEmitterClose-一次性关闭监听

注册一个事件名对应的回调，触发后会执行并自动清空这一组监听。

```ts
import { LibJsEmitterClose } from "lyb-js/Misc/LibJsEmitterClose";

LibJsEmitterClose.on("dialog-close", () => {
  console.log("弹窗关闭后执行一次");
});

LibJsEmitterClose.emit("dialog-close");
LibJsEmitterClose.emit("dialog-close"); // 第二次不会再次触发上面的回调
```

### LibJsHorizontal-游戏横版状态

根据当前窗口或指定模式返回横竖屏状态和参考宽高。

```ts
import { libJsHorizontal } from "lyb-js/Misc/LibJsHorizontal";

console.log(libJsHorizontal("auto"));
console.log(libJsHorizontal("h")); // 强制横版参考尺寸
console.log(libJsHorizontal("v")); // 强制竖版参考尺寸
```

### LibJsNumberStepper-数字步进器

用于长按按钮连续加减数字。

```ts
import { LibJsNumberStepper } from "lyb-js/Misc/LibJsNumberStepper";

let count = 0;
const stepper = new LibJsNumberStepper((type) => {
  count = type === "add" ? count + 1 : count - 1;
  console.log(count);
});

addButton.addEventListener("pointerdown", () => stepper.down("add"));
subButton.addEventListener("pointerdown", () => stepper.down("sub"));
```

### LibJsPruneEmpty-对象属性去空值

递归移除对象中的空字符串、`null`、`undefined` 和空对象；空数组也会被去掉。

```ts
import { libJsPruneEmpty } from "lyb-js/Misc/LibJsPruneEmpty";

const result = libJsPruneEmpty({
  name: "Tom",
  empty: "",
  profile: {
    age: undefined,
    city: "Shanghai",
  },
  tags: [],
});

console.log(result);
// { name: "Tom", profile: { city: "Shanghai" } }
```

### LibJsPullUpLoad-上拉加载

给滚动容器添加“滚到底部自动触发加载”的能力，并可观察当前加载状态。

```ts
import { LibJsPullUpLoad } from "lyb-js/Misc/LibJsPullUpLoad";

const pull = new LibJsPullUpLoad({
  scrollEl: document.querySelector(".list") as HTMLElement,
  loadStatusEl: document.querySelector(".load-status") as HTMLElement,
  onLoad() {
    console.log("触发加载更多");
  },
});

pull.onValue("statusText", (text) => {
  console.log("状态文案:", text);
});

pull.setValue("loadStatus", "idle");
```

### LibJsRegFormValidate-表单验证

通过正则或自定义函数批量校验表单字段。

```ts
import { libJsRegFormValidate } from "lyb-js/Misc/LibJsRegFormValidate";

const result = libJsRegFormValidate(
  { phone: "13800138000", code: "12" },
  [
    {
      key: "phone",
      name: "手机号",
      verify: /^1\\d{10}$/,
      msg: "手机号格式错误",
    },
    {
      key: "code",
      name: "验证码",
      verify: (value) => String(value).length === 6,
      msg: "验证码长度错误",
    },
  ]
);

console.log(result);
```

### LibJsRetryRequest-请求重连

请求失败后自动按次数重试。

```ts
import { libJsRetryRequest } from "lyb-js/Misc/LibJsRetryRequest";

const data = await libJsRetryRequest({
  promiseFn: (id?: number) => fetch(`/api/user/${id}`).then((res) => res.json()),
  params: 1,
  maxRetries: 3,
  retryDelay: 1000,
});

console.log(data);
```

## Random-随机

### LibJsProbabilityResult-概率触发

按百分比返回是否触发成功。

```ts
import { libJsProbabilityResult } from "lyb-js/Random/LibJsProbabilityResult";

console.log(libJsProbabilityResult(30)); // 30% 概率返回 true
```

### LibJsRandom-随机数

获取指定范围内的随机数，可设置保留小数位。

```ts
import { libJsRandom } from "lyb-js/Random/LibJsRandom";

console.log(libJsRandom(1, 10)); // 1 ~ 10
console.log(libJsRandom(1, 10, 2)); // 例如 6.38
```

### LibJsRandomColor-随机色

生成随机 RGBA 颜色字符串。

```ts
import { libJsRandomColor } from "lyb-js/Random/LibJsRandomColor";

console.log(libJsRandomColor()); // "rgba(...)"
console.log(libJsRandomColor(0.5)); // 半透明
```

### LibJsUniqueRandomNumbers-随机数数组

在指定区间中生成不重复的随机数数组。

```ts
import { libJsUniqueRandomNumbers } from "lyb-js/Random/LibJsUniqueRandomNumbers";

console.log(libJsUniqueRandomNumbers(1, 10, 4));
// 例如 [3, 7, 1, 9]
```

## Time-时间

### LibJsCountdown-倒计时

根据结束时间返回倒计时对象，可指定保留的最小单位。

```ts
import { libJsCountdown } from "lyb-js/Time/LibJsCountdown";

const endTime = Date.now() + 5 * 60 * 1000;
console.log(libJsCountdown(endTime, "minute"));
// { years, months, days, hours, minutes, seconds, ended }
```

### LibJsSameTimeCheck-时间比对

比较传入时间和当前时间是否处于同一个时间单位。

```ts
import { libJsSameTimeCheck } from "lyb-js/Time/LibJsSameTimeCheck";

console.log(libJsSameTimeCheck(Date.now(), "day")); // 0
console.log(libJsSameTimeCheck(Date.now() - 86400000, "day")); // 1
```

返回值说明：

- `0`：同一时间单位
- `1`：比当前更早
- `-1`：比当前更晚

### LibJsTimeAgo-中文时间差

把时间戳转成“多久前 / 多久后”形式的中文文案。

```ts
import { libJsTimeAgo } from "lyb-js/Time/LibJsTimeAgo";

console.log(libJsTimeAgo(Date.now() - 60 * 60 * 1000));
console.log(libJsTimeAgo(Date.now() + 2 * 24 * 60 * 60 * 1000));
```

### LibJsTimeGreeting-时间问候

根据当前时间返回默认问候语，也可以传入自定义文案。

```ts
import { libJsTimeGreeting } from "lyb-js/Time/LibJsTimeGreeting";

console.log(libJsTimeGreeting());

console.log(
  libJsTimeGreeting({
    morning: "早安",
    afternoon: "下午好",
    evening: "晚上好",
  })
);
```

## 补充说明

- 文档里的导入路径以 `npm` 目录实际产物为准。
- 个别工具存在“文件名和导出名不同”的情况，README 已在对应章节中显式说明。
- 如果你想快速查某个工具支持什么参数，除了 README，也可以直接查看导入时的 TypeScript / JSDoc 提示。
