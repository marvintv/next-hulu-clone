/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image"
import { ThumbUpIcon, ArrowCircleUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";
// eslint-disable-next-line react/display-name
const Thumbnail = forwardRef(({result}, ref) => {

    const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return (
        
        <div ref={ref} className="group cursor-pointer p-2 transition-all duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image

                layout='responsive'
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` || 
                    `${BASE_URL}${result.poster_path}`
                }

                height={1080}
                width={1920}

            />
            <div className="p-2 ">
                <p className="truncate max-w-md">
                    {result.overview}
                </p>
                <h2 className="mt-1 text-white text-2xl transition-all duration-100 ease-in-ease-out group-hover:font-bold">
                    {result.original_title || result.title || result.original_name}
                </h2>
                
                <p  className="flex items-center opacity-0 group-hover:opacity-100">
                    {result.release_date || result.first_air_date} {' '}

                    <ThumbUpIcon className='h-5 mx-2 text-white z-10' /> {result.vote_count}
                    <ArrowCircleUpIcon className='h-5 mx-2 text-white z-10' /> {result.vote_average}/10
                </p>
            </div>
        </div>
    )
})

export default Thumbnail
