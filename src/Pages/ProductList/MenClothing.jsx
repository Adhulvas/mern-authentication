import axios from 'axios'
import React, { useEffect } from 'react'
import ProductCards from '../ProductCards/ProductCards'
import { useDispatch, useSelector } from 'react-redux'
import { setMenClothingData } from '../../GlobalStates/ProductSlice'

function MenClothing() {
  const {menClothingData}=useSelector((store)=>store.products)
  const dispatch=useDispatch()

  const name="men's clothing"

  useEffect(()=>{
    axios(`https://fakestoreapi.com/products/category/${name}`).then((res)=>{
      dispatch(setMenClothingData(res.data))
    })
    .catch((err)=>{
      alert(err)
    })
  })
  
  return (
    <div className='Product-list'>
      {menClothingData.map((product,index)=><ProductCards product={product} key={index}/>)}
    </div>
  )
}

export default MenClothing