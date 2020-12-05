
import { NavLink } from 'react-router-dom'

export default function Icon({iconName, callback}) {

    return (
        <div>
            <NavLink to={`/${iconName}`} onClick={callback} activeClassName="currentCategory">  <i class={`fas fa-${iconName}`}></i> </NavLink>
           
        </div>
    )    
}









