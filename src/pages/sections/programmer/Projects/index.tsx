import { useEffect, useState } from "react";
import Carousel from "../../../../components/Carousel";
import ProjectCard from "../../../../components/ProjectCard";
import ProjectDetails from "../../../../components/ProjectCard/projectDetail";
import SectionTitle from "../../../../components/SectionTitle";
import profpic2 from "../../../../assets/img/profil2.jpg";

const dataProject = [
    { title: 'Card 1', shortDesc: '', longDesc: '', img: profpic2 },
    { title: 'Card 2', shortDesc: '', longDesc: '', img: profpic2 },
    { title: 'Card 3', shortDesc: '', longDesc: '', img: profpic2 },
]


export default function Projects() {
    const [isPanelOpen, setIsPanelOpen] = useState<boolean[]>(new Array(dataProject.length).fill(false));

    useEffect(() => {
        const anyPanelOpen = isPanelOpen.some(status => status);

        if (anyPanelOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isPanelOpen]);

    const showPanel = (index:number) => {
        setIsPanelOpen(prevState =>
            prevState.map((show, i) => (i === index ? !show : show))
        );
    }

    const cards = dataProject.map((data, index) => ({
        card: <ProjectCard key={index} title={data.title} btnEvent={()=>{showPanel(index)}}/>
    }))
    

    return (
        <div className="h-screen">
            <div className="flex flex-col justify-center items-center h-full w-auto">
                <div className="w-full">
                    <SectionTitle title="Projects I've Done" align="center" />
                </div>
                <div className="pt-10 w-4/5 mx-auto">
                    <Carousel cards={cards} />
                    {dataProject.map((data, index) => (
                        <>
                            <ProjectDetails title={data.title} isShown={isPanelOpen[index]} onUpdate={() => { showPanel(index) }} />
                        </>
                    ))}

                </div>
            </div>
        </div>
    )
}