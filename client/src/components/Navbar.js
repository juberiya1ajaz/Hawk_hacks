import React, { useState, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import "../i18n"
import i18n from '../i18n'
import { useTranslation } from 'react-i18next'
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { isAuthenticated, login, logout } from "../utils/auth";

const changeLang = (ln) => {
    return () => {
        i18n.changeLanguage(ln);
    };
};

export default function Navbar() {

    const { t } = useTranslation();

    const [showNavbar, setShowNavbar] = React.useState(false);

    const [auth, setAuth] = useState(isAuthenticated());
    console.log(auth)

    const handleAuth = async (accessLevel, isLogin) => {
        isLogin ? login(accessLevel) : logout();
        setAuth(isAuthenticated());
    };

    return (
        <div >
            <nav className="flex items-center py-2 flex-wrap px-4 text-fontColor tracking-wide">
                <Link to="/"><span className="p-2 mr-4 inline-flex items-center text-4xl cursor-pointer font-base text-white"> {t('logo')}
                </span></Link>
                <button className="lg:hidden right-0 absolute md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setShowNavbar(true)} aria-hidden="false" aria-label="button">
                    <HiOutlineMenuAlt3 className="h-7 w-7" aria-hidden="false" />
                </button>
                {showNavbar ? (
                    <div>
                        <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:hidden"
                        >
                            <div className="relative my-6 mx-auto w-screen">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-150} duration={250}>
                                            <div className="text-2xl font-base tracking-wide cursor-pointer">
                                                {t('logo')}
                                            </div>
                                        </Link>

                                        <button className="absolute right-6" onClick={() => setShowNavbar(false)} aria-hidden="false" aria-label="button">
                                            <HiX className="h-7 w-7" aria-hidden="false" />
                                        </button>

                                    </div>

                                    <div className="grid justify-center">
                                        <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                                    </div>

                                    <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4"
                                    >

                                        <Link to="/">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">{t('navLinkHome')}</span>
                                        </Link>

                                        <Link to="/donate">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">{t('navLinkDonate')}</span>
                                        </Link>

                                        <Link to="/map">
                                            <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">{t('navLinkMap')}</span>
                                        </Link>

                                        <button className='bg-blue-600 text-white py-2 px-8 rounded-md ml-2' onClick={() => handleAuth(4, false)}>
                                            {t('navLinkLogout')}
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
                    </div>
                ) : null}

                <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" >
                    <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto space-x-2 mr-12" >

                        <Link to="/">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">{t('navLinkHome')}</span>
                        </Link>

                        <Link to="/donate">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">{t('navLinkDonate')}</span>
                        </Link>

                        <Link to="/map">
                            <span className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">{t('navLinkMap')}</span>
                        </Link>

                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="my-1 inline-flex justify-center w-full p-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md font-sourceSerifPro hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800">
                                    {t('navChangeLang')}
                                    <svg
                                        className="w-5 h-5"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items static className="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-white ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">

                                    <Menu.Item>
                                        <div className="w-full px-12 py-3 text-sm cursor-pointer" onClick={changeLang("en")} >
                                            English
                                        </div>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <div className="w-full px-12 py-3 text-sm cursor-pointer" onClick={changeLang("de")} >
                                            Deutsch
                                        </div>
                                    </Menu.Item>

                                    <Menu.Item>
                                        <div className="w-full px-12 py-3 text-sm pl-16 cursor-pointer" onClick={changeLang("ja")} >
                                            日本
                                        </div>
                                    </Menu.Item>

                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <button className='bg-[#6F5DE0] text-white py-2 px-8 rounded-md' onClick={() => handleAuth(4, false)}>{t('navLinkLogout')}</button>

                    </div>
                </div>
            </nav>
        </div>
    );
}
