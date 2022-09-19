const { createContext } = require("react");

const Context = createContext()

export default Context

export const ContextProvider = ({children}) =>{
    const openoffcanvas = () =>{
		
		document.getElementById('offcanvas').classList.toggle('smenu')
	}
    const ContextData = {
        openoffcanvas:openoffcanvas
    }
    return (
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )
}