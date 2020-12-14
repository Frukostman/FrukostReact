import {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'
import { getFirestore } from '../../firebase/index';
// import '../../Productos/ProductosFB.jsx'


const Home = () => {

    const [loading, setLoading] = useState(true);                   
    const [producto, setProducto] = useState({});


    useEffect(() => {
        const db = getFirestore();
        const itemCollection = db.collection("productos");

        itemCollection.get().then((response) => {
         
        const producto = response.docs.map((element) => 
          ({...element.data(),
            id: element.id,
        }));

          setProducto(producto);
          setLoading(false)
        });


      }, []);

return (

    <>
    {/* <div className="container-fluid text-center m-4">
      <div className="btn-group" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-light">Frutas</button>
        <button type="button" className="btn btn-light">Verduras</button>
      </div>
    </div> */}
        
    {loading ? <h1 className="text-center animate__animated animate__pulse">Loading...</h1> : <ItemList items={producto}/>}
    


    </>
    )       
};

export default Home

