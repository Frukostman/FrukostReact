import './Checkout.css'

import Form from "../../components/Form/Form";

import useAppContext from '../../context/useAppContext';



const Checkout = () => {
 
const { carrito, sumarPrecioTotal } = useAppContext()
    
 return (
        <>   
            <div className="container checkout text-center">
                    <h1 className=" text-muted display-4 pt-2">CHECKOUT</h1>
                    <p className="informacion text-muted pt-2 mb-0">Total de tu compra: </p>
                    <p className=" display-4"> {sumarPrecioTotal(carrito)} <span className="text-muted">$</span></p>
                    <hr/>
                    <p className="informacion text-muted mb-3">Ingresá tus datos para finalizar la compra</p>
                    <Form/>   
            </div>
        </>
    )
}

export default Checkout