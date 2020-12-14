import {Link} from 'react-router-dom'


import './item.css';

const Item = ({ card }) => {

    return(
        <>          
            <div className="container" >
                <div className="card producto">
                    <div>
                        <img src={card.image} alt={card.name}></img>
                        <h4 className="card-title">{card.name}</h4>
                        <p><b>Origen: </b>{card.origin}</p>
                    </div>
                    <Link to={`/detalles/${card.id}`}>
                        <button className="btn btn-warning btn-block mb-3">COMPRAR! </button>
                    </Link> 
                </div>

            </div>
        </>
    )
        
    };


export default Item