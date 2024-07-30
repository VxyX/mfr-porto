import { useEffect, useState } from 'react';
import profile2 from '../../assets/img/profil2.jpg'
import ProjectDetails from './projectDetail';
import './projectCard.scss';

interface ProjDetail{
    img?: string,
    title?: string,
    shortDesc?: string,
    longDesc?: string
}


const ProjectCard = ({img=profile2, title='iniproject', shortDesc='', longDesc=''}:ProjDetail) => {
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    
    useEffect(() => {
        if (isPanelOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, [isPanelOpen]);

    const showDetail = () => {
        console.log('tes');
        setIsPanelOpen(true);
    }

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
                            <button className='detail-btn' onClick={showDetail}>
                                <p className='text-center'>
                                    Detail
                                </p>
                            </button>
                        </div>
                    </div>

                </div>
            </div>

                <ProjectDetails img={img} title={title} description={longDesc} isShown={isPanelOpen} onUpdate={() => {setIsPanelOpen(false)}}/>
        </>
    )
}

export default ProjectCard