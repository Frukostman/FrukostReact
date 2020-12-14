import Item from "../Item/Item"
import './ItemList.css'

const ItemList = ({items}) => {

    return(
            <div className="cajonFrutas"> 
            
                {items.map((item, index) => {
                    return (

                    <Item key={index} card={item}/>

                    )
                })}

            </div>        
    );
};

export default ItemList

