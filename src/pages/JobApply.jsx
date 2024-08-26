import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const JobApply = () => {
    return (
        <div className='flex flex-col'>

            <div>
                <Outlet />
            </div>

            <Footer/>
        </div>
    );
};

export default JobApply;
