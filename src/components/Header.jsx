import { LayoutGridCircles } from 'lucide-react';
import { Megaphone } from 'lucide-react';
import { Bell } from 'lucide-react';
import { CircleQuestionMark } from 'lucide-react';

import trelloLogo from '../assets/trello_logo.webp'
import Searchbar from '../components/Searchbar'

export default function Header() {
    return (
        <header className="flex flex-row items-center gap-4 m-0 p-4 border-b border-[#434345] pb-2 pt-2">
            <div className="flex w-5 shrink-0 items-center">
                <LayoutGridCircles width="20px" color="white" />
            </div>

            <nav className="flex items-center gap-2 hover:bg-green-400">
                <img className="block" width="20px" src={trelloLogo} alt="trelloLogo" />
                <span className="text-white text-[15px] mr-30">Trello</span>
            </nav>

            <Searchbar />

            <button className="flex items-center justify-center font-semibold text-[#381f21] border-3 border-[#669df1] bg-[#669df1] w-16 rounded-md hover:bg-[#6686D1]">
                Create
            </button>

            <nav className="flex ml-30 items-center gap-6">
                <Megaphone color="#97989c" width="20px"/>
                <Bell color="#97989c" width="20px"/>
                <CircleQuestionMark color="#97989c" width="20px"/>
            </nav>

            <hr className="border-white bg-white"></hr>
        </header>

    )
}