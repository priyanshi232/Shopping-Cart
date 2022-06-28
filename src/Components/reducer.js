export const reducer =(state , action ) => {
    if(action.type === "REMOVE_ITEM"){
        return {
            ...state,
            item: state.item.filter((curElem)  =>{
                return curElem.id !== action.payload;
            }), 
        };
    }
    // FOR CLEAR ALL CART
    if(action.type === "CLEAR_CART")
    {
        return{
            ...state , 
            item : [] , // passing empty array
        }
    }
    // for increasing quantity
    if(action.type === "INCREMENT")
    {
        let updatedCart = state.item.map((curElem) => { 
            if(curElem.id === action.payload){
                return {...curElem , quantity: curElem.quantity+1 };
            }
             return curElem;
        }) ;
        return {...state, item: updatedCart}
    }
    // for decreasing quantity
    if(action.type === "DECREMENT")
    {
        let updatedCart = state.item.map((curElem) => { 
            if(curElem.id === action.payload){
                return {...curElem , quantity: curElem.quantity - 1 };
            }
             return curElem;
        }) 
        //this filter will delete item automatically if quntity reaches to zero 
        .filter((curElem) => 
            curElem.quantity !== 0
        ) ;
        return {...state, item: updatedCart}
    }
     

    if (action.type === "GET_TOTAL") {
        let { totalItem, totalAmount } = state.item.reduce(
          (accum, curVal) => {
            let { price, quantity } = curVal;
    
            let updatedTotalAmount = price * quantity;
            accum.totalAmount += updatedTotalAmount;
    
            accum.totalItem += quantity;
            return accum;
          },
          {
            totalItem: 0,
            totalAmount: 0,
          }
        );
        return { ...state, totalItem, totalAmount };
      }
    return state;
}; 

// the reduce () method executes a reducer function ( that you provide) on each element of the array , resulting in single output value. 
// the reducer function takes four arguments :
// accumulator 
// current value 
// current index 
// source array 
// 
// arr.reduce(callbackm( accumaulator ,
//    currnetvalue , [, index [, array]]))
//       [, initialValue]       
