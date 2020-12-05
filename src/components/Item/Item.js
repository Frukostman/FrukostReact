//import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import './item.css';



const Item = ({ card }) => {

    return(
        <>          
            <div className="card producto">
                <h4>{card.name}</h4>
                <img src={card.image} alt=""></img>
                <p><b>Origen: </b>{card.origin.name}</p>
                <Link to={`/detalles/${card.id}`}>
                    <button className="btn btn-warning btn-block">COMPRAR! </button>
                </Link>
            </div>
            
        </>

    )
        
    };


export default Item