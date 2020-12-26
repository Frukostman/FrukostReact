import './Checkout.css'

import Form from "../../components/Form/Form";

import useAppContext from '../../context/useAppContext';
import { getFirestore } from '../../firebase/index';
import { useState } from 'react';


//Targetea los input
let nombre = document.querySelector("#Nombre");
let apellido = document.querySelector("#Apellido");
let telefono = document.querySelector("#Telefono");
let email = document.querySelector("#email");

const Checkout = () => {
   
    const { carrito, sumarPrecioTotal } = useAppContext()
    
    const [orderId, setOrderId] = useState()
        
    //Conectamos con Firebase y vamos a la coleccion de compras realizadas
    const db = getFirestore()
    const orders =  db.collection("orders") 

    //Funcion que envia la compra a Firebase
    const CompraFirebase = () => {   

    //Calcula el valor total
    let PrecioTotal = sumarPrecioTotal(carrito);

    //formato de nueva orden
    const newOrder = {
        buyerName: nombre,
        buyerSurname: apellido,
        buyerPhone: telefono,
        buyerMail: email,

        items: carrito,
        date: new Date(),
        total: PrecioTotal,
    }

    //se guarda la compra a firebase
    orders.add(newOrder).then(({ id }) => {
        setOrderId(id)
    }).catch(err => {
        console.log(err)
    }).finally(() => {
        alert(`Compra realizada con exito, su comprobante es el ${orderId}`)
        console.log(orderId)
    }) 

    console.log()

 }
 
 return (
        <>  
            <div className="container checkout text-center">
                <h1 className=" text-muted display-4 pt-2">CHECKOUT</h1>
                <p className="informacion text-muted pt-2 mb-0">Total de tu compra: </p>
                <p className=" display-4"> {sumarPrecioTotal(carrito)} <span className="text-muted">$</span></p>
                <hr/>
                <p className="informacion text-muted pt- mb-0">Igresa tus datos para finalizar la compra</p>
                <Form/>   
            </div>
        </>
    )
}

export default Checkout