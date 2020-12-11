import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../../components/ItemDetail/ItemDetail';


export default function ItemDetailContainer() {
    
    const { id } = useParams();
    
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

    useEffect(() => {

        //console.log(id)

        setTimeout(() => {
            const url = `https://rickandmortyapi.com/api/character/${id}`
    
            fetch(url)
               .then(response => {
                   return response.json()
               })
                .then((response) => {
                 response.cantidad = 1
                 response.price = Math.floor(Math.random() * (200 - 10) + 10)
                //  console.log(response)
                 setProducto(response)
                 setLoading(false)
               })
        }, 1000);
    
    }, [id])

    return(

        <>

            {loading ? <h1 className="text-center animate__animated animate__pulse">Loading...</h1> : <ItemDetail info={producto}/>}
            

        </>


    )
}