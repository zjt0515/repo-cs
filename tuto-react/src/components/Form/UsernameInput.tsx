import React, { useState } from 'react'

export default function UsernameInput() {
  const [username, setUsername] = useState("")
  const usernameClass = username.length <= 10 && username.length > 0 ? "input-error" : ""

  return (
    <div>
      <input type='text' value={username} className={usernameClass} onChange={(event) => setUsername(event.target.value)}></input>
    </div>
  )
}
