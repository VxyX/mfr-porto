import ProjectCard from "../../../../components/ProjectCard";
import SectionTitle from "../../../../components/SectionTitle";

export default function Projects() {
    return (
        <div className="h-screen">
            <div className="flex flex-col justify-center items-center h-full w-auto">
                <div className="w-full">
                    <SectionTitle title="Projects I've Done" align="center" />
                </div>
                <div className="pt-10">
                    <ProjectCard />
                </div>
            </div>
        </div>
    )
}