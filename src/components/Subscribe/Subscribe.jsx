import React from 'react'
import Subs from '../../assets/Subscribe.avif'

const Subscribe = () => {

    const BannerImg={
        backgroundImage:`url(${Subs})`,
        backgroundPosition:'center',
        backgroundRepaet:'no-repeat',
        backgroundSize:'cover',
        height:'100%',
        width:'100%'
    }

  return (
    <div data-aos='zoom-in' className='mb-20 bg-gray-100 dark:bg-gray-800 text-white' style={BannerImg}>

      <div className='container back-drop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1 className='text-2xl sm:text-left !text-center font-semibold sm:text-4xl'>Get Notified About New Products</h1>
            <input type="text
            "
            data-aos='fade-up'
            placeholder='Enter Your Email'
            className='w-full p-3'
            />
        </div>
      </div>
    </div>
  )
}

export default Subscribe
