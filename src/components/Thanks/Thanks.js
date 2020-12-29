import { Link } from 'react-router-dom'

import './Thanks.css'

const Thanks = () => {
    return (
        <>
            <div className="container p-0">
                <div className="bg-white m-0">
                    <div className=" bg-white text-center text-muted m-0">
                        <div className="thanks text-center">
                                <h1 className=" text-muted display-4 pt-2">¡Compra realizada con exito!</h1>
                                <br className="m-3"/>
                                <p className="letra ">Hace click</p>
                                <div className=" linkHome">
                                    <Link to={`/home`}>
                                        <p className="animate__animated animate__pulse">AQUI</p>
                                    </Link>
                                </div>
                                <p className="letra">para seguir comprando.</p>
                                <br className="m-3"/>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Thanks