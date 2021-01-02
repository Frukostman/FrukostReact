import Icon from '../../components/Icon/Icon';

import useAppContext from '../../context/useAppContext';

import './index.css';


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
                    <div className="header row">
                        <p>F</p>
                        <p>R</p>
                        <p>U</p>
                        <p>K</p>
                        <p>O</p>
                        <p>S</p>
                        <p>T</p>
                        <p><i className="fas fa-fire"></i></p>
                        </div>
                    <Icon iconName={"shopping-cart"} callback={handleClick}/>
                    <p className="cantidadCart">{ sumaTotal() }</p>
                </div>
            </div>          
    )
}