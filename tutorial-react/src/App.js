import ClassComponent from './components/ClassComponent'
import HelloWorld from './components/HelloWorld'

function App() {
  const ele = (
    <>
      {/* 注释 */}
      <div style={{ fontSize: '20px' }}>
        App
        <HelloWorld />
        <ClassComponent />
      </div>
    </>
  )
  return ele
}

export default App
