import React, { createElement, useState } from 'react'

function HelloWorld({ name = '默认名', age = 18 }) {
  // state
  const [count, setCount] = useState(0)

  // JSX代码最终都会使用createElement
  const element = <h1 className="greeting">"Caillo</h1>

  const element1 = createElement('h1', { className: 'greeting' }, 'Caillo')

  function handleClick(str, e) {
    // 阻止默认行为
    e.preventDefault()
    // 访问原生事件对象
    console.log(e.nativeEvents)
    alert('123')
  }

  return (
    <div className="container">
      <h1>函数式组件</h1>
      {/* data */}
      <div className="data">
        <h2>组件状态</h2>
        <span>state: {count}</span>
        <button
          onClick={() => {
            setCount(count + 1)
            setCount(count + 1)
          }}
        >
          异步的setState
        </button>
        <button onClick={() => {}}>count + 2</button>
      </div>

      {element}

      <div>{element1}</div>
      <button onClick={(e) => handleClick('123', e)}>绑定事件</button>
      {/* props */}
      <div className="props">
        <span>props</span>
        <div>姓名:{name}</div>
        <div>
          年龄:
          {age}
        </div>
      </div>
    </div>
  )
}

export default HelloWorld
