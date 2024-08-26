import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const PostJob = () => {
    return (
        <div className='flex flex-col w-full'>

            <div className='flex flex-col w-full'>
                <Outlet/>
            </div>
            
            <Footer/>
        </div>
    )
}

export default PostJob