import './index.css';
import useAppContext from '../../context/useAppContext';
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../../firebase/index';
// import * as firebase from 'firebase/app'
import {useState} from 'react'


export default function Cart() { 

    const [orderId, setOrderId] = useState()
    
    const { carrito, sacarDelCarrito, sumarPrecioTotal, vaciarCarrito  } = useAppContext()
    
    const CarritoVacio = () => {
    
       return(   
           <div className="carritoVacio container">
                   <p>No tenes productos en el carrito</p>
                   <NavLink to={`/home`}>  Seguir comprando... </NavLink>
           </div>
       )}
    
    const db = getFirestore()
    
    const orders =  db.collection("orders")
   
    
    const Compra = () => {

        let nombre = document.querySelector("#fname").value;
        let PrecioTotal = sumarPrecioTotal(carrito);

            const newOrder = {
                buyer: nombre,
                items: carrito,
                // date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: PrecioTotal,
             }
    
             console.log(nombre)
             orders.add(newOrder).then(({ id }) => {
                 setOrderId(id)
             }).catch(err => {
                 console.log(err)
             }).finally(() => {
                 alert("Compra realizada con exito")
                 console.log(orderId)
             })

     }
    
    const ItemsCarrito = () => {
    
  return(
                <>  
                    <div className="text-center mb-3">
                        <h3 id="TotalCarrito">Total:{sumarPrecioTotal(carrito)} $</h3> 
                        <button className="btn btn-danger" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                        <button className="btn btn-success" onClick={() => Compra()}>Comprar</button>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 shadow-sm"> 
                    
                                    {carrito.map((entry, index) => {
                                        
                                        return (
                                            <div key={index} className="">  
                                                <div className="card-header">
                                                    <p >Item: <b>{entry.name}</b></p>
                                                </div>
                                                <div className="card-body">
                                                    <p>Precio unitario: {entry.price} $</p>
                                                    <p>{entry.cantidad}</p>
                                                    <p>Subtotal: {entry.cantidad * entry.price} $</p>
                                                    <button className="btn btn-danger" onClick={() => sacarDelCarrito(index)}>X</button>  
                                                </div>
                                            </div>
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
                        <form action="/action_page.php">
                            <label>First name:</label>
                            <input type="text" id="fname" name="fname"/>
                        </form>                   
                    </div>
                    <> {carrito.length===0 ? <CarritoVacio/> : <ItemsCarrito/> } </>                                      
               </>
           )
           }
