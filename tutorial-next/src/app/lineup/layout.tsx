import { useState } from 'react'

export default function LineupLayout({ children }: { children: React.ReactNode }) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1>Lineup 布局组件</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <h1>数量： {count}</h1>
      <hr />
      {children}
    </div>
  )
}
