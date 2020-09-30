import React, { useState, useReducer } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case "updateUsername":
      return {
        ...state,
        username: action.payload,
        usernameError: action.payload.length < 5 ? "Le username doit contenir au moins 5 caractères" : ""
      }

    case "updatePassword":
      return {
        ...state,
        password: action.payload,
        passwordError: action.payload.length < 5 ? "Le password doit contenir au moins 5 caractères" : ""
      }

    case "fetching":
      return {
        ...state,
        loading: true,
      }

    case "wrongCredentials":
      return {
        ...state,
        loading: false,
        username: "",
        password: "",
        userToken: "",
        loginError: "Mauvais username et/ou password."
      }

    case "successLogin":
      return {
        ...state,
        loading: false,
        username: "",
        password: "",
        loginError: "",
        userToken: action.payload,
      }

    default:
      return state
  }
}

const LoginReducer = () => {
  const initialState = {
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
    loading: false,
    loginError: "",
    userToken: "",
  }

  // Dispatch met à jour le state via "action"
  const [state, dispatch] = useReducer(reducer, initialState)

  // Equivalent à mettre :
  // const [username, setusername] = setState("")
  // const [usenameError, setusernameError] = useState("")
  // const [password, setpassword] = useState("")
  // const [passwordError, setpasswordError] = useState("")
  // const [loading, setloading] = useState(false)

  const onSubmitHandler = (e) => {
    e.preventDefault() // Empèche le comportement par défault, càd un rafraichissement
    dispatch({ type: "fetching" })
    setTimeout(() => {
      if (state.username === "admin" && state.password === "admin") {
        // Traitement de mon cas de succès
        const token = "myApiToken"
        dispatch({
          type: "successLogin",
          payload: token
        })
      } else {
        // Traitement de mon cas d'erreur
        dispatch({
          type: "wrongCredentials"
        })
        // Traiment de mon succès - Utilisateur loggé
      }
    }, 1000)
  }

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          value={state.username}
          onChange={(event) => {
            console.log("Username : " + event.target.value)
            dispatch({
              type: "updateUsername",
              payload: event.target.value
            })
          }}
        />
        {state.usernameError && <sup>{state.usernameError}</sup>}

        <label htmlFor="password">Password : </label>
        <input
          type="text"
          id="password"
          value={state.password}
          onChange={(event) => {
            console.log("Password : " + event.target.value)
            dispatch({
              type: "updatePassword",
              payload: event.target.value
            })
          }}
        />
        {state.password && <sup>{state.passwordError}</sup>}

        <button disabled={state.loading}>Submit</button>
      </form>
      {state.loginError && <sup>{state.loginError}</sup>}
      {state.userToken && <sup>Login effectué avec succès</sup>}
    </>
  )
}

export default LoginReducer