import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import './SliderMultipleItems.scss';


export const SliderMultipleItems = () =>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false
      };

      return(
        
        <Slider {...settings}>
            <img src='\carousel\carousel-img-1.jpg' alt='carousel img 1' />
            <img src='\carousel\carousel-img-2.jpg' alt='carousel img 1' />
            <img src='\carousel\carousel-img-3.jpg' alt='carousel img 1' />
            <img src='\carousel\carousel-img-4.jpg' alt='carousel img 1' />
            <img src='\carousel\carousel-img-5.jpg' alt='carousel img 1' />
            <img src='\carousel\carousel-img-6.jpg' alt='carousel img 1' />
        </Slider>
      );
}