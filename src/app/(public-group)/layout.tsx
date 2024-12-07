import Navbar from '@/components/navbar/navbar';
import Sidebar from '@/components/sidebar/sidebar';
import React from 'react'

const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='  min-h-screen'>
            <Navbar/>
            <main>{children}</main>
        </div>
    )
}

export default layout
