import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import travel from "../travel.json"

export default function Home() {


    return (
        <div className="flex justify-center">
            <div className="flex flex-col Phone:w-[95%] laptop:w-1/2 laptop:pt-32 items-center pt-64 justify-center">
                <Lottie className="laptop:w-[80%]" animationData={travel} />
                <Link to="../reviews">
                    <button className="bg-emerald-500 text-white p-4 text-xl font-bold rounded-xl border-2 border-white" >Get Start!</button>
                </Link>
            </div>
        </div>
    )
}