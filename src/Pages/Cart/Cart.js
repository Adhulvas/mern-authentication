import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../../GlobalStates/cartSlice';
import './Cart.css'

function Cart() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch();
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <div className='cart-container'>
      <h2 className='mb-5'>Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <>
          {cartItems.map((item) => (
            <div className='cart-item'>
              <img className='item-image' src={item.image}/>
              <div>
                  <h4>{item.title}</h4>
                  <p>Price: ${item.price * item.quantity}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button className='quantity-button' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                  <button className='quantity-button' onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
                  <button className='remove-button' onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
              </div>
            </div>
          ))}
            <div>
             <h3>Total Amout: ${parseFloat(totalAmount.toPrecision(6))}</h3>
            </div>
        </>
      ) : (
        <div className='d-flex flex-column align-items-center'>
        <img className='image-cart' src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="" />
        <p>Your cart is empty!</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
