import ThemeToggle from "./ThemeToggle"

const links = [
    { name: 'Profile', url: 'profile' },
    { name: 'Projects', url: 'proj' },
    { name: 'Skills', url: 'skill' },
    { name: 'Certificates', url: 'certi' },

]

export default function Navbar() {
    return (
        <>
            <div className="bg-[--theme-black] w-full h-14 sticky z-10 top-0 shadow-lg">
                <div className="w-full h-full m-auto flex justify-center items-center">
                    <div className="flex w-full">
                        <div className="w-10 flex-1">

                        </div>
                        <div className="flex space-x-5">
                            {links.map((link, index) => (
                                <li className="list-none" key={index}>
                                    {link.name}
                                </li>
                            ))}
                        </div>
                        <div className="flex-1">
                            <div className="flex justify-end mr-5">
                                <ThemeToggle />
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}