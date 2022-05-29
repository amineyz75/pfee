


import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'





function ForgotPassword() {
  const history = useNavigate()
  const [email, setEmail] = useState("")

  async function PostData(event) {
    event.preventDefault()

    const response = await fetch('http://localhost:3001/api/reset-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email


      }),
    })

    const data = await response.json()


    if (data.error) {
      alert("error")

    } else {
      history('/login')
    }

  }

  return (
    <div >
      <form  onSubmit={PostData}>
        <h1>Mot de passe oublié</h1>
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
       
        <button type="submit"  >
          Submit
        </button>
      </form>
    </div>
  )
}

export default ForgotPassword