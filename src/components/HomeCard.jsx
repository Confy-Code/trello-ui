import { useState } from 'react'
import trelloBg from '../assets/trello_bg.webp';
import { Star } from 'lucide-react'

import BoardKanban from './BoardKanban'

export default function HomeCard(props) {
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)

    function renderStar(){
        return isHovered ? ( 
            <div className="absolute z-50 -ml-12 mt-2 overflow-visible bg-[#292931] p-1.5 rounded-lg">
                <Star color="white" width="16px"/>
            </div>): null
    }

    return (
        <>
            <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsClicked(true)}
            className="relative flex-col bg-[#1f1f21] rounded-md w-60 h-30 border-b border-black hover:cursor-pointer hover:opacity-70">
                <img src={trelloBg} alt="Trello Background" className="flex w-full h-[70%] rounded-t-md hover:bg-[#1f1f21]"/>
                <span className="text-[#aeafb2] font-medium p-1.5">{props.name}</span>
            </div>

            <div>
                {renderStar()}
            </div>

            {/* isClicked ? <BoardKanban state={isClicked} /> */}
        </>
    )
}