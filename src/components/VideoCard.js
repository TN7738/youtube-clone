import React from 'react';
import useFormatNumber from '../utils/useFormatNumber';
import Moment from 'react-moment';
import 'moment-timezone';
import useTimestampGenerator from '../utils/useTimeStampGenerator';

const VideoCard = ({thumbnail, title, channelTitle, viewCount, publishedAt, duration}) => {

    return (
        <div className='w-full shadow-lg rounded-l'>
            <div className='image-wrap relative'>
                <img className='rounded-lg w-full' src={thumbnail} alt="video-thumbnail" />
                <span className='absolute px-1 py-[3px] text-white text-xs bg-black bg-opacity-80 bottom-1 right-1 rounded font-medium'>{useTimestampGenerator(duration)}</span>
            </div>
            <p className='font-bold py-2 line-clamp-2'>{title}</p>
            <p className='text-sm text-[#aaa]'>{channelTitle}</p>
            <p>
                <span className='text-sm text-[#aaa]'>{useFormatNumber(viewCount)} views</span>
                <span className='mx-1 text-sm text-[#aaa]'>•</span>
                <span className='text-sm text-[#aaa]'><Moment fromNow>{publishedAt}</Moment></span>
            </p>
        </div>
    )
}

export default VideoCard