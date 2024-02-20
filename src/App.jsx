import React, { useContext } from "react"
import { AuthContext } from "./components/Authprovider/Authprovider"
function App() {
  const {name} = useContext(AuthContext)
  return (
    <React.Fragment>
   <h1 className="text-center text-4xl my-6 capitalize font-bold">{name}</h1>
    </React.Fragment>
  )
}

export default App
