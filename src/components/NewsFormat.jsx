import React from 'react';
import altImage from '../asset/AltImage.png';

const NewsFormat = ({ source, author, title, description, imageUrl, newsUrl, date }) => {
    return (

        <div className='border border-slate-100 m-4 rounded-lg w-fit text-start shadow-lg shadow-slate-300 hover:scale-105 ease-in duration-500'>
            <div className='p-1 md:w-full sm:mb-0 mb-6 pt-0 px-0'>
                <div className='h-40 md:h-56 overflow-hidden'>
                    <img className='object-cover object-center h-full w-full rounded-t-lg' src={imageUrl} alt={altImage} />
                </div>
                <div className='px-5 mt-5'>
                    <small className='my-8 py-1 px-3 border bg-red-600 text-white text-xs font-semibold rounded-2xl'>{source}</small>
                    <h2 className='text-lg font-semibold text-gray-700 mt-2 pt-2 pb-1'>{title.substr(0, 70) + ' ...'}</h2>
                    <p className='text-sm md:text-base leading-relaxed mt-2'>{description.substr(0, 150) + ' ...'}</p>
                    <p className='mt-2 py-2 text-sm font-medium text-slate-500'>By {!author?"Unknown":author} on {new Date(date).toGMTString()}</p>
                    <a href={newsUrl} target='_blank' className='text-indigo-500 inline-flex items-center my-4 font-semibold border-b-2 border-indigo-500'>Read More</a>
                </div>
            </div>
        </div>
    )
};

export default NewsFormat;
