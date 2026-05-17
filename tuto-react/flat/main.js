function App() {
let [sth, setS th] = useState()

  function handleChange(event) {
    console.log(event.target.value)
  }

  return <>
    <h1>Hello</h1>
    <input onChange={handleChange} type="text">
    </input>
  </>
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)