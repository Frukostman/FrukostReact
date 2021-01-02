import {NavLink} from 'react-router-dom'

import './EmptyCart.css'


const CarritoVacio = () => {
    
    return(   
        <div className="container mb-3">
            <div className="carritoVacio bg-white">
            <p className="informacion text-muted mt-3 mb-0">Actualmente no tenés productos en el carrito, <br/>hace click en el icono de abajo para seguir comprando</p>
                <div className="flechita  animate__animated animate__bounce mt-4">
                    <i className="fas fa-arrow-down"></i>
                </div>
                <div className="iconoCarrito mr-4 mb-3" >
                     <NavLink to={`/home`}> <i className="fas fa-cart-plus"></i> </NavLink>
                </div>
            </div>
        </div>
    )}

    export default CarritoVacio