import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import image1 from '../styles/img/img1.jpg'
import image2 from '../styles/img/img2.jpg'
import image3 from '../styles/img/img3.jpg'
import image4 from '../styles/img/img4.jpg'
import image5 from '../styles/img/img5.jpg'
import image6 from '../styles/img/img6.jpg'
import image7 from '../styles/img/img7.jpg'



class SimpleCarousel extends Component {
render() {
    return (
        <div className="carousel-image" style={{padding:20}}>
        <Carousel width={'30%'} swipeable={true} showArrows={true}>
                    
                    <div>
                    <img src={image1} />
                    </div>
                    <div>
                    <img src={image2}/>
                    </div>
                    <div>
                    <img src={image3} />
                    </div>
                    <div>
                    <img src={image4}/>
                    </div>
                    <div>
                    <img src={image5} />
                    </div>
                    <div>
                    <img src={image6}/>
                    </div>
                    <div>
                    <img src={image7} />
                    </div>
            
        </Carousel>
        </div>
    );
  }
}

export default SimpleCarousel;
