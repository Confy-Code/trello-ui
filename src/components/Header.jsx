import { LayoutGridCircles } from 'lucide-react';
import { Megaphone, Bell, CircleQuestionMark } from 'lucide-react';

import trelloLogo from '../assets/trello_logo.webp'
import Searchbar from '../components/Searchbar'
import FeatureIcon from '../components/FeatureIcon'

const icons = [
    {icon: Megaphone, label: "Share your thoughts on trello"}, 
    {icon: Bell, label: "Notifications"}, 
    {icon: CircleQuestionMark, label: "Information"}]

export default function Header() {
    let iconElement = icons.map((iconObj, index) => {
        return (
            <FeatureIcon key={index} icon={iconObj.icon} label={iconObj.label} />
        )
    })

    return (
        <header className="flex flex-row items-center sticky top-0 bg-[#1f1f21] gap-4 m-0 p-4 border-b border-[#434345] pb-2 pt-2 z-100">
            <div className="flex w-5 shrink-0 items-center hover:bg-gray-600 hover:cursor-pointer rounded-md">
                <LayoutGridCircles width="20px" color="white" />
            </div>

            <nav className="flex items-center gap-2 hover:bg-gray-600 hover:cursor-pointer p-1.5 rounded-md">
                <img className="block" width="20px" src={trelloLogo} alt="trelloLogo" />
                <span className="text-white text-[15px]">Trello</span>
            </nav>

            <Searchbar />

            <nav className="ml-6 gap-1 flex md:ml-30 items-center md:gap-3">
                { iconElement }
            </nav>

            <hr className="border-white bg-white"></hr>
        </header>
    )
}