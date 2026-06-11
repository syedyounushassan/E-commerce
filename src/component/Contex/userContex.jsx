import { Children, createContext , useState } from "react";
import { data } from "react-router";


const UserContex = createContext()


const AuthProvider = ({Children}) =>{

const [user , setUser] = useState (null)

const login = (data) =>{
    setUser(data)

}

const logout = ()=>{

    setUser(null)
}

return <UserContex.Provider value={{user, login,logout}}>{Children}</UserContex.Provider>


}

export default  UserContex   


