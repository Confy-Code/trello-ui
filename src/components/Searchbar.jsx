import {Search} from 'lucide-react'

export default function Searchbar() {
    function handleFormData(formData){
        console.log(formData.get('Search'))
    }

    return (
        <form action={handleFormData} className="flex items-center ml-30">
            <Search className="mr-6 hover:bg-gray-600 p-0.3  hover:rounded-md hover:cursor-pointer absolute flex items-center md:ml-2 md:hover:bg-none " width="15px" color="white"/>
            <input 
                type="text"
                name="Search"
                placeholder="Search"
                className="hidden md:flex items-center pl-8 text-white border border-[#7e8188] bg-[#242528] hover:bg-[#2e2f33] w-180 h-8 rounded-lg"
            />

            <button className="ml-8 md:flex items-center justify-center font-semibold text-[#381f21] border-4 md:ml-4 border-[#669df1] bg-[#669df1] w-16 rounded-md hover:bg-[#7ea0ee] hover:cursor-pointer">
                Create
            </button>
        </form>
    )
}