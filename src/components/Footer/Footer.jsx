import React from 'react'
import footerLogo from "../../assets/logo.png"
import Banner1 from "../../assets/footerBanner.avif"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow } from 'react-icons/fa6';
import { FaMobileAlt } from 'react-icons/fa';



const Footer = () => {
  
    const BannerImg={
        backgroundImage:`url(${Banner1})`,
        backgroundPosition:'bottom',
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        height:"100%",
        with:"100%"
    };

    const FooterLinks=[
        {
            title:"Home",
            link:"/#"
        },
        {
            title:"About",
            link:"/#about"
        },
        {
            title:"Contact",
            link:"/#contact"
        },
        {
            title:"Blog",
            link:"/#blog"
        },
    ]
  
    return (

    <div className='text-white ' style={BannerImg}>
      <div className='container'>
        <div className='grid grid-cols-3 pt-5 pb-44 ' data-aos='zoom-in'>
            {/* company details */}
            <div className='py-8 px-4'>
                <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3'><img src={footerLogo} alt=""className='max-w-[50px]' />Shopsy</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis eos amet inventore facilis nemo.</p>
            </div>
            {/* footer details */}
            <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 '>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map(data=>(
                                    <li key={data.title} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'><span>{data.title}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3'>Important Links</h1>
                        <ul className='flex flex-col gap-3'>
                            {
                                FooterLinks.map(data=>(
                                    <li key={data.title} className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200'><span>{data.title}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* social links */}
                    <div >
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#">
                                <FaInstagram className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaFacebook className='text-3xl' />
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-3xl' />
                            </a>
                        </div>
                        <div className='mt-6'>
                            <div className='flex items-center gap-3'>
                                <FaLocationArrow />
                                <p>Noida ,Uttar Pradesh</p>
                            </div>
                            <div className='flex items-center gap-3 mt-3'>
                                <FaMobileAlt />
                                <p>+91 813705223</p>
                            </div>
                        </div>
                    </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
