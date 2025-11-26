import React, { useState } from 'react'

const Air = () => {
    const images = [
      "https://m.media-amazon.com/images/I/71F4f6zstML._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71cpQCoTFVL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/81aEFdfXKxL._SX679_.jpg",
      "https://m.media-amazon.com/images/I/71ss+bhRR-L._SX679_.jpg"
    ]
    const[count, setCount] = useState(Image[0])
  return (
    <div>
      <img src={count} width="300"/>
      {images.map((img) => (
        <img
        src={img}
        width="100"
        onClick={() => setCount(img)}/>
      ))}
    </div>
  )
}

export default Air
