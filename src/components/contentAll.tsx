import Intro from "../pages/sections/intro";
import BodyContent from "./contentBody";
import Navbar from "./nav";

export default function ContentAll(){
    return (
        <>
            <div className="bg-white w-full h-full">
                <Intro />
                <Navbar />
                <BodyContent />
            </div>
        </>
    )
}