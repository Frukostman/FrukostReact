import { Link } from 'react-router-dom'

import './Error.css'


const Error = () => {
    return (
        <>  
            <div className="container bg-white my-5">
                <div className="text-center">
                    <h1 className=" text-muted display-4 pt-2">ERROR</h1>
                    <i className="iconoError fas fa-exclamation-triangle"></i>
                        <div className=" linkHome">
                            <Link to={`/home`}>
                                <p className="animate__animated animate__pulse">Volver a la home</p>
                            </Link>
                        </div>
                        <br className="m-3"/>
                </div>
            </div>
        </>
    )
}

export default Error