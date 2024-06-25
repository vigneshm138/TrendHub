import React from 'react'
import './CSS/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div>
      <div className='loginPage'>
        <h2>Login</h2>
        <form>
          <div>
            <label>emai ld</label>
            <input type='email' placeholder='enter your mail id'/>
          </div>
          <div>
            <label>password</label>
            <input type='password' placeholder='enter your password'/>
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
      <div className='loginPage'>
        <h2>sign up</h2>
        <form>
          <div>
            <label>name</label>
            <input type='text' placeholder='enter your name'/>
          </div>
          <div>
            <label>emai ld</label>
            <input type='email' placeholder='enter your mail id'/>
          </div>
          <div>
            <label>password</label>
            <input type='password' placeholder='enter your password'/>
          </div>
          <button type='submit'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default LoginSignup