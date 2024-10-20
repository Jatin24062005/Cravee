import React, { useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart , removeFromCart } from '../Store/cartSlice';


const Card = ({ id,img, name, cuisine, location, costForTwo, distance, rating }) => {
  const [count,setCount] =useState(0);
  const dispatch = useDispatch();
  const incrementCount = () => {
    setCount(count + 1);
    dispatch(addToCart({key : id}));
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
      dispatch(removeFromCart({key: id}));
    }
  };
  return (
    <div className="max-w-sm  my-3 w-64 mx-auto gap-0 bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <img className="w-full h-48 object-cover" src={img} alt={name} />
        <div className="absolute top-2  bg-blue-500 hover:bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white text-xs px-2 py-1 rounded visible ">
          Flat 20% OFF {/* Example, replace with dynamic content */}
        </div>
      </div>
      <div className="p-4 ">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-sm text-gray-500">{cuisine}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">₹{costForTwo} for two</span>
          </div>
          <div className="flex-col items-center">
            <span className="text-sm text-gray-500">{distance} km</span>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4 py-2 bg-gray-100">
        <div className='w-fit flex h-fit'>
        <span className="text-sm text-green-500 font-semibold">{rating}</span>
        <svg className="w-4 h-4 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.39 2.83L5.8 12 2 7.39 7.56 7 10 2l2.44 5 5.56.39-3.8 4.61.79 5.83L10 15z" />
        </svg>
       </div>

       <div className='flex shadow-lg w-14  h-8 bg-grey-200'>
       <button onClick={incrementCount} className='w-4 bg-white ring-1 rounded-l-md ring-blue-400 p-1 items-center'>+</button>
        <div className='text-sm  items-center  px-3 content-center text-lime-600 bg-white z-50  '>
          {count}
          </div>
        <button onClick={decrementCount} className='w-4 bg-white ring-1  rounded-r-md ring-red-400 p-1 items-center'>-</button>
       </div>

      </div>
    </div>
  );
};

export default Card;
