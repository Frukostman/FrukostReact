import './index.css';
import useAppContext from '../../context/useAppContext';
import { NavLink } from 'react-router-dom';
 

export default function Cart() {

    // const funcion = () => {
    //     alert("hola")
    // }

    const { carrito } = useAppContext()
    
   
    
    return(
        <div className="Cart">
            <h1>CARRITO</h1> 

                <> {carrito.length==0 ? 
                
                (<div>
                    <p>No tenes productos en el carrito</p>
                    <NavLink to={`/home`}>  Seguir comprando... </NavLink>
                        
                        
                    </div>)
                
                : (<p>
                     {carrito.map((entry) => (
                     <><p>{entry.name}</p>
                     <p>{entry.price}</p>
                     <p>{entry.cantidad}</p></>
                     ))}
                 </p>)}
                
                </>

                 
        </div>
    )
}
