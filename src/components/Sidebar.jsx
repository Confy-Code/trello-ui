import { useState } from 'react'

import Boards from './Boards'
import Templates from './Templates'
import Home from './Home'

import { Table, SquareKanbanPlus, Activity } from 'lucide-react'

export default function Sidebar() {
    const [activeTab, setActiveTab] = useState('boards')

    const renderTab = () => {
        switch(activeTab){
            case 'boards':
                return <Boards title="Boards | Trello" />
            case 'templates':
                return <Templates title="Templates | Trello"/>
            case 'home':
                return <Home title="Templates | Trello" />
            default:
                return <Boards title="Boards | Trello" />
        }
    }


    return (
        <div className="flex ">
            <aside className="flex flex-col sticky top-0 h-screen  text-[#adaeb0] font-semibold gap-3 pl-16 py-12">
                <div role="button" onClick={() => setActiveTab('boards')} className="flex gap-2 hover:bg-[#1c2b42] w-60 p-1.5 hover:rounded-md hover:cursor-pointer ">
                    <Table width="15px" /><span>Boards</span>
                </div>
                <div role="button" onClick={() => setActiveTab('templates')} className="flex gap-2 hover:bg-[#1c2b42] w-60 p-1.5 hover:rounded-md hover:cursor-pointer">
                    <SquareKanbanPlus width="15px" /><span>Templates</span>
                </div>
                <div role="button" onClick={() => setActiveTab('home')} className="flex gap-2 hover:bg-[#1c2b42] w-60 p-1.5 hover:rounded-md hover:cursor-pointer">
                    <Activity width="15px" /><span>Home</span>
                </div>

                <hr className="bg-white border-gray-600 w-60"></hr>

                <span className="font-semibold text-[14px] ml-4">Workspaces</span>
            </aside>
                
            <main className="flex pt-14 ml-24 w-200">
                {renderTab()}
            </main>
        </div>
    )
}