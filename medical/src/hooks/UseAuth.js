import { useContext } from "react"
import { AuthContext } from "../Components/Context/AuthProvider"

const useAurh = ()=>{
    return useContext(AuthContext)
}

export default useAurh