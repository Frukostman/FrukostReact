import  { createContext, useContext, useState}  from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addProductToCarrito = (product, quantity) => {
        const productInCarrito = carrito.find((p) => p.id === product.id)
        if (productInCarrito === undefined) {
          setCarrito([...carrito, { ...product, quantity }])
        } else {
          productInCarrito.quantity += quantity
          setCarrito([...carrito])
        }
      }
     
        // const handleCarrito = (newValue) => {
    //     if (newValue in carrito) {

    //     } else {
    //         setcarrito([...carrito, newValue])
    //         console.log(carrito)
    //     }     
    // }

    return <AppContext.Provider value={{ carrito, addProductToCarrito }}>
        {children}
    </AppContext.Provider>
}

export default useAppContext