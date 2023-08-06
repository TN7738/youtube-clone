import React from 'react';
import Moment from 'react-moment';

const SuggestionVideoCard = ({thumbnail, title, channelTitle, viewCount, publishedAt, description}) => {
    return (
        <div className='w-full shadow-lg flex'>
            <div className='image-wrap relative w-[30%] mr-4'>
                <img className='rounded-lg w-full' src={thumbnail} alt="video-thumbnail" />
            </div>
            <div>
                <p className='font-bold py-2 text-lg'>{title}</p>
                <p className='text-sm text-[#aaa]'>{channelTitle}</p>
                <p className='text-sm text-[#aaa]'><Moment fromNow>{publishedAt}</Moment></p>
                <p className='text-sm text-[#aaa] pt-4'>{description}</p>
            </div>
        </div>
    )
}

export default SuggestionVideoCard