
import Certificates from "./sections/programmer/certificates";
import Profile from "./sections/programmer/profile";
import Projects from "./sections/programmer/projects";
import Skills from "./sections/programmer/skills";

export default function ProgrammerPage() {
    return (
        <>
            <div className="bg-[--theme-dark]">
                <Profile />
                <Projects />
                <Skills />
                <Certificates />
            </div>

        </>
    )
}