import React, { use, useState } from 'react';
import CardStor from '../CarddStor/CardStor';

const Cards = ({productPromise}) => {
    // console.log(productPromise);

    const CardInfo = use(productPromise);
    // console.log(CardInfo);
    const [CardSelectedType, setCardSelected] = useState("products")
    return (
        <div className='container mx-auto'>
            <div className='text-center mt-10 space-y-4'>
                <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
                <p className='text-[16px] text-gray-500'>Choose from our curated collection of premium digital products designed <br />to boost your productivity and creativity.</p>
            </div>
           <div className='flex justify-center  items-center my-5'>

            <button 
            onClick={()=> setCardSelected("products")}
            className={`btn ${CardSelectedType ? "rounded-full  bg-gradient-to-r from-indigo-500 to-purple-500" : "bg-rad-500"} rounded-r-none rounded-l-xl `}>Products</button>


            <button 
            onClick={()=> setCardSelected("cart")}
             className={`btn ${CardSelectedType ? "rounded-full  " : ""} rounded-l-none rounded-r-xl `}>Cart (2)</button>
           </div>

            <CardStor CardInfo={CardInfo}></CardStor>
        </div>
    );
};

export default Cards;