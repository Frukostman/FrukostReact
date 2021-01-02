

import useAppContext from '../../context/useAppContext';
import { Link } from 'react-router-dom';

import './ItemsCart.css';

    
const ItemsCarrito = () => {

const { carrito, sacarDelCarrito, sumarPrecioTotal, vaciarCarrito  } = useAppContext()
    
          return(
                <>                                
                    <div className="container p-0">
                            <div className="bg-white m-0"> 
                                <div className=" bg-white text-center text-muted m-0">
                                    <p className="display-4 pt-2">MI CARRITO</p>
                                </div>
                                    {carrito.map((entry, index) => {
                                        return (
                                            <div key={index} className="productoCart px-5">  
                                                <div className="row d-flex justify-content-between">
                                                    <p><b>{entry.name}</b> x {entry.cantidad} kg.</p> 
                                                    <div className="row">
                                                        <p> Subtotal: <b>{entry.cantidad * entry.price} $</b></p>
                                                        <div className="mb-1 pl-3"><i onClick={() => sacarDelCarrito(index)}className="fas fa-trash"></i></div>                                                                    
                                                    </div>                                                           
                                                </div>
                                            </div>
                                        )})
                                    }
                            <hr/>            
                                <div className="text-center mb-3">                                    
                                    <h3 id="TotalCarrito" className="pr-3"><span className="text-muted">Total:</span><mark>{sumarPrecioTotal(carrito)}$</mark></h3>        
                                    <button className="btn btn-danger botonCart m-2" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                                    <Link to={`/checkout`}>
                                        <button className="btn btn-success botonCart m-2">Comprar</button>
                                    </Link>
                                    <br/>
                                </div>
                            </div> 
                        </div>                                
                </>
               )                                           
            }

export default ItemsCarrito