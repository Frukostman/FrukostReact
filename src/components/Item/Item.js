import {Link} from 'react-router-dom'

import './item.css';


const Item = ({ card }) => {

    return(
        <>       
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 p-0" >
                <div className="card producto shadow mb-3 bg-white rounded">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/${card.image}`} alt={card.name}></img>
                        <h4 className="card-title">{card.name}</h4>
                        <p>Origen: <b>{card.origin}</b></p>
                        <p>Precio x kg: <b>{card.price}$</b></p>
                    </div>
                    <Link to={`/detalles/${card.id}`} style={{ textDecoration: 'none' }}>
                        <button className="btn btn-outline-success btn-block">Comprar! </button>
                    </Link> 
                </div>
            </div>
        </>
    )  
};

export default Item