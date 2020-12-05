import './index.css';
import useAppContext from '../../context/useAppContext';
 

export default function Cart() {
    
    const { carrito } = useAppContext()
    
    return(
        <div className="Cart">
            <h1>CARRITO</h1> 

                 <p>
                     {carrito.map((entry) => (
                     <p>{entry.name}{entry.price}</p>
                     
                     ))}
                 </p>
        </div>
    )
}
