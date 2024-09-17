import React from 'react'
import Card1 from '../../assets/card1.jpg'
import Card2 from '../../assets/card2.jpg'
import Card3 from '../../assets/card3.jpg'
import Card4 from '../../assets/card4.jpg'
import Slider from 'react-slick'

const testimonials=[
    {
        id:1,
        name:'victor',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni similique eos ipsam expedita dicta reiciendis illo numquam, cum, enim perferendis officia. Voluptatum perspiciatis laborum vel molestiae beatae quas? Similique.',
        img:Card1
    },
    {
        id:2,
        name:'Abhilash',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni similique eos ipsam expedita dicta reiciendis illo numquam, cum, enim perferendis officia. Voluptatum perspiciatis laborum vel molestiae beatae quas? Similique.',
        img:Card2
    },
    {
        id:3,
        name:'George',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni similique eos ipsam expedita dicta reiciendis illo numquam, cum, enim perferendis officia. Voluptatum perspiciatis laborum vel molestiae beatae quas? Similique.',
        img:Card3
    },
    {
        id:4,
        name:'Vishal',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil magni similique eos ipsam expedita dicta reiciendis illo numquam, cum, enim perferendis officia. Voluptatum perspiciatis laborum vel molestiae beatae quas? Similique.',
        img:Card4
    },
    
]


const Testimonials = () => {

  var settings={
    dots:true,
    arrow:false,
    infinite:true,
    speed:500,
    slidesToScroll:1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase:'linear',
    pauseOnHover:true,
    pauseOnFocus:true,
    responsive:[
      {
        breakpoint:10000,
        settings:{
          slidesToShow:3,
          slidesToScroll:1,
          infinite:true,
        }
      },
      {
        breakpoint:1024,
        settings:{
          slidesToShow:2,
          slidesToScroll:1,
          initialSlide:2,
        }
      },
      {
        breakpoint:640,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
         
        }
      }
    ]
  }

  return (
    <div className='py-10 mb-10'>
      <div className='container'>
        {/* header section */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
            <p data-aos='fade-up' className='text-sm text-primary'>What Our Customer Are Saying</p>
            <h1 data-aos='fade-up' className='text-3xl font-bold'>Testimonials</h1>
            <p data-aos='fade-up' className='text-xs text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dicta magni fugit.</p>
        </div>
        {/* testimaonials card */}
        <div data-aos='zoom-in'>
          <Slider {...settings}>
            {
              testimonials.map((data)=>(
                <div key={data.title} className='my-6'> 
                     <div key={data.id}
                className='flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:gray-800 bg-primary/10 relative'
                >
                  <div className='mb-4'>
                    <img src={data.img} alt="" className='rounded-full w-20 h-20' />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-400'>{data.text}</p>
                      <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif absolute top-0 right-0'>,,</p>
                </div>
                </div>
               
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
