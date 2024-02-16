import { createContext } from "react"; 

const bbdd = {}

export const GlobalContext = createContext(bbdd)

export const Provider = ({ children }) => {
    <GlobalContext.Provider value={ bbdd }>
        { children }
    </GlobalContext.Provider>

}