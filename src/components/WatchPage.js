import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Recommendations from './Recommendations';

const WatchPage = () => {
	
	const dispatch = useDispatch();
	const [searchParam] = useSearchParams();
	const isMenuOpen = useSelector(store => store.app.isMenuOpen);

	useEffect(() => {
		dispatch(closeMenu());
	}, []);
	
	return (
		<div className={isMenuOpen ? 'w-full max-w-[calc(100vw-227px)] flex justify-between px-12' : 'w-full max-w[100vw] flex justify-between px-12 pt-8'}>
			<div className='px-5 pr-0 w-full max-w-[73%] h-[calc(100vh-24%)]'>
				<iframe 
					width="100%" 
					height="100%" 
					src={"https://www.youtube.com/embed/" + searchParam.get('v')}
					title="YouTube video player" frameBorder="0" 
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
					allowFullScreen>
				</iframe>
			</div>
			<Recommendations/>
		</div>
	)
}

export default WatchPage