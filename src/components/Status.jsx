import { useQuery } from "@tanstack/react-query"
import Avt from "./Avt"
import ImgPost from "./ImgPost"

import { rates } from "./data"
import { fetchPost } from "../api/api"

export default function Status() {

    const { data: postData, isLoading } = useQuery({
        queryKey: ["Posts"],
        queryFn: fetchPost,
    })

    console.log(postData);
    return (
        <div className="flex w-full flex-col">
            {isLoading && <p>...Loading...</p>}
            {postData?.map((item) => (
                <div className="flex gap-3 flex-col mb-5 bg-slate-50 shadow-lg p-5" key={item.id}>
                    <div className="flex items-center gap-3">
                        <Avt src={item.user.img}></Avt>
                        <p className="font-semibold text-xl">{item.user.name}</p>
                    </div>
                    <p className="text-lg">{item.content}</p>
                    <div className="w-90% h-[35vh] flex justify-center">
                        <ImgPost src={item.img}></ImgPost>
                    </div>

                </div>
            ))}

            {/* {rates.map((item) => (
                <div className="flex gap-2 p-4 rounded-xl mb-5 bg-slate-50 border-2" key={item.id}>
                    <Avt src={item.img}></Avt>
                    <div className="flex flex-col p-1">
                        <p className="font-bold text-lg">{item.name}</p>
                        <div className="flex gap-2 mb-5 un">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <p className="font-medium">{item.rates} ratings</p>
                        </div>
                        <div className=" gap-2 text-xl">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 inline mr-2  ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                            </svg>
                            <p className=" inline font-medium">{item.des}</p>
                        </div>
                    </div>
                </div>
            ))} */}
        </div>
    )
}