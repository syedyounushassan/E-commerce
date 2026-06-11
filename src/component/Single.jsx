
import React from 'react'


const Single = () => {

    fetch('https://fakestoreapi.com/products/1')
  .then(response => response.json())
  .then(data => console.log(data));

    return (
    <div>




    </div>
  )


}

export default Single