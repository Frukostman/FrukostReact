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
                <>  
                    <div className="text-center mb-3">
                        <h3>Total:{sumarPrecioTotal(carrito)} $</h3> 
                        <button className="btn btn-danger" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                        <button className="btn btn-success" onClick={() => alert("todavia no lo tengo")}>Comprar</button>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 shadow-sm"> 
                    
                                    {carrito.map((entry, index) => {
                                        return (
                                            <>  
                                                <div className="card-header">
                                                    <p index={index}>Item: <b>{entry.name}</b></p>
                                                </div>
                                                <div className="card-body">
                                                    <p>Precio unitario: {entry.price} $</p>
                                                    <p>{entry.cantidad}</p>
                                                    <p>Subtotal: {entry.cantidad * entry.price} $</p>
                                                    <button className="btn btn-danger" onClick={() => sacarDelCarrito(index)}>X</button>  
                                                </div>
                                            </>
                                        )})
                                        }
                            </div>        
                        </div>
                    </div>
                </>
       );

    };

    return(
               <>
                    <div className="text-center">
                        <h2>MI CARRITO</h2>
                        
                    </div>
                    <> {carrito.length===0 ? <CarritoVacio/> : <ItemsCarrito/> } </>                                      
               </>
           )
           }
