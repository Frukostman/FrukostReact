import './index.css';
import Icon from '../../components/Icon/Icon';
import useAppContext from '../../context/useAppContext';

export default function Navbar() {

    const { carrito } = useAppContext()

    const handleClick = (e) => {
        //console.log(e.target.outerHTML)
    };

    return(
            <div className="containerFluid">
                <div className="navbar pr-5 pl-5">

                        <Icon iconName={"home"} callback={handleClick}/>

                        <div>
                            <Icon iconName={"tag"} callback={handleClick}/>
                            <p class="cantidadCart">{ carrito.length }</p>
                        </div>

                </div>
            </div>
          
            
    )
}