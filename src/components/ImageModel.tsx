"use client";

import Image from 'next/image';
import React from 'react'
import { IoCloseCircleOutline } from 'react-icons/io5';

interface ImageModalProps {
    imageUrl: string;
    setShowModal: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, setShowModal }) => {
    return (
        <div
            className="fixed inset-0 flex justify-center bg-[#000000b7] bg-opacity-40 z-50 items-center"
            onClick={() => setShowModal()}
        >
            <div
                className="relative  shadow-lg p-3 max-sm:px-1 w-full max-w-5xl max-sm:w-11/12 h-4/5 top-8 max-sm:h-fit max-sm:top-0 md:h-fit"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={() => setShowModal()}
                    className="absolute h-8 w-8 bg-linkPostbg cursor-pointer text-3xl top-2 right-2 text-black font-bold flex justify-center items-center rounded-full p-0 hover:text-red-500"
                >
                    <IoCloseCircleOutline />
                </button>
                <div className='flex items-center justify-center h-full'>
                    <Image src={imageUrl} alt="Preview" className="max-w-full object-contain" width={400} height={400} />
                </div>
            </div>
        </div>
    )
}

export default ImageModal
