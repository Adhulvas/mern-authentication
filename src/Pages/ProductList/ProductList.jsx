import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { addToCart } from '../../GlobalStates/cartSlice';
import { useDispatch } from 'react-redux';
import { AxiosInstance } from '../../Config/axiosInstance'


function ProductList() {
  const [products,setProducts]=useState([])
  const navigate=useNavigate()
  const dispatch=useDispatch()

  const handleAddToCart=()=>{
    dispatch(addToCart(products))
  }

  useEffect(()=>{
    AxiosInstance.get('/products')
    .then(({data})=>{
       setProducts(data)
    })
    .catch((err)=>{
      if(err.response.data.message==='unauthorized user') {

      }
    })
  },[])

  return (
    <div className='Product-list'>
      {products.map((product,index)=>
              <Card className='container col-12 col-sm-6 col-md-4 col-lg-3 mb-4'>
              {/* <Link to={`/home/product/${product.id}`}> */}
              <Card.Img variant="top" className='cardImage' src={product.thumbnailUrl}/>
              {/* </Link> */}
              <Card.Body>
                <Card.Title className='card-title'>{product.title}</Card.Title>
                <Card.Text> </Card.Text>
                <button className='cart' onClick={handleAddToCart}>Add to cart</button>
              </Card.Body>
            </Card>
      )}
    </div>
  )
}

export default ProductList