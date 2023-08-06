import React from 'react';
import useFetchVideos from '../utils/useFetchVideos';
import useShuffleVideos from '../utils/useShuffleVideos';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import RecommendedVideoCard from './RecommendedVideoCard';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Recommendations = () => {

    const [searchParam] = useSearchParams();
    const currVideoId = searchParam.get('v');

    const videos = useShuffleVideos(useFetchVideos(YOUTUBE_VIDEOS_API)).filter(video => video.id !== currVideoId);

    return (
        <div className='px-5 pl-2 w-full max-w-[26%] h-[calc(100vh-24%)] overflow-y-auto'>
            {videos && videos.map(video => <Link to={'/watch?v=' + video.id} key={video.id} className=''><RecommendedVideoCard thumbnail={video.snippet.thumbnails.medium.url} title={video.snippet.title} channelTitle={video.snippet.channelTitle} viewCount={video.statistics.viewCount} publishedAt={video.snippet.publishedAt} duration={video.contentDetails.duration}></RecommendedVideoCard></Link>)}
        </div>
    );
}

export default Recommendations;