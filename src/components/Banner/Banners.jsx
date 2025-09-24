import React from 'react';
import './Banners.css'

const Banners = () => {
    return (
        <div>
            <div className="container mx-auto py-[80px] px-[1rem]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="blue-effect p-4 rounded min-h-[250px] banner-card-item">
                        <div className='text-[24px]'>
                            In-Progress
                        </div>
                        <div className='text-[60px] font-bold'>
                            0
                        </div>
                    </div>
                    <div className="green-effect p-4 rounded min-h-[250px] banner-card-item">
                        <div className='text-[24px]'>
                            Resolved
                        </div>
                        <div className='text-[60px] font-bold'>
                            0
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banners;