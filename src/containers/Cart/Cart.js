import './index.css';
import useAppContext from '../../context/useAppContext';
import { NavLink } from 'react-router-dom';
 

export default function Cart() {

     function removerCarrito(index) {
         carrito[index].cantidad = 0;
         if (carrito[index].cantidad <= 0) {
           carrito.splice(index, 1);
         }
         //localStorage.carrito = JSON.stringify(carrito);
         //loadCarrito();
       }  
    
    //<button style="float:right" onclick="removerCarrito(${carrito.indexOf(producto)})">x</button>

    const ItemCarrito = () => {

        return(
                <div className="row d-flex justify-content-around"> 
                    <p>hola</p>                    
                </div>        
        );
    };

    const { carrito } = useAppContext()
    
   console.log(carrito)
    
    return(
        <div className="Cart container">
            <h1 class="">CARRITO</h1> 

                <> 
                
                {carrito.length==0 ? 
                
                (<div>
                    <p>No tenes productos en el carrito</p>
                    <NavLink to={`/home`}>  Seguir comprando... </NavLink>
                    </div>)
                
                : (<>             
                    {carrito.map((entry) => {
                         return (
                            <>
                                <ItemCarrito/>
                               <p>Item: <b>{entry.name}</b></p>
                               <p>Precio unitario: {entry.price} $</p>
                               <p>{entry.cantidad}</p>
                               <p>Subtotal: {entry.cantidad * entry.price} $</p>
                               <button onClick={removerCarrito()}>X</button>
                            </>
                            )})}
                 </>)}
                </>

                 
        </div>
    )
}
