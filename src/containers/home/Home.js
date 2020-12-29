import {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'

import ItemList from '../../components/ItemList/ItemList'
import Loading  from "../../components/Loading/Loading";

import TraerProdFB from '../../Productos/ProductosFB'

import './home.css'

const Home = () => {

  const [loading, setLoading] = useState(true);                   
  const [producto, setProducto] = useState({});

  const { cat, sea } = useParams()

    useEffect(() => {

      TraerProdFB(cat, sea).then((result) => {

// el resultado va al state y se saca el loading
          setProducto(result);
          setLoading(false); 
        });
        
      }, [cat, sea]);

    const Filtros = () => {
      return (
        <div className="container col-2 filtros shadow pl-4 mb-2 bg-white rounded text-left">
              <h3>Filtros:</h3>
              <br/>
                <div>
                <h5>Por tipo:</h5>
                <ul>
                  <li>
                    <Link to={`/tipo/Fruta`}>
                      <p className="display-1"> Frutas <i class="fas fa-apple-alt"></i></p>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/tipo/Verdura`}>
                        <p className="display-1">Verduras <i class="fas fa-carrot"></i></p>
                    </Link>
                  </li>
                </ul>
                </div>
                <br/>
                <div>
                  <h5>Por estacion:</h5>
                  <ul>
                    <li>
                      <Link to={`/estacion/Verano`}>
                          <p className="display-1">Verano <i class="fas fa-sun"></i></p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/estacion/Otoño`}>
                          <p className="display-1">Otoño <i class="fab fa-canadian-maple-leaf"></i></p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/estacion/Invierno`}>
                          <p className="display-1">Invierno <i class="fas fa-snowflake"></i></p>
                      </Link>
                    </li>
                    <li>
                      <Link to={`/estacion/Primavera`}>
                          <p className="display-1">Primavera <i class="fas fa-seedling"></i></p>
                      </Link>
                    </li>
                  </ul>
                </div>
            </div>
      )

    }
    
return (

    <>
        <div className="container-fluid text-center m-1">
          <div className="btn-group">
          
            {loading ? <Loading /> : <><Filtros/><ItemList items={producto}/></>}
          </div>
        </div> 
        
    
    </>
    )       
};

export default Home

