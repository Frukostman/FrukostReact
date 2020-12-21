import {Link} from 'react-router-dom'



import './item.css';

const Item = ({ card }) => {

    return(
        <>       
            <div className="col-12 col-md-4 col-lg-3 col-xl-2 p-0" >
                <div className="card producto shadow mb-2 bg-white rounded">
                    <div>
                        <img src={`${process.env.PUBLIC_URL}/${card.image}`} alt={card.name}></img>
                        <h4 className="card-title">{card.name}</h4>
                        <p><b>Origen: </b>{card.origin}</p>
                        <p><b>Precio: </b>{card.price}$</p>
                    </div>
                    <Link to={`/detalles/${card.id}`}>
                        <button className="btn btn-outline-dark">Comprar! </button>
                    </Link> 
                </div>

            </div>
        </>
    )
        
    };


export default Item