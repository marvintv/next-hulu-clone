import Image from "next/image"
import HeaderItem from "./HeaderItem"
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'
const Header = () => {
    return (
        <header className="flex flex-col m-5 sm:flex-row justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl " >
                <HeaderItem title='HOME' Icon={HomeIcon}/>
                <HeaderItem title='TRENDING' Icon={LightningBoltIcon}/>
                <HeaderItem title='VERIFIED' Icon={BadgeCheckIcon}/>
                <HeaderItem title='COLLECTIONS' Icon={CollectionIcon}/>
                <HeaderItem title='SEARCH' Icon={SearchIcon}/>
                <HeaderItem title='AMOUNT' Icon={UserIcon}/>
         
            </div>
            {/* lazy loading render images on screen*/}
            <Image className= "object-contain " alt="hulu-logo"
             src="https://i.imgur.com/oppjjeX.png" height={100} width={200}/>

             
        </header>
    )
}

export default Header
