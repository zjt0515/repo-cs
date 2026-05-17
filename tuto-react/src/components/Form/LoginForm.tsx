import { useState } from "react"
import './LoginForm.css'
import useSWR from "swr"
import UsernameInput from "./UsernameInput"

function LoginForm() {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const passwordClass =  password.length <= 16 && password.length > 0 ? "input-error": ""

  
  
  const handleSubmit = () => {
    if(username.length > 10 || username.length === 0)
    {
      alert("Invalid Username or password")
      return;
    }
  }

  return (<main>
    <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
    <UsernameInput/>
        <br /> 
        <input
          type="password"
          value={password}
          className={passwordClass}
          onChange={(event) => setPassword(event.target.value)}
        />

        <br />
        <button type="submit">Login</button>
      </form>
    </main>)
}

export default LoginForm