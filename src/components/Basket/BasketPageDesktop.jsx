import React from 'react';
import BasketItemDesktop from './BasketItemDesktop';

function BasketPageDesktop({ basket, deleteBasket, updateItemCount }) {

    const totalPriceOfBasket = basket.reduce((total, item) => {
        return total + item.discountedPrice * item.count;
    }, 0).toFixed(2);
    
    return (
        <div>
            {basket?.length === 0 ? (
                <div className="text-center text-[#767676] text-[16px] my-10 nunito-font font-light">
                    Səbətiniz boşdur
                </div>
            ) : (
                <>
                    <table className="w-full text-left">
                        <thead className="text-gray-500 border-b [border-color:#E1E1E1]">
                            <tr className='nunito-font text-[14px] text-[#767676]'>
                                <th className="p-3 font-light">Məhsul</th>
                                <th className="p-3 text-right font-light">Qiyməti</th>
                                <th className="p-3 text-center font-light">Say</th>
                                <th className="p-3 text-right font-light">Cəm (₼)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {basket.map(item => (
                                <BasketItemDesktop
                                    key={item.id}
                                    item={item}
                                    deleteBasket={deleteBasket}
                                    updateItemCount={updateItemCount}
                                />
                            ))}
                        </tbody>
                    </table>
                </>
            )}
            <div>
                {basket?.length > 0 && (
                    <div className='border-[1px] mt-10 rounded-2xl border-[#E1E1E1] py-6 px-6 flex justify-end nunito-font'>
                        <div className='flex items-center gap-20'>
                            <h3 className='text-[#a2a2a2] text-[20px] font-semibold'>Cəm məbləğ (₼)</h3>
                            <h2 className='text-[20px] text-[#1e293b] font-semibold'> {totalPriceOfBasket} ₼</h2>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default BasketPageDesktop;

