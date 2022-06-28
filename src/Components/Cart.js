// called arrow function by rafc 
import React, { createContext , useEffect, useReducer ,useState  } from "react"
import './Cart.css';
//import  { Item } from "./Item"; 
import { products } from "./products"; 
import ContextCart from "./ContextCart";
import {reducer} from "./reducer";
// import { Scrollbars } from 'react-custom-scrollbars';

// creating context 
export const CartContext = createContext();

const initialState={
    item : products, 
    totalAmount: 0 , 
    totalItem : 0, 
};


export const Cart = () => { 

   // const[ item , setItem] = useState(products);
   // no need of using this becuase we have used contexta api globally
    const [state, dispatch]= useReducer(reducer , initialState )
   // dispatch is used to trigger events   

   // function to delete an item from cart & id is parameter
   const removeItem = (id) =>{
        return dispatch({
          type: "REMOVE_ITEM",
          payload : id , 
        });
   };

   // clear the cart FUNCTION
   const clearCart = () => {
     return dispatch ({
       type: "CLEAR_CART",
     });
   }; 

   // making increment function  
   const increment = (id) =>{
        return dispatch({
          type: "INCREMENT", 
          payload: id, 
        });
   }
   const decrement = (id) =>{
    return dispatch({
      type: "DECREMENT", 
      payload: id, 
    });
  }
  //we will use the useEffect to update the data  
  useEffect(()=> {
      dispatch( { type: "GET_TOTAL" });
      console.log("Awsome");
  } , [state.item]);  // this means dependency on item array , if any changes happen in items array then this will show its effect
   
  
  

  return (
     <>
     {/* // using context api to fetch data globally */}
     <CartContext.Provider value={{... state , removeItem , clearCart , increment , decrement}}> 
     <ContextCart /> 
     </CartContext.Provider> 
     </>
  );
}

export default Cart;
