import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../GlobalStates/cartSlice';
import './SingleProduct.css'

function SingleProduct() {
  const {id} = useParams();
  const [product, setProduct] = useState(null);
  const dispatch=useDispatch()
  const handleAddToCart=()=>{
    dispatch(addToCart(product))
  }

  useEffect(() => {
    const fetchProduct = () => {
      axios(`https://fakestoreapi.com/products/${id}`)
        .then((res) => {
          setProduct(res.data);
        })
        .catch((err) => {
          alert('Error fetching product data:', err);
        });
    };
  
    fetchProduct();
  }, [id]);

  return (
    <div className='single-product-container'>
      <div className='row'>
        <div className='col-12 col-md-6 d-flex justify-content-center'>
          <img style={{width:'15rem', height:'auto'}} src={product?.image} alt="" />
        </div>
        <div className='col-12 col-md-6 d-flex flex-column justify-content-center align-items-start'>
          <p className='card-title'>{product?.title}</p>
          <p><strong>Price:</strong>${product?.price}</p>
          <p><strong>Description:</strong>{product?.description}</p>
          <button className='cart' onClick={handleAddToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
