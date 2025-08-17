import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price, index }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
      to={`/product/${id}`}
      onClick={() => window.scrollTo(0, 0)}
      className='text-gray-700 cursor-pointer group'
      data-aos="zoom-in-up"           //  Zoom + slide
      data-aos-delay={index * 100}    //  Staggered animation
      data-aos-duration="800"         //  Smooth speed
    >
      {/* Image Wrapper */}
      <div
        className='overflow-hidden rounded-lg shadow-md group-hover:shadow-xl transition-transform duration-500'
        data-aos="flip-left"          // Flip on scroll
      >
        <img
          className='group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 ease-in-out'
          src={image[0]}
          alt={name}
        />
      </div>

      {/* Text Section */}
      <p
        className='pt-3 pb-1 text-sm'
        data-aos="fade-right"
        data-aos-delay={index * 120}
      >
        {name}
      </p>

      <p
        className='text-sm font-medium'
        data-aos="fade-left"
        data-aos-delay={index * 150}
      >
        {currency}{price}
      </p>
    </Link>
  )
}

export default ProductItem
