import React from 'react';
import { MainCarousel } from '../HomeCarousel/MainCarousel';
import HomeSectionCarousel from '../HomeSectionCarousel/HomeSectionCarousel';
import { mens_kurta } from '../../../Data/mens_kurta';
import { mensShoes } from '../../../Data/mens_shoes';

const HomePage = () => {
    return (
       <div>
         <MainCarousel/>
         <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Kurta"}/>
        
        <HomeSectionCarousel data={mensShoes} sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Saree"}/>
        <HomeSectionCarousel data={mens_kurta} sectionName={"Women's Kurta"}/>
       
     
       </div>
          
       </div>
       
        
    );
}


export default HomePage;
