//import { Card } from 'react-bootstrap';
import {Link} from 'react-router-dom'

import './item.css';

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div >
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}



const Item = ({ card }) => {

    return(
        <>          
            <div className="card producto" style="width: 18rem;">
                <img src={card.image} alt=""></img>
                <div class="card-body">
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