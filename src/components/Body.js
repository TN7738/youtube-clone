import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const Body = () => {
  return (
    <>
      <Header />
      <div className='flex h-[calc(100vh-56px)]'>
          <Sidebar />
          <Outlet />
      </div>
    </>
  )
}

export default Body