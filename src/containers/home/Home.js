import ItemList from '../../components/ItemList/ItemList';
import Loading from "../../components/Loading/Loading";
import Filters from '../../components/Filters/Filters'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

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

  return (

    <>
      <div className="container-fluid text-center m-1">
        <div className="btn-group">

          {loading ?
            <Loading />
            :
            <>
              <Filters />
              <ItemList items={producto} /></>
          }
        </div>
      </div>
    </>
  )
};

export default Home

