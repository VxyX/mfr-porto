import { useEffect, useState } from "react";
import Carousel from "../../../../components/Carousel";
import ProjectCard from "../../../../components/ProjectCard";
import ProjectDetails from "../../../../components/ProjectCard/projectDetail";
import SectionTitle from "../../../../components/SectionTitle";
import DataProject from "../../../../assets/data/projectList";

const dataProject = DataProject;


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
        card: <ProjectCard key={index} title={data.title} img={data.img} shortDesc={data.shortDesc} btnEvent={()=>{showPanel(index)}}/>
    }))
    

    return (
        <div id="project" className="h-screen min-h-[650px]">
            <div className="flex flex-col justify-center items-center h-full w-auto py-10">
                <div className="w-full">
                    <SectionTitle title="Projects I've Done" align="center" />
                </div>
                <div className="pt-10 w-[95%] sm:w-[90%] lg:w-[950px] mx-auto">
                    <Carousel cards={cards} />
                    {dataProject.map((data, index) => (
                        <>
                            <ProjectDetails title={data.title} img={data.img} description={data.longDesc} isShown={isPanelOpen[index]} onUpdate={() => { showPanel(index) }} />
                        </>
                    ))}

                </div>
            </div>
        </div>
    )
}