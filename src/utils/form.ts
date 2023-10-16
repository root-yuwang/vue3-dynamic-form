export const getRulesValidate = (data: unknown[]) => {
  let rules = {};

  data.forEach((item: unknown) => {
    if (item.isValidate) {
      if (item.rule && typeof rules === "object") {
        if (Array.isArray(item.rule)) {
          rules[item.prop] = item.rule;
        } else {
          rules[item.prop] = [item.rule];
        }
      } else {
        rules[item.prop] = [
          {
            required: true,
            message: item.placeholder || "请输入",
            trigger: item.trigger || "blur",
          },
        ];
      }
    }
  });
  return rules;
};
