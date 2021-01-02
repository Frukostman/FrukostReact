import { NavLink } from 'react-router-dom'

import './Icon.css'


const Icon = ({iconName, callback}) => {

    return (
        <div >
            <NavLink className="icono" to={`/${iconName}`} onClick={callback} activeClassName="currentCategory">  <i className={`fas fa-${iconName}`}></i> </NavLink>
           
        </div>
    )    
}

export default Icon
