import React, { useContext } from 'react';
import {CartContext} from "./Cart";

// destructuring the components of ARRAY so that color , price , image can be shown different for each item
export const Item = ({id ,description , title , img , price, quantity}) => {
 
  const { removeItem , increment , decrement} = useContext(CartContext);
  
  return (
    <> 
    <div className="items-info">

<div className="product-img"> 
<img src={img} alt=""></img>
</div>
<div className="title">
  <h2>{title}</h2>
  <p>{description}</p>
</div>

<div classNmae="add-minus-quantity">
   {/* For this we will be using awsome font  */} 
   <i className="fas fa-minus"
   onClick={()=> decrement(id)} >
    </i>    {/*minus is classname */}
   <input type="text" placeholder={quantity}/>
   <i className="fas fa-plus add" 
    onClick={()=> increment(id)} >
    </i>   {/* add is classname , agar onClick={ increment(id)} aise kerte to loop infinite chlta to arrow function use kiya*/}
</div> 

<div className="price">
    <h3>{price}</h3>
</div>

<div className="remove-item">
   <i class="fas fa-trash-alt remove" 
   onClick ={() => removeItem(id)}></i>
</div>
</div>
    </>
  )
}

export default Item
