import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { getFirestore } from '../../firebase/index';


export default function ItemDetailContainer() {
    
    const { id } = useParams();
    console.log(id)

    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});
    
    useEffect(() => {

            const db = getFirestore();
            const itemCollection = db.collection("productos");
            console.log(itemCollection)

            const idItem = itemCollection.doc(id)
            console.log(idItem)

            idItem.get().then((response, reject) => {

                if(response.size === 0) reject(`<h1>error</h1>`)

                const item = {...response.data(), id: id }                                        
           
                setProducto(item);
                setLoading(false);   
    
            })
            
          }, [id]);

              return(
                      <> 
                      {loading ? <h1 className="text-center animate__animated animate__pulse">Loading...</h1> : <ItemDetail info={producto}/>}
                      </>
              )
}