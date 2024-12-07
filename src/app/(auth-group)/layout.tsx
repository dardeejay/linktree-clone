import Sidebar from '@/components/sidebar/sidebar';
import React from 'react'

const layout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='flex  min-h-screen'>
            <Sidebar />
            <main>{children}</main>
        </div>
    )
}

export default layout
