
import Certificates from "./sections/programmer/certificates";
import Profile from "./sections/programmer/profile";
import Projects from "./sections/programmer/projects";
import Skills from "./sections/programmer/skills";

export default function ProgrammerPage(){
    return(
        <>
            <Profile />
            <Projects />
            <Skills />
            <Certificates />
        </>
    )
}