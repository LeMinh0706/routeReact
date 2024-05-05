import { useQuery } from "@tanstack/react-query"
import Avatar from "./Avatar"
import { rates } from "./data"
import { fetchUser } from "../api/api"

export default function Profile() {

    const { data: userData, isLoading } = useQuery({
        queryKey: ["User"],
        queryFn: fetchUser,
    })
    console.log(userData);

    return (
        <div className="mt-5 flex flex-wrap laptop:w-[90%] gap-4">
            {isLoading && <p>Loading...</p>}
            {userData?.map((item) => (
                <div className="flex flex-col items-center justify-around w-[150px] h-[200px] bg-[#fdfdfd] border-blue-950 border rounded-lg" key={item.id}>
                    <Avatar src={item.img}></Avatar>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                </div>
            ))}
            {/* <div className="flex flex-wrap w-full  laptop:w-[90%] items-center ">
                {rates.map((item) => (
                    <div key={item.id} className="flex gap-2 flex-col items-center rounded-lg border-[1px] border-black p-5 bg-slate-600 m-4 flex-wrap">
                        <Avt src={item.img}></Avt>
                        <div className="">
                            <p className="text-xl font-bold text-white">{item.name}</p>

                        </div>
                        <div className="flex gap-2 mb-5 un">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-white w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                            <p className="font-medium text-white">{item.rates} ratings</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    )
}