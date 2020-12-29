// import { Link, useParams } from 'react-router-dom'

// import TraerProdFB from '../../Productos/ProductosFB'

// const { cat, sea } = useParams()

// useEffect(() => {

//   TraerProdFB(cat, sea).then((result) => {

// // el resultado va al state y se saca el loading
//       setProducto(result);
//       setLoading(false); 
//     });
    
//   }, [cat, sea]);

//     const Filters = () => {
//         return (
//           <div className="container col-2 filtros shadow pl-4 mb-2 bg-white rounded text-left">
//                 <h3>Filtros:</h3>
//                 <br/>
//                   <div>
//                   <h5>Por tipo:</h5>
//                   <ul>
//                     <li>
//                       <Link style={{color: "crimson"}} to={`/tipo/Fruta`}>
//                         <p className="display-1"> Frutas <i class="fas fa-apple-alt"></i></p>
//                       </Link>
//                     </li>
//                     <li>
//                       <Link style={{color: "green"}} to={`/tipo/Verdura`}>
//                           <p className="display-1">Verduras <i class="fas fa-carrot"></i></p>
//                       </Link>
//                     </li>
//                   </ul>
//                   </div>
//                   <br/>
//                   <div>
//                     <h5>Por estacion:</h5>
//                     <ul>
//                       <li>
//                         <Link style={{color: "#F1C40F"}} to={`/estacion/Verano`}>
//                             <p className="display-1">Verano <i class="fas fa-sun"></i></p>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link style={{color: "#61210F"}} to={`/estacion/Otoño`}>
//                             <p className="display-1">Otoño <i class="fab fa-canadian-maple-leaf"></i></p>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link style={{color: "#4BB3FD"}} to={`/estacion/Invierno`}>
//                             <p className="display-1">Invierno <i class="fas fa-snowflake"></i></p>
//                         </Link>
//                       </li>
//                       <li>
//                         <Link style={{color: "#109648"}} to={`/estacion/Primavera`}>
//                             <p className="display-1">Primavera <i class="fas fa-seedling"></i></p>
//                         </Link>
//                       </li>
//                     </ul>
//                   </div>
//               </div>
//         )
//       }

//       export default Filters