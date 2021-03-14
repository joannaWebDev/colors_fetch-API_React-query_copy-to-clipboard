import React from 'react';
import {IoMdCopy} from 'react-icons/io';

const Color = ({ color }) => {
  const aioColors = document.querySelectorAll('.color p');

  aioColors.forEach((color) => {
    color.addEventListener('click', () => {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(color);
      selection.removeAllRanges();
      selection.addRange(range);

      try {
        document.execCommand('copy');
        selection.removeAllRanges();

        const original = color.textContent;
        color.textContent = 'Copied!';
        color.classList.add('success');

        setTimeout(() => {
          color.textContent = original;
          color.classList.remove('success');
        }, 1200);
      } catch (e) {
        const errorMsg = document.querySelector('.error-msg');
        errorMsg.classList.add('show');

        setTimeout(() => {
          errorMsg.classList.remove('show');
        }, 1200);
      }
    });
  });

  return (
    <div className="color m-3 box-border w-3/4 md:w-1/3 p-4 border-4 flex flex-col shadow-2xl hover:bg-blue-100 cursor-pointer">
      <div><IoMdCopy className="text-pink-500 float-right"/></div>
      <p className="items-start">{color.year}</p>
      <div className="text-center">
        <p>{color.name}</p>
        <p className="font-bold">{color.color}</p>
      </div>
      <p className="text-right items-end">{color.pantone_value}</p>
      <p class="error-msg hide">Can't copy, hit Ctrl+C!</p>
    </div>
  );
};
export default Color;


/*IMPORTANT 
--> const selection = window.getSelection();
const range = document.createRange();
range.selectNodeContents(color);
selection.removeAllRanges();
selection.addRange(range);
This gets a selection object, then creates a range where we select the contents our p element. We then make sure that the global selection doesn’t contain any range yet, and add our new range to the selection.


--> 

*/