import ItemsCarrito from '../../components/ItemsCart/ItemsCart'
import CarritoVacio from '../EmptyCart/EmptyCart'

import useAppContext from '../../context/useAppContext';

import './Cart.css';


const Cart = () => { 

    const { carrito  } = useAppContext()
    
    return(     
                <> { 
                    carrito.length===0 ? 
                    <CarritoVacio/> 
                    : 
                    <ItemsCarrito/> 
                    } 
                </>
           )
        }

export default Cart