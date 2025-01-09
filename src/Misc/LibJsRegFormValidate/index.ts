export type ValidationResult = { key: string; msg: string; name: string };

/**
 * @description 通过传递对象数字的方式进行正则或自定义函数进行验证
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
export const libJsRegFormValidate = (
  form: Record<string, any>,
  rules: Array<{
    key: string;
    verify: RegExp | ((value: any) => boolean);
    msg: string;
    name: string;
  }>
) => {
  return rules.reduce((result: ValidationResult[], rule) => {
    const { key, verify, msg, name } = rule;
    const value = form[key];

    if (value === "" || value === undefined || value === null) {
      result.push({ key, msg: "必填项", name });
    } else if (
      typeof verify === "function" ? !verify(value) : !verify.test(value)
    ) {
      result.push({ key, msg, name });
    }

    return result;
  }, []);
};
