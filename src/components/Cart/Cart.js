import './index.css';
import useAppContext from '../../context/useAppContext';
import { NavLink } from 'react-router-dom';
import { getFirestore } from '../../firebase/index';
import {useState} from 'react'


export default function Cart() { 

    const { carrito, sacarDelCarrito, sumarPrecioTotal, vaciarCarrito  } = useAppContext()
    const [orderId, setOrderId] = useState()
    
    const db = getFirestore()
    const orders =  db.collection("orders") 
    
    const CarritoVacio = () => {
    
       return(   
           <div className="container">
               <div className="carritoVacio bg-white">
                   <p>Actualmente no tenés productos en el carrito, <br></br>hace click en el icono de abajo para seguir comprando</p>
                   <div className="iconoCarrito" >
                        <NavLink to={`/home`}> <i class="fas fa-cart-plus"></i>  </NavLink>
                   </div>
               </div>
           </div>
       )}
    
    const realizarCompra = () => {

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
                                    <form action="/action_page.php">
                                        <input placeholder="Ingresá tu nombre aqui" type="text" id="fname" name="fname"/>
                                    </form>
                                    <button className="btn btn-danger" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                                    <button className="btn btn-success" onClick={() => realizarCompra()}>Comprar</button>
                                </div>
                                <div className="container">
                                    <div className="m-3">
                                        <div className="bg-white p-4"> 

                                                {carrito.map((entry, index) => {

                                                    return (
                                                        <div key={index} className="productoCart">  
                                                            <div className="">
                                                                <p ><b>{entry.name}</b> x {entry.cantidad} kg.</p>
                                                            </div>
                                                            <div className="informacionCart">
                                                                <p>Precio unitario: {entry.price} $ </p>
                                                                <p> Subtotal: {entry.cantidad * entry.price} $</p>
                                                                <i onClick={() => sacarDelCarrito(index)}class="fas fa-trash"></i>
                                                                {/* <button className="btn btn-danger botonEliminar" onClick={() => sacarDelCarrito(index)}>X</button>   */}
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
                    <div className="container">
                        <div className=" bg-white text-center py-2">
                            <h2>MI CARRITO</h2>
                        </div>
                    </div>
                    <> {carrito.length===0 ? <CarritoVacio/> : <ItemsCarrito/> } </>                                      
               </>
           )
        }
