import React, { useState } from "react";
import './index.css'



const ItemCounter = ({initialValue, maxValue, onAdd}) => {

    const [counter, setCounter] = useState(initialValue);

    const incrementar = () => {
        if (counter >= initialValue && counter < maxValue) {
            setCounter(counter + 1)
            onAdd(counter + 1)
        }
    }
    const restar = () => {
        if (counter > initialValue) {
            setCounter(counter - 1)
            onAdd(counter - 1)
        }
 
    }
    

    return (
        
        
            <div className="">
                <div className="col botonesContador">
                    <i style={{color : "green"}} onClick={incrementar} class="fas fa-plus-square"></i>
                    <i style={{color : "red"}} onClick={restar} class="fas fa-minus-square"></i>
                </div>
            </div>            
        
    );
}

export default ItemCounter