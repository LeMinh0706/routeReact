import { Link } from "react-router-dom"
import { navLinks } from "../constant"

//import icons
import { ImHome } from "react-icons/im";

import { ImNewspaper } from "react-icons/im";
import Icon from "./Icon";
import SearchBar from "./SearchBar";

export default function Navbar() {
    return (
        <div className="relative" >
            <div className="flex bg-white flex-col justify-center items-center p-2 w-full fixed">


                <nav className="flex flex-col justify-center items-center laptop:w-1/2 Phone:w-full laptop:flex-row">
                    <ul className="flex gap-1 laptop:gap-10 Phone:justify-between laptop:w-3/4">
                        {navLinks.map((item) => (
                            <li key={item.id} className={`rounded-xl mt-4 ${item.color} border-b-2 hover:border-b-sky-400 Phone:w-[90px] laptop:w-32`} >
                                <Link className="flex flex-col items-center justify-center gap-2 transition-transform hover:scale-105 ease-in-out laptop:w-32 
                            h-24" to={item.id}>
                                    <Icon src={item.icon}></Icon>
                                    <p className="Phone:text-xs font-bold text-gray-800 laptop:text-base">
                                        {item.title.toUpperCase()}
                                    </p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <SearchBar></SearchBar>
                </nav>
            </div>
        </div >
    )
}