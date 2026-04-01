import React from 'react';

const MiniCart = ({MiniThisCarts}) => {
    console.log(MiniThisCarts, "Hello Labib");
    return (
        <section>
            <div>
                {
                    MiniThisCarts.map((onlyCard, index) => {
                        return <div key={index}>
                            

                        </div>
                    })
                }
            </div>
        </section>
    )
};

export default MiniCart;