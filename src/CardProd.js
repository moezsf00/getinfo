import axios from 'axios';
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export default function info({prod}) {
  const deleteitem=(id)=>{
    axios.delete("https://www.harmonystore01.com/api/delete_product/"+id).then(
     (res)=>{
       
       console.log(res)
 
     }
 
    )
 
 
 
   }

  return (
  <>
  <img src={prod.image_url} style={{height:200 ,width:200}} ></img>
  <h1> {prod.product_name}  </h1>
  <h1> {prod.category}   </h1>
  <h1> {prod.created_at}   </h1>
  <h1> {prod.description}   </h1>
  <h1> {prod.price}   </h1>
    <button onClick={()=> deleteitem(prod.id) }> delete</button>
  </>


  )
}
