import React from 'react';
import Hero from './Hero';

import backImg from './../assets/color-pencils-34595_640.png';

const HeroSection = (props) => {
  return (
    <Hero
      title="Multi-Talent"
      subtitleParagraph="Standardized colors"
      aboutParagraph="To be used in all the products: websites, new designs, flyers and social media"
      backImg={backImg}
    />
  );
};

export default HeroSection;
