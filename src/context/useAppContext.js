import  { createContext, useContext, useState}  from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    const addProductToCarrito = (product, cantidad) => {
        const productInCarrito = carrito.find((p) => p.id === product.id)
        if (productInCarrito === undefined) {
          setCarrito([...carrito, { ...product, cantidad }])
        } else {
          productInCarrito.cantidad += cantidad
          setCarrito([...carrito])
        }
      }
     
      const sacarDelCarrito = (index) => {

        carrito.splice(index ,1)     
        setCarrito([...carrito])  
      } 

      const vaciarCarrito = () => {
        setCarrito([])
      }

      const sumarPrecioTotal = (array) => {
        
        let total = 0
        array.forEach(element => {
          total = total + (element.price * element.cantidad)
        });
        return total
      }

    return <AppContext.Provider value={{ carrito, addProductToCarrito, sacarDelCarrito, sumarPrecioTotal, vaciarCarrito }}>
        {children}
    </AppContext.Provider>
}

export default useAppContext