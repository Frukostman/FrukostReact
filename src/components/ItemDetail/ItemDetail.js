import {useState} from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import './ItemDetail.css';

import useAppContext from '../../context/useAppContext';


export default function ItemDetail({info}) {

    const producto = info
    
    const { addProductToCarrito } = useAppContext()

    const [cantidadCart, setcantidadCart] = useState();

    const onAddItem = (value) => {
        setcantidadCart(value)
        console.log(value)
    }

    

    console.log(producto.cantidad)

    return(
        
        <div className="container d-flex justify-content-around informacion">
            <div>
                <h2>Nombre: {info.name}</h2>
                <h3>Precio: {info.price} $</h3>
                <div className="botonera">
                    
                    <ItemCounter initialValue={1} maxValue={5} onAdd={onAddItem}/>
                    <hr/>
                    <button onClick={() => addProductToCarrito(producto, cantidadCart)} className="btn  btn-warning">Comprar: {cantidadCart} </button>
                </div>
                
            </div>
                <img src={info.image} alt=""></img>


        </div>
        
    )
}