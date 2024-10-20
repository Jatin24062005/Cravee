import React from "react";
import { Link } from "react-router-dom";
import Food from "./Food";

import heroImage from "./e067a1cf0d3fe27b366402b98b994e9f1716296909.avif"; // Add a hero image if needed
import Card from "../Card/Card";

const Home = () => {
  return (
    <div className=" flex flex-col ">
    
      <section className="hero-section bg-gray-100 py-2 mb-4">
        <div className="container mx-full flex flex-col items-center">
          <img src={heroImage} alt="Hero" className="w-full h-fit mx-7 px-8" />
        </div>
      </section>

      <div >
        <h1 className="text-2xl ml-8 font-bold shadow-sm mb-4">Best Food in Delhi-Ncr</h1>
      </div>
     
      <div className="flex flex-wrap justify-evenly px-7 my-4 h-fit w-full ">  
        {
         Food.map(((food) => (
            <Card
            id={food.key}
            cuisine={food.cuisine}
            name={food.name}
            img={food.img}
            location={food.add}
            distance={food.distance}
            rating={food.rating}
            costForTwo={food.costForTwo}

            />
          )))
        }
      </div>


    </div>
  );
};

export default Home;
