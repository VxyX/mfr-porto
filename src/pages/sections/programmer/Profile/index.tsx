import SectionTitle from "../../../../components/SectionTitle";
import CV_EN from "../../../../assets/cv/CV_ATS_FarhanEnglish.pdf"
import "./profile.scss"
import profil2 from "../../../../assets/img/profil2.jpg"

export default function Profile() {
    const CV_en = CV_EN;
    return (
        <div id="profile" className="h-fit sm:h-screen min-h-[700px]">
            <div className="h-full profile-container">
                <div className="h-full flex flex-col">
                    <div className="pb-5">
                        <SectionTitle title="About Me" align="left" />
                    </div>
                    <div className="profile-content flex justify-center items-center">
                        <div id="hanashi" className="block space-y-5">
                            <p className="font-semibold text-2xl" data-aos="fade-up">Hello!</p>
                            <p data-aos="fade-up">
                                I'm a Fresh Graduate who have passion in programming, without any real work experience...
                                Hey, atleast i've learned somethings from college, or random internet tutorial... i think...
                            </p>
                            <p data-aos="fade-up">
                                On my journey to become a programmer, i've learned various programming language such as Python, C#, JavaScript, TypeScript, and also some Library/Framework like ReactJs, and .Net... (<i>This porto web also build with React Typescript :D</i>)
                                I'm currently seeking for oportunity to start my career as programmer :D
                            </p>
                            <p data-aos="fade-up">
                                Thats all about me :D
                                <br></br>
                                You can download my latest CV here 👇
                                <br></br>
                                <span className="download-cv-btn mt-5 block">
                                    <a className="block py-2 h-full w-full"
                                        href={CV_en}
                                        download={'CV_EnglishFarhan'}>
                                        Download CV
                                    </a>
                                </span>

                            </p>
                        </div>
                        <div id="profpic" className="flex-1" data-aos="fade-up">
                            <div className="profil">
                                <img className='' src={profil2} alt="ProfPic" />
                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div >
    )
}