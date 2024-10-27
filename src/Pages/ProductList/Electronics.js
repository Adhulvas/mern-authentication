import React, { useEffect } from 'react'
import axios from 'axios'
import ProductCards from '../ProductCards/ProductCards'
import { useDispatch, useSelector } from 'react-redux'
import { setElectronicsData } from '../../GlobalStates/ProductSlice'

function Electronics() {
  const {electronicsData}=useSelector((store)=>store.products)
  const dispatch=useDispatch()

  useEffect(()=>{
    getElectronics()
  },[])
  const getElectronics=()=>{
    axios('https://fakestoreapi.com/products/category/electronics').then((res)=>{
      dispatch(setElectronicsData(res.data))
    })
    .catch((err)=>{
      alert(err)
    })
  }
  return (
    <div className='Product-list'>
      {electronicsData.map((product,index)=><ProductCards product={product} key={index}/>)}
    </div>
  )
}

export default Electronics