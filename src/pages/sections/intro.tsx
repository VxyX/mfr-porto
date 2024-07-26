import profil2 from '../../assets/img/profil2.jpg';

export default function Intro() {
    return (
        <div className="bg-black h-[calc(100vh-var(--navh))]">
            <div className="container w-full h-full m-auto flex items-center justify-center">
                <div className='w-fit h-fit m-auto space-y-5'>
                    <div className="profil">
                        <img className='' src={profil2} alt="ProfPic" />
                    </div>
                    <div className='block text-center space-y-4'>
                        <div>
                            <p className='font-semibold'>Hello! i'm</p>
                            <h1>Muhammad Farhan Roesfiazhar</h1>
                        </div>
                        <div>
                            <p>A Fresh Graduate in Computer Science</p>
                            <p>Passionate Web Developer / Software Engineer</p>
                            <p>Also have passion on digital drawing <s>and 3D modelling</s></p>
                        </div>
                    </div>
                    <div className='w-full bg-gradient-to-r from-[--theme-pink] to-[--theme-purple] h-1.5 rounded-full'>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}