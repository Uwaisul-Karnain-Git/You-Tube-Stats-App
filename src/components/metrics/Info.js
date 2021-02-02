import React from 'react';

function Info(props) {
    return (
        <div className='w-1/2 px-2 rounded overfloww-hidden shadow-lg'>
            <div className='px-6 y-4'>
                <div className='font-bold text-xl mb-2'> Info </div>
                
                <div>
                    <strong>Channel Title: </strong>
                    <span className='text-gray-700 text-base'>{props.channelTitle}</span>
                </div>
                <div>
                    <strong>View Title: </strong>
                    <span className='text-gray-700 text-base'>{props.title}</span>
                </div>
                <div>
                    <strong>View Count: </strong>
                    <span className='text-gray-700 text-base'>{props.views}</span>
                </div>
            </div>
        </div>
    )
}

export default Info;

