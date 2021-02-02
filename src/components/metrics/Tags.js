import React from 'react';

function Tags(props) {
    let tags = props.tags.map(function(tag, i) {
        return <li key={tag.toString()}>- {tag}</li>
    })

    return (
        <div className='w-1/2 px-2 rounded overfloww-hidden shadow-lg'>
            <div className='px-6 y-4'>
                <div className='font-bold text-xl mb-2'> Tags </div>
                <div className='text-gray-700 text-base p-4'> {tags} </div>
            </div>
        </div>
    )
}

export default Tags;



