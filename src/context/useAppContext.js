import  { createContext, useContext, useState}  from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    //const [precioTotal, setPrecioTotal] = useState(0)

    const addProductToCarrito = (product, quantity) => {
        const productInCarrito = carrito.find((p) => p.id === product.id)
        if (productInCarrito === undefined) {
          setCarrito([...carrito, { ...product, quantity }])
        } else {
          productInCarrito.quantity += quantity
          setCarrito([...carrito])
        }
      }
     
      const removerCarrito = (index) => {
            carrito.splice(carrito.findIndex((p) => p.index === index),1)
            console.log(carrito)
      } 

      const sumarPrecioTotal = (array) => {
        let total = 0
        array.forEach(element => {
          total = total + element.price
        });
        return total
      }

    return <AppContext.Provider value={{ carrito, addProductToCarrito, removerCarrito, sumarPrecioTotal }}>
        {children}
    </AppContext.Provider>
}

export default useAppContext