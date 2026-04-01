import React, { use, useState } from 'react';
import CardStor from '../CarddStor/CardStor';
import MiniCart from '../Ui/MiniCart';

const Cards = ({ productPromise, setShopNow }) => {

  const CardInfo = use(productPromise);
  const [CardSelectedType, setCardSelected] = useState("products");
  const [MiniThisCarts, setMiniThisCarts] = useState ([])

  return (
    <div className='container mx-auto'>

      {/* Header */}
      <div className='text-center mt-10 space-y-4'>
        <h1 className='text-3xl font-bold'>Premium Digital Tools</h1>
        <p className='text-[16px] text-gray-500'>
          Choose from our curated collection of premium digital products designed <br />
          to boost your productivity and creativity.
        </p>
      </div>

      {/* Toggle Buttons */}
      <div className='flex justify-center items-center my-5'>

        <button 
          onClick={() => setCardSelected("products")}
          className={`btn ${
            CardSelectedType === "products"
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              : ""
          } rounded-l-xl rounded-r-none`}
        >
          Products
        </button>

        <button 
          onClick={() => setCardSelected("cart")}
          className={`btn ${
            CardSelectedType === "cart"
              ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
              : ""
          } rounded-r-xl rounded-l-none`}
        >
          Cart ({MiniThisCarts.length})
        </button>

      </div>

      {/* Conditional Render */}
      {
        CardSelectedType === "products" ? (
          <CardStor CardInfo={CardInfo} setShopNow={setShopNow}
          setMiniThisCarts={setMiniThisCarts}
          MiniThisCarts={MiniThisCarts}
          />
        ) : (
          <h2 className="text-center text-xl font-semibold">
            {<MiniCart 
            MiniThisCarts={MiniThisCarts}
            >
            </MiniCart>}
          </h2>
        )
      }

    </div>
  );
};

export default Cards;