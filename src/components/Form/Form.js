import React, {useState, Fragment} from 'react'

const Form = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        email2: ''
    })

    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        if (datos.nombre === '' || datos.apellido === '') {
            alert("Tenes que ingresar todos tus datos!")
        } else {

            console.log(datos.nombre + datos.apellido + datos.telefono + datos.email + datos.email2)
        }
    }



    return (
            <Fragment>
                <form className="text-center" onSubmit={enviarDatos}>
                   <div className="col mt-1">
                       <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="nombre"></input>
                   </div>
                   <div className="col mt-1">
                       <input type="text" placeholder="Apellido" className="form-control" onChange={handleInputChange} name="apellido"></input>
                   </div>
                   <div className="col mt-1">
                       <input type="number" placeholder="Telefono" className="form-control" onChange={handleInputChange} name="telefono"></input>
                   </div>
                   <p className="informacion text-muted pt- mb-0">Dejanos un mail de contacto</p>
                   <div className="col mt-1">
                       <input type="email" placeholder="Ingresa tu email" className="form-control" onChange={handleInputChange} name="email1"></input>
                   </div>
                   <div className="col mt-1">
                       <input type="email" placeholder="Confirma tu email" className="form-control" onChange={handleInputChange} name="email2"></input>
                   </div>
                   <button type="submit" className="btn btn-success btn-block mt-2">Enviar</button>
               </form>
            </Fragment>)
}

export default Form