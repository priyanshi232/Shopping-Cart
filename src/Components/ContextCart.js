import React, {useContext } from 'react'
import  { Item } from "./Item"; 
import {products } from "./products";
import {CartContext} from "./Cart";


const ContextCart = () => { 
   //  const [item , setItem]= useState(products); 
   // no need of using above , instea we will use context 
   
   const { item , clearCart , totalItem , totalAmount} = useContext(CartContext);  
   // {item } means destructuring the item 

     if(item.length === 0)
     {
         return (
            <>
            <header>
       <div className="continue-shopping">
          <img src ="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping </h3>
       </div>

       <div className="cart-icon">
          <img src="./images/cart.png" alt="cart"/>
          <p>{totalItem}</p>
       </div>
     </header> 

    {/* // section contains cart details after header */}
     <section className="main-cart-section">
       <h1>shopping cart</h1>
       <p className="total-items">you have <span className="total-items-count">{totalItem}</span> items in shopping cart
       </p> 
       </section>
            </>
         )
     }
    
  return (
    <>
    <header>
       <div className="continue-shopping">
          <img src ="./images/arrow.png" alt="arrow" className="arrow-icon" />
          <h3>continue shopping </h3>
       </div>

       <div className="cart-icon">
          <img src="./images/cart.png" alt="cart"/>
       </div>
     </header> 

    {/* // section contains cart details after header */}
     <section className="main-cart-section">
       <h1>shopping cart</h1>
       <p className="total-items">you have <span className="total-items-count">{totalItem}</span> items in shopping cart
       </p>
        
      
      {/* Rectangle that will contain item details  */}
       <div className = "cart-items">
          
          <div className = "cart-items-container">
              {
                 item.map(( currItem ) =>{
                     return  <Item key={currItem.id} { ... currItem}/>
                 })
              }
            

             {/* For printing total bill */} 

            
          </div>
          
       </div>
       <div className="card-total">
           <h3>Card Total : <span>{totalAmount} ₹</span></h3>
           <button>Checkout </button>
           {/* // clear cart button declaration  */}
           <button className="clear-cart" onClick={clearCart}>
            Clear Cart
            </button>
       </div>
     </section>
    </>
  );
}

export default ContextCart;