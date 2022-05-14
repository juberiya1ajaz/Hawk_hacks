import React, { useState } from 'react'
import LoginImg from "../assets/login.svg"
import DeSOImg from "../assets/deso.svg"
import { isAuthenticated, login, logout } from "../utils/auth";

function LogIn() {

    const [auth, setAuth] = useState(isAuthenticated());
    console.log(auth)

    const handleAuth = async (accessLevel, isLogin) => {
        isLogin ? login(accessLevel) : logout();
        setAuth(isAuthenticated());
    };

    return (
        <div className="relative">

            <div className="z-10 mt-16 bg-secondary md:h-96 md:w-96 md:mt-16 md:ml-44 rounded-3xl"></div>

            <div className="z-20 p-4 m-8 origin-bottom-right transform border-4 border-tertiary lg:mx-56 md:mx-8 lg:-mt-80 rounded-2xl bg-gray-800">
                <div className="p-4 space-y-10 md:space-y-0 md:grid md:grid-cols-2">

                    <div className="w-11/12 p-8 rounded-lg lg:-ml-4 sm:ml-16">
                        <img width="600px" height="400px" src={LoginImg} alt="img" />
                    </div>

                    <div className="md:flex md:flex-col md:justify-center lg:pr-16">

                        <h2 className="mb-4 text-[2.6rem] self-center font-bold tracking-wider text-white">
                            APP NAME
                        </h2>

                        <div className='grid place-items-center'>
                            <div className="w-56 h-56 my-5 block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300 cursor-pointer shadow-lg">
                                <div className="flex items-center justify-center h-full bg-white hover:bg-gray-100" onClick={() => handleAuth(4, true)}>
                                    <img src={DeSOImg} alt="google" className="w-6" />
                                    <span className="ml-4 text-lg">Sign in with DeSo</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="z-10 float-right w-40 h-40 mr-48 -mt-40 bg-secondary rounded-3xl md:block hidden"></div>

        </div>
    )
}

export default LogIn
