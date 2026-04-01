import React from 'react';

const MiniCart = ({ MiniThisCarts, setMiniThisCarts, setShopNow }) => {

  const handleDeleteCart = (onlyCard) => {
    const filtered = MiniThisCarts.filter(item => item.name !== onlyCard.name);
    setMiniThisCarts(filtered);
    setShopNow(prev => prev - 1); 
  }

  const handleCheckout = () => {
    setMiniThisCarts([]);   
    setShopNow(0);      
    alert("Checkout successful! Cart has been cleared."); 
  }

 
  const total = MiniThisCarts
    .reduce((acc, item) => acc + Number(item.price), 0)
    .toFixed(2);

  return (
    <section>
      <div>
        <div className='flex'>
          <h1 className='text-xl font-bold'>Your Cart</h1>
        </div>

        <div className='flex flex-col gap-4 mt-4'>
          {MiniThisCarts.map((onlyCard, index) => (
            <div key={index} className='flex items-center justify-between p-4 rounded border shadow-sm'>
              
              <div className='flex gap-4 items-center'>
                <img src={onlyCard.img} alt="" className='w-16 h-16 rounded-full p-2 shadow shadow-amber-400'/>
                <div>
                  <h1 className='text-lg font-semibold'>{onlyCard.name}</h1>
                  <p className='text-gray-500'>${Number(onlyCard.price).toFixed(2)}</p>
                </div>
              </div>

              <div>
                <button onClick={() => handleDeleteCart(onlyCard)}>
                  <h1 className='text-red-500 text-sm'>Remove</h1>
                </button>
              </div>

            </div>
          ))}
        </div>

        <div className='flex justify-between items-center mt-6'>
          <h1 className='text-gray-500 text-lg'>Total</h1>
          <p className='font-bold text-2xl'>${total}</p>
        </div>

        <div className="mt-6">
          <button 
            onClick={handleCheckout}
            className="btn text-sm p-2 text-white bg-gradient-to-r from-indigo-500 to-purple-500 btn-block rounded-full"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  )
};

export default MiniCart;