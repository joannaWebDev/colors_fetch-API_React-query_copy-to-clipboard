import React from 'react';

const Color = ({ color }) => {
  return (
    <li className="m-3 box-border w-3/4 md:w-1/3 p-4 border-4 flex flex-col shadow-2xl">
      <p className="items-start">{color.year}</p>
      <div className="text-center">
        <p>{color.name}</p>
        <p className="font-bold">{color.color}</p>
      </div>
      <p className="text-right items-end">{color.pantone_value}</p>
    </li>
  );
};
export default Color;
