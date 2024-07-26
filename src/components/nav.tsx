
const links = [
    { name: 'Profile', url: 'profile' },
    { name: 'Projects', url: 'proj' },
    { name: 'Skills', url: 'skill' },
    { name: 'Certificates', url: 'certi' },

]

export default function Navbar() {
    return (
        <>
            <div className="bg-slate-800 w-full h-14 sticky z-10 top-0 flex ">
                <div className="w-10 flex-1">

                </div>
                <div className="flex space-x-5">
                    {links.map((link, index) => (
                        <li className="list-none" key={index}>
                            {link.name}
                        </li>
                    ))}
                </div>
                <div className="w-10 flex-1">

                </div>
            </div>
        </>
    )
}