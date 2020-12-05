import React, { useState } from "react";



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
        
        <div style={{color: "midnightBlue", textAlign: "center"}}>
            <p>Cantidad</p>
            <p>{counter}</p>
            <div>
                <button style={{width: "40px"}} class="btn btn-danger" onClick={restar}>-</button>
                <button style={{width: "40px"}} class="btn btn-success" onClick={incrementar}>+</button>
            </div>
                

        </div>

        
    );
}

export default ItemCounter