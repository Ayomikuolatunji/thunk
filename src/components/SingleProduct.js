import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchById } from '../features/Cart/cartSlice'

export default function SingleProduct() {
const dispatch=useDispatch()
const {id}=useParams()

 useEffect(()=>{
    dispatch(fetchById(id))
 },[dispatch,id])

  return (
    <div>SingleProduct</div>
  )
}
