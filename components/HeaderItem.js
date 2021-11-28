
const HeaderItem = ({title, Icon}) => {
    return (
        <div className='flex flex-col group  items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
            <Icon className="h-8 mb-1 group-hover:animate-bounce text-white"/>
            <p className="opacity-0  group-hover:opacity-100 tracking-widest text-white">{title}</p>
        </div>
    )
}

export default HeaderItem
