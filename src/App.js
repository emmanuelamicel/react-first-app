import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter'
// import ConditionnalRendering from './components/ConditionnalRendering'
import Login from './pages/Login'
import LoginReducer from './pages/LoginReducer'
import ChangeBackground from './pages/ChangeBackground'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import AuthContext from './context/auth-context'

const App = () => {
  // Etape 2 Création du context
  const [authenticated, setAuthenticated] = useState(false)
  const [userToken, setUserToken] = useState("")
  const login = () => {
    setAuthenticated(true)
    setUserToken("myToken")
  }
  const logout = () => {
    setAuthenticated(false)
    setUserToken("")
  }

  // const contextValue = { authenticated, userToken, login, logout }

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/usestate">useState</Link>
          </li>
          <li>
            <Link to="/usereducer">useReducer</Link>
          </li>
        </ul>
        {/* Etape 3 - Je rend ce contexte disponible pour les enfants de authContext */}
        <AuthContext.Provider value={{
          authenticated, // Version raccourcie de "authenticated: authenticated"
          userToken,
          login,
          logout
        }}>
          <Switch>
            {/* Si on ne met pas "exact", il va matcher d'abord Home Page */}
            <Route path="/login" component={Login} />
            {/* Equivalent à <Route path="/login" /><Login /></Route>, celle-ci est préférable si on a des propriétés à passer */}
            <Route path="/counter" component={Counter} />
            <Route path="/usereducer" component={LoginReducer} />
            <Route path="/usestate" component={ChangeBackground} />
            <Route path="/" exact>Home Page</Route>
            <Route path="/">404</Route>
          </Switch>
        </AuthContext.Provider>
      </nav>
    </Router>
  )

  // return (<ChangeBackground />)
  // return (<Login />)
  // return (
  //   <div style={{ height: "100vh", backgroundColor: this.state.backgroundColor, color: "#fff" }}>
  //     <Counter />
  //     <ConditionnalRendering />
  //     {/* Settings - Permet de modifier le theme du site (clair/sombre) */}
  //     <Settings changeTheme={this.onSwitchTheme} />
  //   </div>
  // );
}


// const Settings = (props) => {
//   return (<button onClick={props.changeTheme}>Change theme</button>)
// }

export default App;
