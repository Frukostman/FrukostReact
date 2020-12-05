import Item from "../Item/Item"

const ItemList = ({items}) => {

    return(
            <div className="row d-flex justify-content-around"> 
            
                {items.map((item, index) => {
                    return (

                    <Item key={index} card={item}/>

                    )
                })}

            </div>        
    );
};

export default ItemList

