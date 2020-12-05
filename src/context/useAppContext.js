import  { createContext, useContext, useState}  from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({children}) => {

    const [carrito, setcarrito] = useState([])

    

    const handleCarrito = (newValue) => {
        if (newValue in carrito) {

        } else {
            setcarrito([...carrito, newValue])
            console.log(carrito)
        }     
    }

    return <AppContext.Provider value={{ carrito, handleCarrito, total }}>
        {children}
    </AppContext.Provider>
}

export default useAppContext