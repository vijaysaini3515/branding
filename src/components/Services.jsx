import React from 'react';
import {Carousel} from 'react-responsive-carousel';
import img1 from '../assets/images/3.jpg';
import img2 from '../assets/images/4.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css'



const Services =()=>{
  return(
    <div>
      <Carousel infiniteLoop autoPlay showStatus={false} showArrows={false} showThumbs={false} interval={1000}>
        <div>
          <img src={img1} alt="item1" />
          <p className='legend'>Full stack</p>
        </div>

        <div>
          <img src={img2} alt="item1" />
          <p className='legend'>Server testing</p>
        </div>
      </Carousel>
  
    </div>
  )
}

export default Services;