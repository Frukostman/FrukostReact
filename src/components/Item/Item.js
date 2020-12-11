import {Link} from 'react-router-dom'

import './item.css';

const Item = ({ card }) => {

    return(
        <>          
            <div className="card producto" >
                <div>
                <img src={card.image} alt=""></img>
                    <h4 class="card-title">{card.name}</h4>
                    <p><b>Origen: </b>{card.origin.name}</p>
                    <Link to={`/detalles/${card.id}`}>
                        <button className="btn btn-warning btn-block">COMPRAR! </button>
                    </Link> 

                </div>
            </div>
        </>
    )
        
    };


export default Item