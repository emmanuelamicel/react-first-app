import { createContext } from "react"

// Etape 1 : création des valeurs par défaut que prendra mon contexte
// Mon contexte peut être un number, un booléen, une string, un objet, un tableau...
const authContext = createContext({
  authenticated: false,
  userToken: "",
  login: () => {},
  logout: () => {},
})

export default authContext