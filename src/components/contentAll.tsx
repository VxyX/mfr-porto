import Intro from "../pages/sections/intro";
import BodyContent from "./contentBody";
import Navbar from "./Navbar";

export default function ContentAll(){
    return (
        <>
            <div className="bg-[--theme-dark] w-full h-full">
                <Intro />
                <Navbar />
                <BodyContent />
            </div>
        </>
    )
}