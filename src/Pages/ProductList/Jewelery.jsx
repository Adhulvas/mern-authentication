import React, { useEffect } from 'react'
import ProductCards from '../ProductCards/ProductCards'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setJeweleryData } from '../../GlobalStates/ProductSlice'

function Jewelery() {
  const {jeweleryData}=useSelector((store)=>store.products)
  const dispatch=useDispatch()

  useEffect(()=>{
    getJeweleryData()
  },[])

  const getJeweleryData=()=>{
    axios('https://fakestoreapi.com/products/category/jewelery').then((res)=>{
      dispatch(setJeweleryData(res.data))
    })
    .catch((err)=>{
      alert(err)
    })
  }

  return (
    <div className='Product-list'>
      {jeweleryData.map((product,index)=><ProductCards product={product} key={index}/>)}
    </div>
  )
}

export default Jewelery