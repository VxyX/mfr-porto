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
                    <div className='w-[95%] m-auto relative overflow-hidden rounded-3xl'>
                        <div className='flex-1 w-full pb-[56.25%] relative zoom-container'>
                            <img className='w-full h-full rounded-3xl object-cover absolute top-0 left-0' src={img} loading='lazy'/>
                        </div>
                    </div>

                    <div className='proj-card-text flex-1'>
                        <div>
                            <h1 className="font-semibold text-2xl text-center">{title}</h1>
                        </div>
                        <div className='flex-1 flex items-center'>
                            <p className='text-center'>{shortDesc} </p>
                        </div>
                        <div className='flex-1 flex justify-center items-end pb-3'>
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