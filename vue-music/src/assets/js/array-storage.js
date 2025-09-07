import storage from "good-storage";

/**
 *
 * @param {*} arr
 * @param {*} val
 * @param {*} compare 将val插入arr时，通过comp函数判断重复的条件
 * @param {*} maxLen
 * @returns
 */
function insertArray(arr, val, compare, maxLen) {
  const index = arr.findIndex(compare)
  if (index > -1) return
  arr.unshift(val)
  // 限制最大长度
  if (maxLen && arr.length > maxLen) {
    arr.pop()
  }
}

function deleteFromArray(arr, compare) {
  const index = arr.findIndex(compare);
  if (index > -1) {
    arr.splice(index, 1)
  }
  return arr
}

/**
 * 本地缓存 数据添加
 * @param {*} item
 * @param {*} key
 * @param {*} compare
 * @param {*} maxLen
 * @returns
 */
export function save(item, key, compare, maxLen) {
  const items = storage.get(key, [])

  insertArray(items, item, compare)

  storage.set(key, items)
  return items
}

/**
 * 本地缓存 删除数据
 * @param {*} key
 * @param {*} compare
 * @returns
 */
export function remove(key, compare) {
  const items = storage.get(key, [])

  deleteFromArray(items, compare)

  storage.set(key, items)
  return items
}

export function load(key) {
  return storage.get(key)
}
