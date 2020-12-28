import {useState} from 'react'
import ItemCounter from '../ItemCounter/ItemCounter'
import { Link } from 'react-router-dom';
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
        
        <div className="container mb-5 p-4 bg-white d-flex justify-content-between shadow p-3 mb-5 bg-white rounded informacion">
                    <div className="detalleProducto ml-3">
                        <h2 >{info.name}</h2>
                        <h5 className="text-muted">Precio x kg:</h5> 
                            <del className="text-muted">{Math.floor(info.price * 1.35)} $</del>
                            <h5> <strong><mark>{info.price} $</mark> </strong> </h5>
                        <p><em>Origen:</em> {info.origin}</p>
                        <p><em>Estacionalidad:</em> {info.season}</p>
                        <p><em>Cantidad:</em> {cantidadCart} kg</p>

                        <div className="botonera">

                            <Link to={`/home`}>                     
                            <button onClick={() => addProductToCarrito(producto, cantidadCart)} className="btn btn-outline-dark"> <strong>Agregar al carrito: {cantidadCart} kg </strong></button>
                            </Link> 
                            <ItemCounter initialValue={1} maxValue={10} onAdd={onAddItem}/>

                        </div>
                        <p className="text-muted mt-2">Subtotal: {info.price * cantidadCart} $</p>


                    </div>
                <img src={`${process.env.PUBLIC_URL}/${info.image}`} alt={info.name} />
        </div>
        
    )
}