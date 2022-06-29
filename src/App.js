import { useState } from "react"
import { auth } from "./utils/firebase"
import Auth from "./Pages/Auth/Auth"

function App() {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  auth.onAuthStateChanged((currentUser) => {
    if (!currentUser) {
      setUser(false)
    } else {
      setUser(currentUser)
    }
    setIsLoading(false)
  })

  if (isLoading) {
    return null
  }

  return <div>{!user ? <Auth /> : <UserLogged />}</div>
}

function UserLogged() {
  const logout = () => {
    auth.signOut()
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <h1>Usuario Logueado</h1>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  )
}
export default App
