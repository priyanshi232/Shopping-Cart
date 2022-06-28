// import './Cart.css';
import Cart from './Components/Cart';

function App() {
  return (
     <>
    
    <div style={{ 
  backgroundImage: `url(${process.env.PUBLIC_URL + '/img.png'})`,
  // backgroundRepeat: 'no-repeat',
  // width:'250px' 
}}>
   <Cart/> 
 </div>
     
     
   

     </>
  );
}

export default App;
