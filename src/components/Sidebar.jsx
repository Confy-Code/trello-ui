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
                return <Boards />
            case 'templates':
                return <Templates />
            case 'home':
                return <Home />
            default:
                return <Boards />
        }
    }
// COLOR = hover:bg-[#1c2b42]   
    return (
        <>
            <div className="flex min-w-full">
                <aside className="hidden md:flex flex-col md:fixed top-16 h-screen  text-[#adaeb0] font-semibold gap-1 pl-16 py-12">
                    <div role="button" onClick={() => setActiveTab('boards')} 
                    className={`${activeTab == "boards" ? 'bg-[#20324e] hover:bg-[#20324e] rounded-md' : 'bg-none hover:bg-[rgb(44,44,46)] hover:rounded-md'}
                    flex gap-2 w-60 p-1.5 hover:cursor-pointer`}>
                        <Table width="15px" /><span>Boards</span>
                    </div>

                    <div role="button" onClick={() => setActiveTab('templates')} 
                    className={`${activeTab == "templates" ? 'bg-[#20324e] hover:bg-[#20324e] rounded-md' : 'bg-none hover:bg-[rgb(44,44,46)] hover:rounded-md'}
                    flex gap-2 w-60 p-1.5 hover:cursor-pointer`}>
                        <SquareKanbanPlus width="15px" /><span>Templates</span>
                    </div>

                    <div role="button" onClick={() => setActiveTab('home')} 
                    className={`${activeTab == "home" ? 'bg-[#20324e] hover:bg-[#20324e] rounded-md' : 'bg-none hover:bg-[rgb(44,44,46)] hover:rounded-md'}
                    flex gap-2  w-60 p-1.5 hover:cursor-pointer`}>
                        <Activity width="15px" /><span>Home</span>
                    </div>

                    <hr className="bg-white border-gray-600 w-60"></hr>

                    <span className="font-semibold text-[14px] ml-4">Workspaces</span>
                </aside>
            </div>

            <main className="w-full m-6 flex pt-14 md:ml-100 md:w-200">
                    {renderTab()}
            </main>
        </>
    )
}