import {useState, useEffect} from 'react'
import ItemList from '../../components/ItemList/ItemList'


const Home = () => {

    const [loading, setLoading] = useState(true);                   
    const [producto, setProducto] = useState({});

useEffect(() => {

    setTimeout(() => {
        const url = "https://rickandmortyapi.com/api/character"

        fetch(url)
           .then(response => {
               return response.json()
           })
           .then((response) => {
            //console.table(response)
            setProducto(response.results)
            setLoading(false)
           })
    }, 1000);

}, []);

// const valorDeContext = useContext(AppContext);

return (

    <>
    

    {loading ? <h1 className="text-center animate__animated animate__pulse">Loading...</h1> : <ItemList items={producto}/>}
    
    

    </>
    )       
};

export default Home

