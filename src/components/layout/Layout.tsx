'use client'
import React from 'react';
import { Box } from '@radix-ui/themes';
import Header from './Header';

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
    <Box className='w-full'>
      <Header />
      {children}
    </Box>
  )
}

export default Layout;