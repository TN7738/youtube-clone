import React, { useState, useEffect } from 'react';
import useFetchVideos from '../utils/useFetchVideos';
import useShuffleVideos from '../utils/useShuffleVideos';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);
    const [progress, setProgress] = useState(20);
    const videosData = useShuffleVideos(useFetchVideos(YOUTUBE_VIDEOS_API));
    const shimmerTiles = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    useEffect(() => {
        setProgress(50);
        setTimeout(() => {
            setVideos(videosData);
        }, 150);
        setProgress(100);
    }, [videosData]);

    if(videos.length === 0){
        return (
            <>
                <LoadingBar
                    color='#FF0000'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                    className='z-20'
                />
                <div className='flex flex-wrap gap-x-3.5 gap-y-4'>
                    {
                        shimmerTiles.map(shimmer => {
                            return(
                                <div key={shimmer} className='w-[32.33%]'>
                                    <div className='bg-slate-600 rounded-lg w-full h-[226px]'></div>
                                    <p className='bg-slate-600 my-2 py-2 rounded-lg w-full'></p>
                                    <p className='bg-slate-600 py-2 mb-1 rounded-lg w-1/4'></p>
                                    <p className='bg-slate-600 py-2 rounded-lg w-2/4'></p>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
    }
    return (
        <div className='flex flex-wrap gap-x-3.5 gap-y-4 overflow-y-auto h-[88.3%]'>
            {
                videos.map(video => <Link to={'/watch?v=' + video.id} key={video.id} className='w-[32.33%]'><VideoCard thumbnail={video.snippet.thumbnails.medium.url} title={video.snippet.title} channelTitle={video.snippet.channelTitle} viewCount={video.statistics.viewCount} publishedAt={video.snippet.publishedAt} duration={video.contentDetails.duration} /></Link>)
            }
        </div>
    );
};

export default VideoContainer;