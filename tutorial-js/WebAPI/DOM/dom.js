// * =================== Section: 新建节点 ===================
const p1 = document.createElement('p')
p1.textContent = 'p1'

const newList = document.createElement('ul')

// * =================== Section: 插入节点 ===================
app.appendChild(p1)

// * =================== Section: 移动节点 ===================

// * =================== Section: 辅助方法 ===================
/**
 * 获取el的所有原型链对应的构造函数name
 * @param {*} el
 * @returns
 */
function getParents(el) {
  if (typeof el !== 'object' || el === null) {
    throw new Error('el应该是一个对象')
  }
  var _el = el

  var result = []

  while (_el.__proto__ !== null) {
    result.push(_el.__proto__.constructor.name)
    _el = _el.__proto__
  }

  return result
}
