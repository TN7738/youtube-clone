import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(isMenuOpen){
        return (
            <div className='w-[15.2%] overflow-hidden h-[calc(100vh-56px)] hover:overflow-y-auto'>
                <div>
                    <ul className='py-3 px-4'>
                        <li className='p-2 rounded-lg bg-opacity-10 bg-white'><Link className='flex items-center w-full' to='/'><svg className='fill-[#f1f1f1]' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><g><path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path></g></svg><span className='font-medium pl-6'>Home</span></Link></li>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></svg><span className='font-medium pl-6'>Shorts</span></Link></li>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path></svg><span className='font-medium pl-6'>Subscriptions</span></Link></li>
                    </ul>
                    <p className='h-[1px] bg-opacity-20 bg-white'></p>
                    <ul className='py-3 px-4'>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m11 7 6 3.5-6 3.5V7zm7 13H4V6H3v15h15v-1zm3-2H6V3h15v15zM7 17h13V4H7v13z"></path></svg><span className='font-medium pl-6'>Library</span></Link></li>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg height="24" className='fill-[#f1f1f1]' viewBox="0 0 24 24" width="24" focusable="false"><g><path d="M14.97 16.95 10 13.87V7h2v5.76l4.03 2.49-1.06 1.7zM22 12c0 5.51-4.49 10-10 10S2 17.51 2 12h1c0 4.96 4.04 9 9 9s9-4.04 9-9-4.04-9-9-9C8.81 3 5.92 4.64 4.28 7.38c-.11.18-.22.37-.31.56L3.94 8H8v1H1.96V3h1v4.74c.04-.09.07-.17.11-.25.11-.22.23-.42.35-.63C5.22 3.86 8.51 2 12 2c5.51 0 10 4.49 10 10z"></path></g></svg><span className='font-medium pl-6'>History</span></Link></li>
                    </ul>
                    <p className='h-[1px] bg-opacity-20 bg-white'></p>
                    <div className='py-3 px-4'>
                        <p className='text-white py-1 px-3 text-sm'>Sign in to like videos, comment, and subscribe.</p>
                        <button className='flex border border-[#303030] rounded-full py-1 px-3 h-9 hover:bg-[#263850] mt-2 ml-2'>
                            <svg className='fill-[#3ea6ff]' height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1c4.96 0 9 4.04 9 9 0 1.42-.34 2.76-.93 3.96-1.53-1.72-3.98-2.89-7.38-3.03A3.996 3.996 0 0016 9c0-2.21-1.79-4-4-4S8 6.79 8 9c0 1.97 1.43 3.6 3.31 3.93-3.4.14-5.85 1.31-7.38 3.03C3.34 14.76 3 13.42 3 12c0-4.96 4.04-9 9-9zM9 9c0-1.65 1.35-3 3-3s3 1.35 3 3-1.35 3-3 3-3-1.35-3-3zm3 12c-3.16 0-5.94-1.64-7.55-4.12C6.01 14.93 8.61 13.9 12 13.9c3.39 0 5.99 1.03 7.55 2.98C17.94 19.36 15.16 21 12 21z"></path></svg>
                            <span className='text-[#3ea6ff] pl-2 text-sm font-medium'>Sign in</span>
                        </button>
                    </div>
                    <p className='h-[1px] bg-opacity-20 bg-white'></p>
                    <ul className='py-3 px-4'>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path></svg><span className='font-medium pl-6'>Trending</span></Link></li>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false" ><path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path></svg><span className='font-medium pl-6'>Music</span></Link></li>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path></svg><span className='font-medium pl-6'>Movies & TV</span></Link></li>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><g><path d="M14 12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM8.48 8.45l-.71-.7C6.68 8.83 6 10.34 6 12s.68 3.17 1.77 4.25l.71-.71C7.57 14.64 7 13.39 7 12s.57-2.64 1.48-3.55zm7.75-.7-.71.71c.91.9 1.48 2.15 1.48 3.54s-.57 2.64-1.48 3.55l.71.71C17.32 15.17 18 13.66 18 12s-.68-3.17-1.77-4.25zM5.65 5.63l-.7-.71C3.13 6.73 2 9.24 2 12s1.13 5.27 2.95 7.08l.71-.71C4.02 16.74 3 14.49 3 12s1.02-4.74 2.65-6.37zm13.4-.71-.71.71C19.98 7.26 21 9.51 21 12s-1.02 4.74-2.65 6.37l.71.71C20.87 17.27 22 14.76 22 12s-1.13-5.27-2.95-7.08z"></path></g></svg><span className='font-medium pl-6'>Live</span></Link></li>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path></svg><span className='font-medium pl-6'>Gaming</span></Link></li>
                        <li className='p-2 rounded-lg'><Link className='flex items-center w-full' to='/comingsoon'><svg className='fill-[#f1f1f1]' enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24" focusable="false"><path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path></svg><span className='font-medium pl-6'>News</span></Link></li>
                    </ul>
                </div>
            </div>
        )
    }
    else{
        return null;
    }
}

export default Sidebar