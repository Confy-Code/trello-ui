import {Search} from 'lucide-react'

export default function Searchbar() {
    return (
        <form className="flex items-center ml-30">
            <Search className="absolute flex items-center ml-2 " width="15px" color="white"/>
            <input 
                type="text"
                placeholder="Search"
                className="hidden lg:flex items-center pl-8 text-white border border-[#7e8188] w-180 h-8 rounded-lg"
            />
        </form>
    )
}