import React from 'react';
import BasketItemMobile from './BasketItemMobile';

function BasketPageMobile({ basket, deleteBasket, updateItemCount }) {
    return (
        <div>
            {basket?.length === 0 ? (
                <div className="text-center text-[#767676] text-[16px] my-10 nunito-font font-light">
                    Səbətiniz boşdur
                </div>
            ) : (
                <div>
                    {basket.map(item => (
                        <BasketItemMobile
                            key={item.id}
                            item={item}
                            deleteBasket={deleteBasket}
                            updateItemCount={updateItemCount}

                        />
                    ))}
                </div>
            )}
            <div>
                {basket?.length > 0 && (
                    <div className='border-[1px] mt-10 rounded-2xl border-[#E1E1E1] py-6 px-6 flex justify-end nunito-font'>
                        <div className='flex items-center gap-20'>
                            <h3 className='text-[#a2a2a2] text-[20px] font-semibold'>Cəm məbləğ (₼)</h3>
                            <h2 className='text-[20px] text-[#1e293b] font-semibold'> totalPriceofbasket ₼</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BasketPageMobile;
