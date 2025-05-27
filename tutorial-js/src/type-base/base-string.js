// * =================== Section: 创建string ===================
let single = 'single-quoted'
let double = 'double-quoted'
let backticks = `back
ticks`

console.log(backticks)

// * =================== Section: 特殊字符 ===================
console.log(`windows换行符\r\n非win换行符\n
引号\'\"
反斜线\\
制表符\t
不使用了：退格\b换页\f垂直标签\v`)

// * =================== Section: string属性 ===================
console.log(single.length())

// * =================== Section: 访问字符 ===================

let str = 'abc'
console.log(str[0])
// console.log(str.charAt(0))
// ! 字符串不可更改
str[0] = 'z'
console.log(str)

// 遍历string
for (const char of str) {
  console.log(char)
}
// * =================== Section: string方法 ===================
let lowercase = 'lowercase'
console.log(lowercase.toUpperCase())

// 获取substring
{
  let str = 'sub1sub2'
  console.log(str.slice(0, 4))
  console.log(str.substring(0, 4))
}

// * =================== Section: 字符串比较 ===================
console.log('z' > 'a')
console.log('a' > 'Z')
