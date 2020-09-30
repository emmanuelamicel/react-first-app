import React, { Component, createRef } from 'react'
// import Counter from './../components/Counter'
// Pour des formulaires :
// Formik
// React Hook Form

class Login extends Component {
  constructor() {
    super()
    this.usernameRef = createRef()
    this.state = {
      password: "",
    }
  }

  onChangePassword = (event) => {
    this.setState({password: event.target.value})
  }

  render() {
    return (
      <>
        <h2>Login</h2>
        <form>
          <label htmlFor="username">Username : </label>
          <input type="text" id="username" ref={this.usernameRef} onChange={() => console.log(this.usernameRef.current.value)} />
          <label htmlFor="password">Passport : </label>
          <input type="text" id="password" value={this.state.password} onChange={this.onChangePassword} />
          <button>Submit</button>
        </form>
        {/* {this.state.password.length < 2 ? <Counter /> : null} */}
      </>
    )
  }
}

export default Login