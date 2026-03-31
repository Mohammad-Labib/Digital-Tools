import React, { use } from 'react';
import CardStor from '../CarddStor/CardStor';

const Cards = ({productPromise}) => {
    // console.log(productPromise);

    const CardInfo = use(productPromise);
    console.log(CardInfo);
    return (
        <div className='container mx-auto'>
            <h1>Hello Labib:{CardInfo.length}</h1>

            <CardStor CardInfo={CardInfo}></CardStor>
        </div>
    );
};

export default Cards;