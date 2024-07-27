import GithubSvg from "../assets/svg/githubSvg";
import LinkedinSvg from "../assets/svg/linkedinSvg";

const platform = [
    { name: 'LinkedIn', img: LinkedinSvg, url:'' },
    { name: 'Github', img: GithubSvg, url:'' }
];

export default function ExternalLinks() {
    return (
        <div className='flex space-x-5'>
            {platform.map((i, index) => {
                const Svgs = i.img;
                return (
                    <li className='list-none transition-all duration-300 hover:scale-125' key={index}>
                        <a href={i.url} target="_blank">
                            <Svgs fillColor="var(--theme-white)" width={40} height={40}/>
                        </a>
                    </li>
                )
            })}
        </div>
    )
}