import React from 'react'
import TopButtons from './TopButtons'
import { useSelector } from 'react-redux';
import useFetchVideos from '../utils/useFetchVideos';
import { YOUTUBE_VIDEO_SEARCH_RESULTS_API, YOUTUBE_API_KEY } from '../utils/constants';
import { Link, useSearchParams } from 'react-router-dom';
import SuggestionVideoCard from './SuggestionVideoCard';

const SearchResultPage = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    const [searchParam] = useSearchParams();
    const searchQuery = searchParam.get('search_query');
    const endPoint = YOUTUBE_VIDEO_SEARCH_RESULTS_API + searchQuery + '&regionCode=US&key=' + YOUTUBE_API_KEY;
    const videos = useFetchVideos(endPoint);

    return (
        <div className={isMenuOpen ? 'ml-[2%] h-[calc(100vh-56px)] overflow-hidden w-[81.7%]' : 'ml-[2%] h-[calc(100vh-56px)] overflow-hidden w-[98%]'}>
                <TopButtons/>
                <div className='overflow-y-auto h-[88.3%]'>
                {
                    videos.map((video, i) => <Link to={'/watch?v=' + video.id.videoId} key={video.id.videoId + i} className='mb-5 block'><SuggestionVideoCard thumbnail={video.snippet.thumbnails.medium.url} title={video.snippet.title} channelTitle={video.snippet.channelTitle} publishedAt={video.snippet.publishedAt} description={video.snippet.description} /></Link>)
                }
            </div>
        </div>
    )
}

export default SearchResultPage