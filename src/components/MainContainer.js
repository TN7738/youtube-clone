import React from 'react'
import TopButtons from './TopButtons';
import VideoContainer from './VideoContainer';
import { useSelector } from 'react-redux';

const MainContainer = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    return (
        <div className={isMenuOpen ? 'ml-[2%] h-[calc(100vh-56px)] overflow-hidden w-[81.7%]' : 'ml-[2%] h-[calc(100vh-56px)] overflow-hidden w-[98%]'}>
            <TopButtons/>
            <VideoContainer/>
        </div>
    );
};

export default MainContainer;