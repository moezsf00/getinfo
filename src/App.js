import React, { useEffect, useState } from 'react'
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import CardProd from './CardProd'

function App() {
  const [product,setProduct]=useState([])
  const fetchdata=()=>{
    axios.get("https://www.harmonystore01.com/api/get_All_products")
    .then((res)=>{
      console.log(res.data)
      setProduct(res.data)

    })
  }
  useEffect (()=>{
    fetchdata()
  },[])
  function createPost() {
    axios
      .post("https://www.harmonystore01.com/api/Create_products", {
        Product_material:"Iridescent Drusy",
        category:"Necklace ",
        description:"Two classics meet for the first time in the Elisa Herringbone Gold Multi Strand Necklace",
      
        image_url:"https://res.cloudinary.com/kendra-scott/image/upload/q_auto,f_auto,dpr_2/w_800,c_fit/Catalogs/kendrascott/Fall-2-2023/Product-Images/kendra-scott-elisa-herringbone-multistrand-necklace-gold-iridescent-drusy-00.jpg",
        price:200.00,
        price_promo:180.00,
        product_name:"Elisa Herringbone Gold Multi Strand Necklace",
        quantity_in_stock:14




      })
      .then((res) => {
        fetchdata()
        console.log(res.data)
      });
  }
 



  return (

    <div>
      { product.map((el,id) => <CardProd key={id} prod={el} />)
  
      }
      <button onClick={createPost} > send</button>
    </div>
  );
}

export default App;
