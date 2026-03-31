import React from 'react';

import CardtFix from '../Ui/CardtFix';

const CardStor = ({CardInfo}) => {
    console.log(CardInfo);
    return (

 <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
           {
            CardInfo.map((onlyCard) => {
                return   (
                    <CardtFix onlyCard={onlyCard}></CardtFix>
                )     
            })
        }



 </div>
    );
};

export default CardStor;