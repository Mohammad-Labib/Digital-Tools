import React from 'react';
import ShopImg from "../../assets/products/shopping-cart.png";

const NavBar = ({shopNow}) => {
  return (
    <nav className="flex justify-between items-center py-4 px-6 container mx-auto">

  
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Digi Tools
      </h1>

      
      <ul className="flex gap-8 items-center">
        <li className="text-md font-medium">
          <a href="/">Products</a>
        </li>
        <li className="text-md font-medium">
          <a href="/">Features</a>
        </li>
        <li className="text-md font-medium ">
          <a href="/">Pricing</a>
        </li>
        <li className="text-md font-medium ">
          <a href="/">Testimonials</a>
        </li>
        <li className="text-md font-medium ">
          <a href="/">FAQ</a>
        </li>
      </ul>

  
      <div className="flex gap-4 items-center">
        <button className=" relative flex items-center gap-2  px-4 py-2 ">
          <img src={ShopImg} alt="cart" className="w-6 h-6" />
          {
            shopNow > 0  &&(
          <span className="absolute font-semibold bg-red-500 text-md  text-white rounded-full h- w-6 -top-2 -right-1">{shopNow}</span>
          )}
      
        </button>


        <button className="btn text-lg font-medium px-4 py-2 rounded-md border ">
          Login
        </button>

    
        <button className="btn text-lg font-medium rounded-full px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          Get Started
        </button>

      </div>
    </nav>
  );
};

export default NavBar;