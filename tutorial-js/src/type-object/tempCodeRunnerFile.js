const arr = [1, 2, 3, 2, 4, 4]
const removeDuplicate1 = (arr) => {
  return Array.from(new Set(arr))
  return [...new Set(arr)]
}
// filter + indexOf
const removeDuplicate2 = (arr) => {
  return arr.filter((v, i, a) => {
    // if (a.indexOf(v) !== i) {
    //   return false
    // }
    // return true
    return a.indexOf(v) === i
  })
}
console.log(removeDuplicate2(arr))