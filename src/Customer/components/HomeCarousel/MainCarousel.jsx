import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCarouseldata } from './MainCarouseldata';


const items = MainCarouseldata.map((item) => <img class='cursor-pointer' 
                            src={item.imageUrl} role='presentation' />)

export const MainCarousel = () => (
    <div className=''>
    <AliceCarousel
        items={items}
       disableButtonsControls
       autoPlay
       autoPlayInterval={1000}
       infinite
    />
    </div>
);