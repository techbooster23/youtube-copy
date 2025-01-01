import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';
import banner from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className='banner-container'>
        <Link to={``} className='card'>
            <img className='banner' src={banner} alt="" />
        </Link>
    </div>
  )
}

export default Banner;