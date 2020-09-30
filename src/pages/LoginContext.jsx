import React, { useContext } from 'react'
import AuthContext from './../context/auth-context'

const LoginContext = () => {
  // Etape 4 - Utilisation du contexte grace à useContext
  const authContext = useContext(AuthContext)

  if(authContext.authenticated) {
    return (
      <div>
        <h2>Hello user</h2>
        <button onClick={authContext.logout}>Se déconnecter</button>
      </div>
    ) 
  }

  return (
    <div>
      <h2>Login with Context</h2>
      {/* login appelle la fonction login directement dans App.js */}
      <button onClick={authContext.login}>Se connecter</button> 
    </div>
  )
}

export default LoginContext
