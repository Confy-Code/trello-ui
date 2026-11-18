import trelloBg from '../assets/trello_bg.webp';

export default function HomeCard(props) {
    return (
        <div className="flex-col bg-[#1f1f21] rounded-md w-60 h-30 border-b border-black hover:cursor-pointer">
            <img src={trelloBg} alt="Trello Background" className="flex w-full h-[70%] rounded-t-md"/>
            <span className="text-[#aeafb2] font-medium p-1.5">{props.name}</span>
        </div>
    )
}