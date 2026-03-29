import React from 'react';
import { FaUser } from 'react-icons/fa';
import { LuShoppingCart } from 'react-icons/lu';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-2 container mx-auto ">
      
      <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 p-2 bg-clip-text text-transparent">
  Digi Tools
</h1>

      <ul className="flex gap-6">
        <li className="text-md text-black"><a href="/">Products</a></li>
        <li className="text-md text-black"><a href="/">Features</a></li>
        <li className="text-md text-black"><a href="/">Pricing</a></li>
        <li className="text-md text-black"><a href="/">Testimonials</a></li>
        <li className="text-md text-black"><a href="/">FAQ</a></li>
      </ul>

      <div className="flex gap-6 items-center">
        <LuShoppingCart className='text-2xl'></LuShoppingCart>
        <button className="btn text-xl ">Login</button>
        <button className="btn text-xl rounded-full btn-primary bg-gradient-to-r from-blue-700 to-purple-600 p-4">Get Started</button>
      </div>

    </nav>
    
  );
};

export default NavBar;