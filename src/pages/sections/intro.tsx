import profil2 from '../../assets/img/profil2.jpg';
import ExternalLinks from '../../components/externalLinks';


export default function Intro() {
    return (
        <div className="h-[calc(100vh-var(--navh))]">
            <div className="container w-full h-full m-auto flex items-center justify-center">
                <div className='w-fit h-fit m-auto space-y-5'>
                    <div className="profil">
                        <img className='' src={profil2} alt="ProfPic" />
                    </div>
                    <div className='block text-center space-y-4 intro'>
                        <div className='space-y-2'>
                            <p className='font-semibold text-xl'>Hello! i'm</p>
                            <h1>Muhammad Farhan Roesfiazhar</h1>
                        </div>
                        <div>
                            <p>A Fresh Graduate in Computer Science</p>
                            <p>Passionate Web Developer / Software Engineer</p>
                            <p>Also have passion on digital drawing <s>and 3D modelling</s></p>
                        </div>
                    </div>
                    <div className='bg-gradient-purple w-full h-1.5 rounded-full'>
                        
                    </div>
                    <div className='w-fit m-auto'>
                        <ExternalLinks />
                    </div>
                </div>

            </div>
        </div>
    )
}