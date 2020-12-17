import {useState} from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import { NavLink } from 'react-router-dom';
import './ItemDetail.css';

import useAppContext from '../../context/useAppContext';

export default function ItemDetail({info}) {

    const producto = info

    const { addProductToCarrito } = useAppContext()

    const [cantidadCart, setcantidadCart] = useState(1);

    const onAddItem = (value) => {
        
        producto.cantidad = value

        setcantidadCart(producto.cantidad)
    }   

    return(
        
        <div className="container d-flex justify-content-around informacion">
            <div>
                <h2>{info.name}</h2>
                <h3>Precio: {info.price} $</h3>
                <h3>id: {info.id} $</h3>
                <div className="botonera">
                    
                    <ItemCounter initialValue={1} maxValue={5} onAdd={onAddItem}/>
                    <hr/>
                    <NavLink to={`/home`}>                     
                    <button onClick={() => addProductToCarrito(producto, cantidadCart)} className="btn  btn-warning">Comprar: {cantidadCart} </button>
                    </NavLink> 
                
                </div>

                
            </div>
                <img src={`${process.env.PUBLIC_URL}/${info.image}`} alt={info.name} />
            </div>
        
    )
}