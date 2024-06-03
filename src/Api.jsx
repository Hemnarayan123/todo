import React, { useState } from 'react'
import axios from 'axios'

function Api() {
    const [apiProduct, setApiProduct] = useState([])

    axios('http://localhost:8000/product')
    .then((res)=> {
        setApiProduct(res.data)
    })
    .catch((err) => {
        console.log(err);
    })
  return (
   <>
   {
    apiProduct.map((item)=> {
        
    })
   }
   
   </>
  )
}

export default Api