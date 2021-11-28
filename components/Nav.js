/* eslint-disable react/jsx-key */
import { useRouter } from "next/dist/client/router"
import requests from "../utils/requests"

const Nav = () => {

    const router = useRouter();
    return (
        <nav className="relative">
            <div className="text-white flex px-10 justify-between sm:px-20 text-2xl whitespace-nowrap
                space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
                    {/* destructur objects, each fetch is a key */}
                {Object.entries(requests).map(([key, { title , url } ]) => (

                    <h2 key={key}
                            onClick={() => router.push(`?genre=${key}`)}
                            className='last:pr-24   cursor-pointer transition transform duration-100 
                                        hover:scale-125 active:text-red-500'>
                                
                                {title}

                                </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}

export default Nav
