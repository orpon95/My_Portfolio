import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content  backdrop-blur-sm shadow-lg shadow-fuchsia-400 flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar text-white font-bold">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2">Yeasin Arafat</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                <NavLink to={"/"} ><button><li><a>Home</a></li></button></NavLink>
                                {/* <NavLink to={"aboutme"} ><button><li><a>about me</a></li></button></NavLink> */}
                                <NavLink to={"contact"} ><button><li><a>contact</a></li></button></NavLink>
                                <NavLink to={"project"} ><button><li><a>My Project</a></li></button></NavLink>
                                <Link  >test</Link>

                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    Content
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full z-10 bg-base-200">
                        {/* Sidebar content here */}
                        <NavLink  to={"/"} ><button><li><a>Home</a></li></button></NavLink>
                        {/* <NavLink to={"aboutme"} ><button><li><a>about me</a></li></button></NavLink> */}
                        <NavLink to={"contact"} ><button><li><a>contact</a></li></button></NavLink>
                        <NavLink to={"project"} ><button><li><a>My Project</a></li></button></NavLink>
                        
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;