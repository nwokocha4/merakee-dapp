import React from 'react';
import map from '../../asset/map.png'

export const Map = () => {
    
    return(
        <div className='h-full sm:h-96 justify-center content-center  bg-gradient-to-r from-indigo-800 to-pink-400 via-purple-800'>
            
            <div className='md:h-full pb-16 '>
            <img src={map} className=' justify-center mx-auto h-80 w-3/4 bg-sky-500 ' alt='map' />
            
            </div>
        </div>
    )
}