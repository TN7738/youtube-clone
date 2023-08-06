import React from 'react';
import useFormatNumber from '../utils/useFormatNumber';
import Moment from 'react-moment';
import 'moment-timezone';
import useTimestampGenerator from '../utils/useTimeStampGenerator';

const RecommendedVideoCard = ({thumbnail, title, channelTitle, viewCount, publishedAt, duration}) => {
    return (
        <div className='w-full shadow-lg rounded-l flex mb-2'>
            <div className='image-wrap relative w-full max-w-[40%] mr-2'>
                <img className='rounded-lg w-full' src={thumbnail} alt="video-thumbnail" />
                <span className='absolute px-1 py-[3px] text-white text-xs bg-black bg-opacity-80 bottom-1 right-1 rounded font-medium'>{useTimestampGenerator(duration)}</span>
            </div>
            <div className='w-full max-w-[60%]'>
                <p className='font-bold pb-1 text-sm line-clamp-2'>{title}</p>
                <p className='text-xs text-[#aaa]'>{channelTitle}</p>
                <p>
                    <span className='text-xs text-[#aaa]'>{useFormatNumber(viewCount)} views</span>
                    <span className='mx-1 text-xs text-[#aaa]'>•</span>
                    <span className='text-xs text-[#aaa]'><Moment fromNow>{publishedAt}</Moment></span>
                </p>
            </div>
        </div>
    )
}

export default RecommendedVideoCard