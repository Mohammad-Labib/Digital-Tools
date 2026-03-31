import React from 'react';
import { MdOutlineDone } from 'react-icons/md';

const CardtFix = ({onlyCard}) => {
    return (
         <div className="card w-96 bg-base-100 shadow-sm mt-6">
  <div className="card-body space-y-4">
    <div className='flex justify-end '>
        <h1 className='text-sm bg-amber-100 text-amber-500 rounded-full p-1'> Most Popular</h1>
      </div>

        <div>
            <img className='rounded-full p-6 shadow shadow-amber-400' src={onlyCard.img}  alt="" />
        </div>

    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{onlyCard.name}</h2>
    </div>
    <div>
         <p>{onlyCard.description}</p>
    </div>
    <div>
           <p className="text-xl"><span className='font-bold'>{onlyCard.price}</span>/mo</p>
    </div>
    <ul className="   gap-2 text-md">

        <li  className='flex gap-2'>
       <MdOutlineDone className='text-green-500 text-lg' />
       <p>{onlyCard.icon}</p>
      </li>

      <li  className='flex gap-2'>
        <MdOutlineDone className='text-green-500 text-lg' />
        <p>{onlyCard.tag}</p>
      </li>

      <li className='flex gap-2'>
        <MdOutlineDone className='text-green-500 text-lg' />
        <p>{onlyCard.features}</p>
      </li>


    </ul>
    <div className="">
      <button className="btn btn-primary rounded-full text-xl bg-gradient-to-r from-indigo-500 to-purple-500 btn-block">Subscribe</button>
    </div>
  </div>
</div>
    );
};

export default CardtFix;