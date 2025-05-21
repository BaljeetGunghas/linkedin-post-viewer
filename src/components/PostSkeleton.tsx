import React from 'react';

const PostSkeleton = () => {
    return (
        <div className="p-4 max-w-2xl mx-auto border bg-white rounded-2xl animate-pulse space-y-3 shadow-sm">
           
            <div className='flex items-center space-x-3'>
                <div className="w-11 h-10 rounded-full bg-gray-300"></div>
                <div className="flex flex-col space-y-2 w-full">
                    <div className="h-4 bg-gray-300 rounded w-1/4"></div> 
                    <div className="h-3 bg-gray-200 rounded w-2/4"></div> 
                </div>
            </div>

            <div className="h-4 bg-gray-300 rounded w-1/4"></div> 
            <div className="h-3 bg-gray-200 rounded w-3/4"></div> 
            <div className="h-3 bg-gray-200 rounded w-5/6"></div> 
            <div className="h-3 bg-gray-200 rounded w-2/3"></div> 

            <div className="h-32 w-full bg-gray-300 rounded mt-2"></div>
        </div>
    );
};

export default PostSkeleton;
