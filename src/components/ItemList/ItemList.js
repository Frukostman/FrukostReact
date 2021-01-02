import Item from "../Item/Item"

import './ItemList.css'


const ItemList = ({items}) => {

    return(    
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-6 g-6 cajonFrutas"> 
                {items.map((item, index) => {
                    return (
                    <Item key={index} card={item}/>
                    )
                })}

            </div>        
    );
};

export default ItemList

