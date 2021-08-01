import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import classes from './TopSlider.module.scss';
import image1 from '../../assets/img/slider_1.jpg';
import image2 from '../../assets/img/slider_2.jpg';
import image3 from '../../assets/img/slider_3.jpg';


const TopSlider = () => {

  return (
    <div className={classes.topslider}>
      <AliceCarousel autoPlay autoPlayInterval="5000" autoPlayStrategy="action" disableButtonsControls infinite>
        <img src={image1} className={classes.topslider__img} alt="slider 1" />
        <img src={image2} className={classes.topslider__img} alt="slider 2" />
        <img src={image3} className={classes.topslider__img} alt="slider 3" />
      </AliceCarousel>
    </div>
  );
}

export default TopSlider;

