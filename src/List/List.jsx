import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../Redux/Cartslice'

const List = () => {
    const product = [
        {
            id:1,
            title:"KTM 200",
            img:"https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/naked-bike/ktm-160-duke/ktm-160-duke_bike-card_501-x-499_1.webp?h=499&iar=0&w=501&hash=BF8815FB3942E99F249E0D740A8CDC8B",
            price:30000 ,
            des:"good vechile",
            quantity:1
        },
        {
            id:2,
            title:"KTM 200",
            img:"https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/collections/200-duke-orange.webp?h=499&iar=0&w=501&hash=541D148F87EE60B0191B1A977BDEA4DB",
            price:30000 ,
            des:"good vechile",
            quantity:1
        },
         {
            id:3,
            title:"KTM 200",
            img:"https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/collections/250-duke-orange.webp?h=499&iar=0&w=501&hash=778EF2CD7FE704CAEECEA53B4ACF2453",
            price:30000 ,
            des:"good vechile",
            quantity:1
        },
         {
            id:4,
            title:"KTM 200",
            img:"https://www.ktmindia.com/-/media/images/ktm/ktm-big-bikes/2025-ktm-enduro-390-r/nav-img/390-enduro-r-collection.webp?h=488&iar=0&w=490&hash=0827DFBA600F794AA9A0D21FC1333DB5 ",
            price:30000 ,
            des:"good vechile",
            quantity:1
        },
         {
            id:5,
            title:"KTM 200",
            img:"https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/ktmcardimages/ktm-bike-angle-5pm_500-x-498/webp/1390-super-duke-r-orange.webp?h=499&iar=0&w=501&hash=3B06E7B4A8B79D16CEF2B53D4602FE0E",
            price:30000 ,
            des:"good vechile",
            quantity:1
        },
         {
            id:6,
            title:"KTM 200",
            img:"https://www.ktmindia.com/-/media/images/ktm/ktm-bikes/travel/2025-ktm-250-adv/others/5-pm-_-250-adventure-x.webp?h=499&iar=0&w=501&hash=0958AB44EEFFF9E26E98678D41ED5DF9",
            price:30000 ,
            des:"good vechile",
            quantity:1
        },
        
    ]

    const cartProduct = useSelector((state)=>state.cart.cartItem)

    const dispatch = useDispatch()

    const addCart = (item)=>{
        dispatch(addToCart(item))
    }


  return (
    <div>
    

      <div className='container'>
        <div className='row'>
            {
                product.map((item)=>(
                    <div className='col-lg-4' key={item.id}>
                        <img src={item.img} alt='img' width={100} />
                        <h1>{item.title}</h1>
                        <h3>₹{item.price}</h3>
                        <p>{item.des}</p>
                        {
                            cartProduct.find((items)=>items.id === item.id) ? 
                            <button disabled>Added to cart</button>:
                            <button onClick={()=>addCart(item)}>Add to cart</button>
                        }
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default List