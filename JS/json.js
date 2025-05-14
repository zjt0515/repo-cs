// * =================== Section: Json对象 ===================
// json协议，格式，语法

// json对象字面量

const jsonStr = `
{
  "name": "123",
  "age": 12
}`;
const jsonObj = JSON.parse(jsonStr, function (k, v) {
  // reviver函数，返回undefined就删除对应的属性和值
  // 顺序是深度遍历所有子属性
  // 用于过滤数据
  console.log('key:', k, ',this:', this);

  if (k == 'name') {
    return undefined;
  }
  return v;
});
console.log(jsonObj);

JSON.stringify();

// * =================== Section: toJson ===================
