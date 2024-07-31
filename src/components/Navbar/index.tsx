import { useState } from "react";
import ThemeToggle from "../ThemeToggle"
import './navbar.scss';

const links = [
    { name: 'Profile', url: 'profile' },
    { name: 'Projects', url: 'project' },
    { name: 'Skills', url: 'skill' },
    { name: 'Certificates', url: 'certi' },

]

export default function Navbar() {
    const scrollTo = (link: string) => {
        var element = document.getElementById(link);
        var headerOffset = 45;
        var elementPosition = element?.getBoundingClientRect().top;
        var offsetPosition = (elementPosition ? elementPosition + window.pageYOffset - headerOffset : 0);

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    const [sideBarActive, setSideBarActive] = useState(false);

    return (
        <>
            <div className="bg-[--theme-black] w-full h-14 sticky z-10 top-0 shadow-lg">
                <div className="w-[95%] h-full m-auto flex justify-center items-center">
                    <div className="flex w-full h-full">
                        <div className="flex-1 flex items-center md:invisible">
                            <div className="w-10 h-10 flex justify-center items-center ml-3 sm:ml-5">
                                <div className={`side-bar-toggle ${sideBarActive ? 'side-bar-toggle-active' : ''}`} onClick={() => setSideBarActive(!sideBarActive)}>
                                    <span className="line-1" />
                                    <span className="line-2" />
                                    <span className="line-3" />
                                </div>
                            </div>

                        </div>
                        <div className="sm:flex space-x-5 hidden sm:invisible md:visible items-center">
                            {links.map((link, index) => (
                                <li className="list-none cursor-pointer" key={index}>
                                    <a onClick={() => scrollTo(link.url)}>{link.name}</a>
                                </li>
                            ))}
                        </div>
                        <div className="flex-1 flex items-center justify-end">
                            <div className="flex justify-end mr-3 sm:mr-5">
                                <ThemeToggle />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <div className={`side-bar-bg fixed bg-[#222222af] w-screen h-screen inset-0 z-[9] ${sideBarActive ? 'show-side-bar-bg' : ''}`} onClick={() => setSideBarActive(false)}>
            </div>
            <div className={`side-bar-content fixed w-screen h-fit z-[9] ${sideBarActive ? 'show-side-bar-content' : ''}`}>
                {links.map((link, index) => (
                    <li className="list-none cursor-pointer" key={index}>
                        <a className="w-full block pl-8" onClick={() => {scrollTo(link.url); setSideBarActive(false)}}>{link.name}</a>
                    </li>
                ))}
            </div>
        </>
    )
}