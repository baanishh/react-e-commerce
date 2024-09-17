import React from 'react'
import Img1 from '../../assets/shirt1.png'
import Img2 from '../../assets/shirt2.png'
import Img3 from '../../assets/shirt3.png'
import { FaStar } from 'react-icons/fa6'

const ProductsData=[
    {
        id:1,
        img:Img1,
        title:"Casual Wear",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, ullam officiis provident facilis ratione excepturi fugiat omnis veniam eveniet odit."
    },
    {
        id:2,
        img:Img2,
        title:"Printed Shirt",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, ullam officiis provident facilis ratione excepturi fugiat omnis veniam eveniet odit."
    },
    {
        id:3,
        img:Img3,
        title:"Women Shirt",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel, ullam officiis provident facilis ratione excepturi fugiat omnis veniam eveniet odit."
    },
  
]

const TopProducts = ({handleOrderPopup}) => {
  return (
    <div>
      <div className='container'>
        {/* header section */}
        <div className='text-left mb-24'>
            <p data-aos='fade-up' className='text-sm text-primary'>Top Rated Products For You</p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>Best Products</h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dicta magni fugit.</p>
        </div>
        {/* body section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center '>
            {
                ProductsData.map(item=>(
                    <div key={item.id} data-aos='zoom-in' className='rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]'>
                        {/* image section */}
                        <div className='h-[100px]'>
                            <img src={item.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                        </div>
                        {/* details section */}
                        <div className='p-4 text-center'>
                            {/* star rating */}
                            <div className='w-full flex items-center justify-center gap-1'>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                                <FaStar className='text-yellow-500'/>
                            </div>
                            <h1 className='text-xl font-bold'>{item.title}</h1>
                            <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 '>{item.description}</p>
                            <button onClick={()=>handleOrderPopup()} className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 mt-4 group-hover:text-primary group-hover:bg-white rounded-full'>
                                Order Now
                            </button>
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default TopProducts
