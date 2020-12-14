import './index.css';
import useAppContext from '../../context/useAppContext';
import { NavLink } from 'react-router-dom';


export default function Cart() { 
    
    const { carrito, sacarDelCarrito, sumarPrecioTotal, vaciarCarrito  } = useAppContext()
    
    const CarritoVacio = () => {
    
       return(   
           <div className="carritoVacio container">
                   <p>No tenes productos en el carrito</p>
                   <NavLink to={`/home`}>  Seguir comprando... </NavLink>
           </div>
       )}
    
    const ItemsCarrito = () => {
    
       return(
               <div className="itemComprado container d-flex card col-3"> 
    
                       {carrito.map((entry, index) => {
                        return (
                               <>
                                   <p index={index}>Item: <b>{entry.name}</b></p>
                                   <p>Precio unitario: {entry.price} $</p>
                                   <p>{entry.cantidad}</p>
                                   <p>Subtotal: {entry.cantidad * entry.price} $</p>
                                   <button onClick={() => sacarDelCarrito(index)}>X</button>  
                               </>
                           )})
                           }
               </div>        
       );

    };

    return(
               <>
                    <h1 className="text-center">CARRITO</h1>
                    <h2 className="text-center">TOTAL:{sumarPrecioTotal(carrito)} $</h2> 
                    <button className="text-center" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    <> {carrito.length===0 ? <CarritoVacio/> : <ItemsCarrito/> } </>                                      
               </>
           )
           }
