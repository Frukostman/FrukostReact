import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading'
import { getFirestore } from '../../firebase/index';


export default function ItemDetailContainer() {
    
    const { id } = useParams();

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});
    
    useEffect(() => {

            const db = getFirestore();
            const itemCollection = db.collection("productos");

            const idItem = itemCollection.doc(id)

            idItem.get().then((response, reject) => {

                if(response.size === 0) reject(`<h1>error</h1>`)

                const item = {...response.data(), id: id }                                        
           
                setProducto(item);
                setLoading(false);   
    
            })
            
          }, [id]);

              return(
                      <> 
                      {loading ? <Loading /> : <ItemDetail info={producto}/>}
                      </>
              )
}