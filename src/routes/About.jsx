import React, { useRef, useState } from 'react';
import { login } from '../api/Service';

import axios from 'axios';
export default function About() {

    // const email = useRef(null);
    // const password = useRef(null);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");



    const handleLogin = async () => {
        let res = await login(email, password)
        // console.log(email);
        // console.log(password);
        console.log(res);
    }


    return (
        <div className="flex justify-center">
            <div className="pt-60 flex justify-center flex-col items-center w-1/2">
                <form className='flex flex-col gap-4 w-1/2' action="">
                    <label className='text-lg font-bold text-slate-500' htmlFor="InputEmail">Email</label>
                    <input className='border-2 border-sky-300 rounded-md w-full p-4 focus:outline-sky-600 text-slate-600'
                        id='InputEmail' value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Email' />
                    <label className='text-lg font-bold text-slate-500' htmlFor="InputPassword">Password</label>
                    <input className='border-2 border-sky-300 rounded-md w-full p-4 focus:outline-sky-600 text-slate-600'
                        id='InputPassword' value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Password' />
                </form>
                <button className='text-lg font-bold text-slate-200 mt-4 p-4 bg-sky-600 rounded-lg hover hover:bg-sky-800 ' onClick={handleLogin} >Sign in</button>
                {/* password.current.value */}
            </div>
        </div>
    )
}
// http://camenryder.xyz/auth/login

