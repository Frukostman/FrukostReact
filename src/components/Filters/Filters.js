import { Link } from 'react-router-dom'

import './Filters.css'


const Filtros = () => {
    return (
      <div className="container col-2 filtros shadow pl-4 mb-2 bg-white rounded text-left">
            <h3>Filtros:</h3>
            <br/>
              <div>
              <h5>Por tipo:</h5>
              <ul>
                <li>
                  <Link to={`/tipo/Fruta`} style={{ textDecoration: 'none' }}>
                    <p className="display-1"> Frutas <i className="fas fa-apple-alt"></i></p>
                  </Link>
                </li>
                <li>
                  <Link to={`/tipo/Verdura`} style={{ textDecoration: 'none' }}>
                      <p className="display-1">Verduras <i className="fas fa-carrot"></i></p>
                  </Link>
                </li>
              </ul>
              </div>
              <br/>
              <div>
                <h5>Por estacion:</h5>
                <ul>
                  <li>
                    <Link to={`/estacion/Verano`} style={{ textDecoration: 'none' }}>
                        <p className="display-1">Verano <i className="fas fa-sun"></i></p>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/estacion/Otoño`} style={{ textDecoration: 'none' }}>
                        <p className="display-1">Otoño <i className="fab fa-canadian-maple-leaf"></i></p>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/estacion/Invierno`} style={{ textDecoration: 'none' }}>
                        <p className="display-1">Invierno <i className="fas fa-snowflake"></i></p>
                    </Link>
                  </li>
                  <li>
                    <Link to={`/estacion/Primavera`} style={{ textDecoration: 'none' }}>
                        <p className="display-1">Primavera <i className="fas fa-seedling"></i></p>
                    </Link>
                  </li>
                  <br/>
                  <Link to={`/home`} style={{ textDecoration: 'none' }}>
                        <p className="display-1">Ver todos <i className="fas fa-globe-americas"></i></p>
                    </Link>
                </ul>
              </div>
          </div>
    )

  }

  export default Filtros