// * =================== Section: Set ===================
// value的集合，no key

// * =================== Section: 创建Set ===================
// 利用set对数组去重
{
  const arr1 = [1, 3, 4]
  const arr2 = [1, 2, 3]
  console.log(new Set([...arr1, ...arr2]))
}
function removeDuplicates(arr1, arr2) {}

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'CNY'])
console.log(currenciesUnique)
currenciesUnique.forEach((value, _, set) => {
  console.log(`key:${key}`)
})
// * =================== Section: Set方法 ===================
set.add()
set.delete()
set.has()
set.clear()
set.size
// * =================== Section: 迭代Set ===================
{
  const set = new Set()
  for (const value of set) {
  }
  set.forEach()

  set.keys()
  set.values()
  set.entries()
}
