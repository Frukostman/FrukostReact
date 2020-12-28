import { Link } from 'react-router-dom'

const Thanks = () => {
    return (
        <>
            <h1>Muhcas gracias</h1>
            <Link to={`/home`}>
                <p>Volver a la home</p>
            </Link>
        </>
    )
}

export default Thanks