import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const SimpleTrans = () => {
  return (
    <section className='mt-20 container mx-auto px-4'>
      
    
      <div className='text-center mb-12'>
        <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
        <p className='text-md mt-2'>
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>

   
      <div className='grid grid-cols-3 gap-8 justify-items-center'>
        
   
        {[1,2,3].map((item, i) => (
          <div key={i} className="card w-full  bg-base-100 shadow ">
            
            <div className="card-body">
              
              <span className="badge badge-warning w-fit">Most Popular</span>

              <div>
                <h2 className="text-3xl font-bold">Premium</h2>
                <p className='text-base-content/70'>Perfect for getting started</p>
              </div>
              
              <h1 className="text-xl">
                <span className='text-3xl font-bold'>$29</span> /month
              </h1>

              <ul className="mt-4 flex flex-col gap-3 text-sm">
                <li className='flex items-center gap-2'>
                  <MdOutlineDone className='text-green-500 text-lg' />
                  Access to 10 free tools
                </li>
                <li className='flex items-center gap-2'>
                  <MdOutlineDone className='text-green-500 text-lg' />
                  Basic templates
                </li>
                <li className='flex items-center gap-2'>
                  <MdOutlineDone className='text-green-500 text-lg' />
                  Community support
                </li>
                <li className='flex items-center gap-2'>
                  <MdOutlineDone className='text-green-500 text-lg' />
                  1 project per month
                </li>
              </ul>

              <div className="mt-6">
                <button className="btn w-full rounded-full text-white border-none bg-gradient-to-r from-indigo-500 to-purple-500">
                  Subscribe
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default SimpleTrans;