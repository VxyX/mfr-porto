
import Certificates from "./sections/programmer/certificates";
import Profile from "./sections/programmer/Profile";
import Projects from "./sections/programmer/Projects";
import Skills from "./sections/programmer/skills";

export default function ProgrammerPage() {
    return (
        <>
            <div className="bg-[--theme-black]">
                <Profile />
                <Projects />
                <Skills />
                <Certificates />
            </div>

        </>
    )
}