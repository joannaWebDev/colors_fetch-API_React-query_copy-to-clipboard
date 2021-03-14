import React from 'react';

const Hero = ({ title, subtitleParagraph, aboutParagraph, backImg }) => {
  return (
    <section className="container w-full flex justify-around flex-col md:flex-row items-center mt-13 mb-56 mx-auto px-2">
      <img
        loading="lazy"
        src={backImg}
        alt="hero background"
        className="w-80"
      />
      <div className="text-center px-5">
        <h1 className="text-4xl uppercase text-blue-700 font-bold text-center my-3">
          {title}
        </h1>
        <p className="text-green-700 font-bold">{subtitleParagraph}</p>
        <p>{aboutParagraph}</p>
      </div>
    </section>
  );
};

export default Hero;
