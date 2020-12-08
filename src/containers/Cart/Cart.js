import './index.css';
import useAppContext from '../../context/useAppContext';
import { Link } from 'react-router-dom';
 

export default function Cart() {

    const funcion = () => {
        console.log(carrito)
    }

    const { carrito } = useAppContext()
    
   
    
    return(
        <div className="Cart">
            <h1>CARRITO</h1> 

                <> {carrito.length==0 ? 
                
                (<button><Link to={`/home`} onClick={() => funcion}/> volver a la home </button>) 
                
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
