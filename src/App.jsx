
import CartContextProvider from './Store/Shopping-cart-context.jsx';
import Header from './components/Header.jsx';
import Shop from './components/Shop.jsx';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import Product from './components/Product.jsx'
import { useReducer } from 'react';

 const initialState={count:0};

 function reducer(state,action){
  switch(action.type){
    case "increment":
      return{count:state.count+1};
    case "decrement":
      return{count:state.count-1};
    case "reset":
      return{count:state.count=0};
    default:
      throw new Error('Unknown action type');
    
  }

 }

 

function App(){
  const[state,dispatch]=useReducer(reducer,initialState);


  return (
    <CartContextProvider>
      <Header/>
      <Shop>
      {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
      
    </CartContextProvider>
  );
}

export default App;
