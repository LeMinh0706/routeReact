import Profile from "../components/Profile";

export default function Users() {
    return (
        <div className="flex justify-center items-center">
            <div className="flex Phone:w-[95%] laptop:w-1/2 laptop:pt-32 items-center pt-60 justify-center">
                <Profile></Profile>
            </div>
        </div>
    )
}