
export default function SearchBar() {
    return (
        <div className="flex items-center justify-center p-5 w-full">
            <form className="flex flex-col w-full laptop:w-1/2 items-center" action="">
                <label className="font-mono font-bold text-lg" htmlFor="">Can't search</label>
                <div className="flex gap-1">
                    <input className="bg-[#e9fcff] p-2 laptop:px-4 font-bold text-blue-950 text-lg rounded-lg " type="text" placeholder="Searching" />
                    <button className="laptop:px-3 Phone:px-2 bg-blue-800 text-white font-bold flex items-center gap-1 Phone:font-medium Phone:text-sm Phone:w-[100px] laptop:w-32 laptop:text-lg laptop:gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                        Go Now
                    </button>
                </div>
            </form>
        </div>
    )
}