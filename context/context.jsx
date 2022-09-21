import { useState } from "react";
import {v4} from 'uuid'
const { createContext } = require("react");
import Cookies from 'js-cookie'
const Context = createContext()

export default Context

export const ContextProvider = ({children}) =>{
    const [username,setusername] = useState(null)
    
    
    Cookies.set('username',`GUEST${v4()}`)
    console.log(Cookies.get('username'));
    const openoffcanvas = () =>{
		
		document.getElementById('offcanvas').classList.toggle('smenu')
	}
    const ContextData = {
        openoffcanvas:openoffcanvas,
        username:username,
        setusername:setusername
    }
    return (
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )
}