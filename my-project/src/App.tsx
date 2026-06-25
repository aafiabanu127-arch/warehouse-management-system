import './App.css'
import CartItem from './cartItem'
function Card(){
  
  return (
    <>
    <CartItem image="" 
     name="Electronic -phone" 
     price={2999}
      email="abcd@gamil.com"/>

    <CartItem image="" 
    name="Electronic-Watch" 
    price={3999}
     email="gknm@gamil.com"/>

    <CartItem image=""
    name="Electronic-headphone"
    price={1999}
    email="gknm@gamil.com"/>
  </>
  );
}

export default Card;