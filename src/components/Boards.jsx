import HomeCard from './HomeCard'
import recentlyViewedData from '../data';
import trelloBg from '../assets/trello_bg.webp'

import { Clock4, Table, User, Settings } from 'lucide-react';

export default function Boards() {

    let recentlyViewedElements = recentlyViewedData.map((name_, index) => {
        return (
            <HomeCard key={index} name={name_} />
        )
    })

    return (
        <main className="pb-12">
            <div className="flex gap-4 text-[#cecfd2] font-bold text-lg">
                <Clock4 color="white" /><span >Recently viewed</span>
            </div>

            <section className="flex flex-wrap mt-4 gap-4">
                {recentlyViewedElements}
            </section>

            <div className="mt-12">
                <span className="text-[#a9abaf] font-semibold">YOUR WORKSPACES</span>
                <div className="flex mt-4 gap-54">
                    <div className="flex ml-0">
                        <span className="text-[#a2a4a7] font-bold">ISINGIZWE Jean Confiance's workspace</span>
                    </div>

                    <section className="flex text-[#c5c6c9] font-semibold gap-4 mb-2 mt-2">
                        <div className="flex gap-2 hover:bg-gray-600 bg-[#2c2c2e] p-1.5 rounded-md hover:cursor-pointer">
                            <Table color="#c5c6c9" width="20px" /><span>Boards</span>
                        </div>

                        <div className="flex gap-2 hover:bg-gray-600 bg-[#2c2c2e] p-1.5 rounded-md hover:cursor-pointer">
                            <User color="#c5c6c9" width="20px" /><span>Members</span>
                        </div>

                        <div className="flex gap-2 hover:bg-gray-600 bg-[#2c2c2e] p-1.5 rounded-md hover:cursor-pointer">
                            <Settings color="#c5c6c9" width="20px" /><span>Settings</span>
                        </div>
                    </section>
                </div>

                <section className="flex mt-4 gap-4 flex-wrap">
                    {recentlyViewedElements}
                    <div className="flex flex-col bg-[#2c2c2e] rounded-md w-60 h-30 text-center justify-center hover:cursor-pointer hover:bg-[#464647]">
                        <span className="text-[#9c9da1] font-medium p-1.5">Create new board</span>
                    </div>
                </section>


            </div>

            <div className="mt-12">
                <span className="text-[#a9abaf] font-semibold">GUEST WORKSPACES</span>
                <div className="flex ml-0">
                    <span className="text-[#a2a4a7] font-bold mt-4">Trello Workspace</span>
                </div>

                <section className="flex mt-4 gap-4 flex-wrap">
                    <div className="flex-col bg-[#1f1f21] rounded-md w-60 h-30 border-b border-black hover:cursor-pointer">
                        <img src={trelloBg} alt="Trello Background" className="flex w-full h-[70%] rounded-t-md"/>
                        <span className="text-[#aeafb2] font-medium p-1.5">Website Project Group 10</span>
                    </div>
                </section>
            </div>

            <button className="bg-[#1f1f21] text-[#8e8f93] font-semibold mt-8 border border-[#37373a] p-1.5 rounded-md hover:cursor-pointer hover:bg-[#2c2c2e]">
                View all closed boards</button>
        </main>
    )
}