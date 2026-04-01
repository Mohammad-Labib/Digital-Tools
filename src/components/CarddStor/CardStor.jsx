import React from 'react';

import CardtFix from '../Ui/CardtFix';

const CardStor = ({CardInfo, setShopNow, setMiniThisCarts, MiniThisCarts}) => {
    console.log(CardInfo);
    return (

 <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
           {
            CardInfo.map((onlyCard, index) => {
                return   (
                    <CardtFix onlyCard={onlyCard}
                    key={index}
                    setShopNow={setShopNow}
                    setMiniThisCarts={setMiniThisCarts}
                    MiniThisCarts={MiniThisCarts}
                    >

                    </CardtFix>
                )     
            })
        }



 </div>
    );
};

export default CardStor;