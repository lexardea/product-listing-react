import { useState } from 'react'
import './App.css'
import ProductList from './ProductList'

function App() {
  const [ products ] = useState ([
    {
      id: 1, 
      name: "8-Week Beginner Yoga Program", 
      price: "$80", 
      description: "8 pre-recorded classes, worksheet, and 8 weekly half-hour one-on-one online sessions"},
    {
      id: 2, 
      name: "12-Week Beginner Yoga Program", 
      price: "$120", 
      description: "12 pre-recorded classes, worksheet, and 12 weekly half-hour one-on-one online sessions"},
    {
      id: 3, 
      name: "16-Week Beginner Yoga Program", 
      price: "$160", 
      description: "16 pre-recorded classes, worksheet, and 8 weekly half-hour one-on-one online sessions"},
    {id: 4, 
      name: "20-Week Beginner Yoga Program", 
      price: "$200", 
      description: "20 pre-recorded classes, worksheet, and 8 weekly half-hour one-on-one online sessions"},
  ])
  
  return (
    <>
      <ProductList products={products}/>
    </>
  )
}

export default App
