import './index.css';
import Icon from '../../components/Icon/Icon';
import useAppContext from '../../context/useAppContext';


export default function Navbar() {

    const { carrito } = useAppContext()

    

    const sumaTotal = () => {
        let total = 0  
        carrito.forEach(element => {
            total = total + element.cantidad
        });
        if(total >0) {

            return total
        }
    };

    const handleClick = (e) => {
        //console.log(e.target.outerHTML)
    };


    return(
            <div className="containerFluid">
                <div className="navbar px-5 pb-3">
                    <Icon iconName={"home"} callback={handleClick}/>
                    <div className="header"><h1>FRU<span>kost</span></h1></div>
                    <Icon iconName={"shopping-cart"} callback={handleClick}/>
                    <p className="cantidadCart">{ sumaTotal() }</p>
                </div>
            </div>         
       
    )
}