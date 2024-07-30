import profile2 from '../../assets/img/profil2.jpg'
import './projectCard.scss';

interface ProjDetail {
    img?: string,
    title?: string,
    shortDesc?: string,
    btnEvent?: () => void
}


const ProjectCard = ({ img = profile2, title = 'iniproject', shortDesc = '', btnEvent }: ProjDetail) => {
    

    return (
        <>
            <div className='proj-card-border' data-aos='zoom-in'>
                <div className="proj-card space-y-3">
                    <div className='w-[95%] m-auto'>
                        <div className='w-full pb-[56.25%] relative'>
                            <img className='w-full h-full rounded-3xl object-cover absolute top-0 left-0' src={img} />
                        </div>
                    </div>

                    <div className='proj-card-text'>
                        <div>
                            <h1 className="font-semibold text-2xl text-center">{title}</h1>
                        </div>
                        <div>
                            <p className='text-center'>{shortDesc} </p>
                        </div>
                        <div className='flex-1 flex justify-center items-center'>
                            <button className='detail-btn' onClick={btnEvent}>
                                <p className='text-center'>
                                    Detail
                                </p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ProjectCard