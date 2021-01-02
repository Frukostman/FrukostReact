import { Link } from 'react-router-dom'

import './Thanks.css'


const Thanks = ({valueId}) => {

    return (
        <>
            <div className="container p-0">
                <div className="bg-white m-0">
                    <div className=" bg-white text-center text-muted m-0">
                        <div className="thanks text-center">
                                <h1 className=" text-muted display-4 p-2">¡Compra realizada con exito!</h1>
                                <p className="letra pb-3">Comprobante de compra N°:</p>
                                <p className="letra id pb-3">{valueId}</p>
                                <hr/>
                                <br className="m-3"/>
                                <p className="letra ">Hacé click</p>
                                <div className="linkHome">
                                    <Link to={`/home`}>
                                        <p className="animate__animated animate__pulse pt-2">AQUÍ</p>
                                    </Link>
                                </div>
                                <p className="letra">si querés seguir comprando.</p>
                                <br className="m-3"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Thanks