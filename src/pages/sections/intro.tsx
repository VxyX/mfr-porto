import profil2 from '../../assets/img/profil2.jpg';

export default function Intro() {
    return (
        <div className="bg-black h-[calc(100vh-3.5rem)]">
            <div className="container w-full h-full m-auto flex items-center justify-center">
                <div className='w-fit h-fit m-auto space-y-5'>
                    <div className="profil">
                        <img className='w-[180px]' src={profil2} alt="ProfPic" />
                    </div>
                    <div className='block text-center space-y-4'>
                        <div>
                            <p>Hello! i'm</p>
                            <h1>Muhammad Farhan Roesfiazhar</h1>
                        </div>
                        <div>
                            <p>A Fresh Graduate in Computer Science</p>
                            <p>Passionate Web Developer / Software Engineer</p>
                            <p>Also have passion on digital drawing <s>and 3D modelling</s></p>
                        </div>
                    </div>
                    <div>
                        <svg></svg>
                    </div>
                </div>

            </div>
        </div>
    )
}