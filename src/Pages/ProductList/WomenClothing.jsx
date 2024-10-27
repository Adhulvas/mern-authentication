import axios from 'axios'
import React, { useEffect } from 'react'
import ProductCards from '../ProductCards/ProductCards'
import { useDispatch, useSelector } from 'react-redux'
import { setWomenClothingData } from '../../GlobalStates/ProductSlice'

function WomenClothing() {
  const {womenClothingData}=useSelector((store)=>store.products)
  const dispatch=useDispatch()
  const name="women's clothing"

  useEffect(()=>{
    getWomenClothingData()
  },[])

  const getWomenClothingData=()=>{
    axios(`https://fakestoreapi.com/products/category/${name}`).then((res)=>{
      dispatch(setWomenClothingData(res.data))
    })
    .catch((err)=>{
      alert(err)
    })
  }

  return (
    <div className='Product-list'>
      {womenClothingData.map((product,index)=><ProductCards product={product} key={index}/>)}
    </div>
  )
}

export default WomenClothing