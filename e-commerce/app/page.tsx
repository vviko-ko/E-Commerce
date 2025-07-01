// app/page.tsx
'use client';

import React from 'react';
import Navbar from '@/components/navbar';
import Home from '@/components/home';
// import ShopPage from '@/components/shop';

const Page = () => {
  return (
    <div>
      <Navbar />
      <Home />
      {/* <ShopPage/> */}
    </div>
  );
};

export default Page;
