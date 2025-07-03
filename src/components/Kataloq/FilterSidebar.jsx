import React, { useState } from 'react';
import { Collapse, Checkbox, Slider } from 'antd';
import { LuPlus, LuMinus } from 'react-icons/lu';
import { IoMdCloseCircle } from "react-icons/io";
import '../../style/filterSidebar.css';

function FilterSidebar() {
    const [activeKeys, setActiveKeys] = useState(['1']);
    const [checkedList, setCheckedList] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 100]);
    // const [minMax , setMinMax] = useState([0, 5])

    // useEffect(()=>{
    //     const sortByProduct = data.sort((a,b) => a.price - b.price)
    //     const min = sortByProduct[0]?.price
    //     const max = sortByProduct.at[-1]?.price
    // }) 
    const languages = [
        {
            key: '1',
            label: (
                <div className="flex items-center gap-2">
                    <h3 className="text-[16px] font-semibold">
                        Dil {checkedList.length > 0 && `(${checkedList.length})`}
                    </h3>
                    {checkedList.length > 0 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setCheckedList([]);
                            }}
                            title="Hamısını sil"
                        >
                            <IoMdCloseCircle className='text-[#EF3441]' />
                        </button>
                    )}
                </div>
            ),
            children: (
                <Checkbox.Group
                    style={{ display: 'flex', flexDirection: 'column' }}
                    value={checkedList}
                    onChange={(checkedValues) => {
                        setCheckedList(checkedValues);
                        console.log('Checked languages:', checkedValues);
                    }}
                >
                    <Checkbox value="aze" className="uppercase mb-1 custom-checkbox nunito-font font-light">aze</Checkbox>
                    <Checkbox value="eng" className="uppercase mb-1 custom-checkbox nunito-font font-light">eng</Checkbox>
                    <Checkbox value="fra" className="uppercase mb-1 custom-checkbox nunito-font font-light">fra</Checkbox>
                    <Checkbox value="rus" className="uppercase mb-1 custom-checkbox nunito-font font-light">rus</Checkbox>
                    <Checkbox value="rus/eng" className="uppercase mb-1 custom-checkbox nunito-font font-light">rus/eng</Checkbox>
                    <Checkbox value="tur" className="uppercase mb-1 custom-checkbox nunito-font font-light">tur</Checkbox>
                </Checkbox.Group>
            ),
        },
    ];

    const price = [
        {
            key: '2',
            label: <h3 className="text-[16px] nunito-font font-semibold">Qiymət</h3>,
            children: (
                <div className="px-2 py-1">

                    <div className="flex items-center justify-between mb-4">
                        {/* price qutulari */}
                        <div className="flex items-center gap-1 border border-[#E1E1E1] hover:border-[#EF3441] transition duration-300 rounded-md px-2 py-2 w-[45%]">
                            <input
                                type="number"
                                min={0}
                                max={priceRange[1]}
                                value={priceRange[0]}
                                className="w-full outline-none text-sm"
                            />
                            <span className="text-xs text-[#666]">₼</span>
                        </div>

                        <span className="text-[#666] text-sm">–</span>

                        <div className="flex items-center gap-1 border border-[#E1E1E1] hover:border-[#EF3441] transition duration-300 rounded-md px-2 py-2 w-[45%]">
                            <input
                                type="number"
                                min={priceRange[0]}
                                max={100}
                                value={priceRange[1]}
                                className="w-full outline-none text-sm"
                            />
                            <span className="text-xs text-[#666]">₼</span>
                        </div>
                    </div>

                    <Slider
                        range={{ draggableTrack: true }}
                        min={0}
                        max={100}
                        value={priceRange}
                        onChange={setPriceRange}
                    />

                    <div className="flex justify-between nunito-font text-[11px] text-[#909598] mt-2">
                        <span>0₼</span>
                        <span>100₼</span>
                    </div>
                </div>
            ),
        },
    ];


    const customExpandIcon = ({ isActive }) =>
        isActive ? (
            <LuMinus style={{ fontSize: 23, color: '#A2A2A2' }} />
        ) : (
            <LuPlus style={{ fontSize: 23, color: '#A2A2A2' }} />
        );

    return (
        <div className="nunito-font border border-[#EEEEEE] rounded-2xl p-3">
            <h3 className="text-[16px] font-semibold">Filterlər</h3>
            <div className="bg-[#eee] h-[1px] w-full mt-5"></div>

            <Collapse
                activeKey={activeKeys}
                onChange={(keys) => setActiveKeys(keys)}
                ghost
                expandIcon={customExpandIcon}
                expandIconPosition="right"
                items={languages}
            />

            <div className="bg-[#eee] h-[1px] w-full mb-5"></div>

            <Collapse
                activeKey={activeKeys}
                onChange={(keys) => setActiveKeys(keys)}
                ghost
                expandIcon={customExpandIcon}
                expandIconPosition="right"
                items={price}
            />
        </div>
    );
}

export default FilterSidebar;
