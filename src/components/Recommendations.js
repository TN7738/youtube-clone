import React from 'react';
import useFetchVideos from '../utils/useFetchVideos';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import RecommendedVideoCard from './RecommendedVideoCard';
import { Link } from 'react-router-dom';

const Recommendations = () => {

    const videos = useFetchVideos(YOUTUBE_VIDEOS_API);

    return (
        <div className='px-5 pl-2 w-full max-w-[26%] h-[calc(100vh-24%)] overflow-y-auto'>
            {videos && videos.map(video => <Link to={'/watch?v=' + video.id} key={video.id} className=''><RecommendedVideoCard thumbnail={video.snippet.thumbnails.medium.url} title={video.snippet.title} channelTitle={video.snippet.channelTitle} viewCount={video.statistics.viewCount} publishedAt={video.snippet.publishedAt} duration={video.contentDetails.duration}></RecommendedVideoCard></Link>)}
        </div>
    );
}

export default Recommendations;