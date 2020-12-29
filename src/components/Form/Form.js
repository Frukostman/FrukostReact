import './Form.css'

import  {useState} from 'react'
import { Link } from 'react-router-dom'

import swal from 'sweetalert';

import useAppContext from '../../context/useAppContext';
import { getFirestore } from '../../firebase/index';

const Form = () => {

    const { carrito, sumarPrecioTotal, vaciarCarrito } = useAppContext()

    const [orderId, setOrderId] = useState()
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email1: '',
        email2: ''
    })

    //Conectamos con Firebase y vamos a la coleccion de compras realizadas
    const db = getFirestore()
    const orders =  db.collection("orders") 

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const check = () => {
        
        if (datos.nombre === "" || datos.apellido === "" || datos.telefono === "" || datos.email1 === "" || datos.email2 === "") {
            swal("Por favor completá todos los campos solicitados.")
        }
        else if (datos.email1 !== datos.email2) {
            swal("Por favor verificá que las direcciones de mail sean iguales.")
        } 
        else {
            guardarEnFB()
            vaciarCarrito()
        } 
    }

//Funcion que envia la compra a Firebase
    const guardarEnFB = () => {  
     
        //Calcula el valor total
        let PrecioTotal = sumarPrecioTotal(carrito);
    
        //formato de nueva orden
        const newOrder = {

            buyerName: datos.nombre,
            buyerSurname: datos.apellido,
            buyerPhone: datos.telefono,
            buyerMail: datos.email1,
    
            items: carrito,
            date: new Date(),
            totalPrice: PrecioTotal,
        }
    
        //se guarda la compra a firebase
        orders.add(newOrder).then(({ id }) => {
            setOrderId(id)
            swal(`Compra realizada con exito! Su comprobante es el N°:${id}`)
        }).catch(err => {
            console.log(err)
        })
         .finally((e) => {
            console.log(orderId)

         }) 
        

    }

    return (
            <>              
                <form className="formulario text-center">
                   <div className="col mt-1 p-0">
                        <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"/>                     
                   </div>
                   <div className="col mt-1 p-0">
                        <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"/>
                   </div>
                   <div className="col mt-1 p-0">
                        <input type="number" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="telefono"/>
                   </div>
                   <p className="informacion text-muted mb-0">Dejanos un mail de contacto</p>
                   <div id="alerta">
                        <div className="col mt-1 p-0">
                                <input type="mail" placeholder="Ingresa tu email" className="form-control" onChange={handleInputChange} name="email1"/>
                        </div>
                        <div className="col mt-1 p-0">
                                <input type="mail" placeholder="Confirma tu email" className="form-control" onChange={handleInputChange} name="email2"/>
                        </div>
                   </div>
                   <Link to="/thanks/">
                        <button onClick={check} className="btn btn-success btn-block mt-3">Finalizar compra.</button>
                   </Link>
                           
               </form>                
            </>)
}

export default Form


