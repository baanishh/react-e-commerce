import Image1 from '../../assets/women.png'
import Image2 from '../../assets/shopping.png'
import Image3 from '../../assets/sales.png'
import Slider from 'react-slick'

const imagelist=[
    {
        id:1,
        img:Image1,
        title:"Upto 50% off on all mens wear",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur aut dolor alias nobis pariatur distinctio quidem laboriosam, vitae ex cum."
    },
    {
        id:2,
        img:Image2,
        title:"Upto 50% off on all mens wear",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur aut dolor alias nobis pariatur distinctio quidem laboriosam, vitae ex cum."
    },
    {
        id:3,
        img:Image3,
        title:"Upto 50% off on all mens wear",
        description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur aut dolor alias nobis pariatur distinctio quidem laboriosam, vitae ex cum."
    }

]

const Hero = ({handleOrderPopup}) => {

    var settings={
        dots:false,
        arrows:false,
        infinite:true,
        speed:800,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:4000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    }

  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
        {/* background pattern */}
      <div className='bg-primary/40 h-[700px] w-[700px] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'>

      </div>
      {/* hero section */}
      <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}>
            {imagelist.map((data)=>(
                 <div key={data.id}>
                 <div className='grid grid-cols-1 sm:grid-cols-2 '>
           {/* Text content section */}
           <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
             <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>{data.title}</h1>
             <p className='text-sm'>{data.description}</p>
             <div>
                 <button onClick={()=>handleOrderPopup()} className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
             </div>
           </div>
           {/* image section */}
           <div className='order-2 sm:order-1 '>
             <div
              data-aos='zoom-in'
              data-aos-duration='500'
              data-aos-delay='300'
              className='relative z-10'
             
             >
                 <img src={data.img} className='w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] object-contain mx-auto lg:scale-120' alt="" />
             </div>
           </div>
                 </div>
             </div>
            ))}
       
        </Slider>
       
      </div>
    </div>
  )
}

export default Hero
