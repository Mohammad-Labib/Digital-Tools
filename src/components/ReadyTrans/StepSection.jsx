import React from 'react';
import UserImg from "../../assets/user.png"
// import RocketImg from "../../assets/rockt.png"
// import PackageImg from "../../assets/packag.png"
const StepSection = () => {
    return (
        <>
       <section className="mt-20 container mx-auto px-4 ">
        <div className='text-center p-8 space-y-4 '>
            <h1 className='text-3xl font-bold'>Get Started in 3 Steps</h1>
            <p className='text-[#627382] text-[16px]'>Start using premium digital tools in minutes, not hours.</p>
        </div>
  
  <div className="grid grid-cols-3 gap-6">
    
   {/* card-1 */}
    <div className=" bg-base-100 shadow rounded-2xl">
      <div className='flex justify-end p-4'>
        <h1 className='text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2'>01</h1>
      </div>

      <div className='flex justify-center p-6'>
        <img src={UserImg} className='rounded-full p-6 bg-gradient-to-r from-indigo-50 to-purple-50' />
      </div>

      <div className="text-center space-y-4 pb-6">
        <h2 className="text-2xl font-bold">Create Account</h2>
        <p className='text-[#627382]'>
         Sign up for free in seconds. No credit card <br /> required to get started. </p>
      </div>
    </div>

    {/* Card-2 */}
    <div className=" bg-base-100 shadow rounded-2xl">
      <div className='flex justify-end p-4'>
        <h1 className='text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2'>02</h1>
      </div>

      <div className='flex justify-center p-6'>
        <img src={UserImg} className='rounded-full p-6 bg-gradient-to-r from-indigo-50 to-purple-50' />
      </div>

      <div className="text-center space-y-4 pb-6">
        <h2 className="text-2xl font-bold">Choose Products</h2>
        <p className='text-[#627382]'>
          Browse our catalog and select the tools <br />that fit your needs.
        </p>
      </div>
    </div>

    {/* Card-3 */}
    <div className=" bg-base-100 shadow rounded-2xl">
      <div className='flex justify-end p-4'>
        <h1 className='text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full p-2'>03</h1>
      </div>

      <div className='flex justify-center p-6'>
        <img src={UserImg} className='rounded-full p-6 bg-gradient-to-r from-indigo-50 to-purple-50' />
      </div>

      <div className="text-center space-y-4 p-6">
        <h2 className="text-2xl font-bold">Start Creating</h2>
        <p className='text-[#627382]'>
          Download and start using your premium <br /> tools immediately.
        </p>
      </div>
    </div>

  </div>

</section>
        </>

    );
};

export default StepSection;