import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./link.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../Redux/Cartslice";
const Link = () => {
      const cartProduct = useSelector((state)=>state.cart.cartItem)

      const dispatch = useDispatch()

    const deleteCart = (item)=>{
        dispatch(deleteFromCart(item))
    }


  return (
    <div>
      <Swiper className="mySwiper">
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>

      {
        cartProduct.map((item)=>(
           <div key={item.id}>
                        <img src={item.img} alt='imgg' width={100} />
                        <h1>{item.title}</h1>
                        <h3>₹{item.price}</h3>
                        <p>{item.des}</p>
                        <button onClick={()=>deleteCart(item)}>Delete</button>
                    </div>
        ))
      }
    </div>
      
  )
}

export default Link
