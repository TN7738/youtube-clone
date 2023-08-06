import React, { useState } from 'react';
import { topButtonsList } from '../utils/topButtonsList';

const TopButtons = () => {
    const [topBtnsList, setTopBtnsList] = useState(topButtonsList);
    return (
        <div className='pt-4 pb-6 flex gap-x-3.5 top-btn-list'>
            {
                topBtnsList.map((topBtn, i) => <button className='rounded-lg capitalize bg-opacity-10 bg-white py-2 px-3 text-sm' key={topBtn + i}>{topBtn}</button>)
            }
        </div>
    );
};

export default TopButtons;