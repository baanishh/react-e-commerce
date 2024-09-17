import React from 'react'
import Img1 from '../../assets/img1.png'
import Img2 from '../../assets/img2.jpg'
import Img3 from '../../assets/img3.jpg'
import Img4 from '../../assets/img4.jpg'
import Img5 from '../../assets/img5.jpg'
import { FaStar } from 'react-icons/fa6'


const productsData=[
  {
    id:1,
    img:Img1,
    title:"Women Ethnic",
    rating:5.0,
    color:"white",
    aosDelay:"0",
  },
  {
    id:2,
    img:Img2,
    title:"Prnted T-Shirt",
    rating:5.0,
    color:"red",
    aosDelay:"200",
  },
  {
    id:3,
    img:Img3,
    title:"Googles",
    rating:5.0,
    color:"brown",
    aosDelay:"400",
  },
  {
    id:4,
    img:Img4,
    title:"Fashion T-Shirt",
    rating:5.0,
    color:"yellow",
    aosDelay:"600",
  },
  {
    id:5,
    img:Img5,
    title:"Women Western",
    rating:5.0,
    color:"pink",
    aosDelay:"800",
  }
]

const Products = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* Header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos='fade-up' className='text-sm text-primary'>Top Sellings Products For You</p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>Products</h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dicta magni fugit.</p>
        </div>
        {/* Body Section */}
        <div>
            <div className='grid grid-cols-2 sm;grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
         {/* card section        */}
         {productsData.map(item=>(
            <div className='space-y-2'
            data-aos='fade-up'
            data-aos-delay={item.aosDelay}
            key={item.id}

            >
              <img src={item.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
              <h3 className='font-semibold'>{item.title}</h3>
              <p className='text-sm text-gray-600'>{item.color}</p>
              <div className='flex items-center gap-1'>
                <FaStar className='text-yellow-400' />
              <span>{item.rating}</span>
              </div>
              
            </div>
          ))
         }
            </div>
            {/* view all button */}
            <div className='flex justify-center'>
              <button className='text-center mt-10 cursor-pointer bg-primary text-white rounded-md px-5 py-1'>View All Button</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Products
