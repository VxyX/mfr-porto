import './projectDetail.scss';
import profile2 from '../../assets/img/profil2.jpg'
interface InfoDetail {
    img?: string,
    title?: string,
    description?: string,
    isShown?: boolean,
    onUpdate?: () => void;
}

const ProjectDetails = ({ img = profile2, title = '', description = '', isShown, onUpdate }: InfoDetail) => {
    const backgroundHideState: React.CSSProperties = {
        opacity: 0,
        visibility: 'hidden'
    }
    const backgroundShowState: React.CSSProperties = {
        opacity: 1,
        visibility: 'visible'
    }

    const panelHideState: React.CSSProperties = {
        opacity: 0,
        transform: 'translateY(-60%) scale(0)'
    }
    const panelShowState: React.CSSProperties = {
        opacity: 1,
        transform: 'translateY(0) scale(1)'
    }

    return (
        <>
            <div
                style={isShown ? backgroundShowState : backgroundHideState}
                className={`transition-all duration-300 fixed inset-0 bg-black bg-opacity-60 z-10 h-screen w-screen overflow-hidden`}
                onClick={onUpdate}
            />
            <div
                style={isShown ? panelShowState : panelHideState}
                className="proj-detail fixed inset-0 flex items-center justify-center overflow-hidden z-20 w-4/5 mx-auto my-10"
            >
                <div className='absolute inset-0 left-auto right-0 h-10 w-10 z-20 mr-5 mt-5' onClick={onUpdate} >
                    <span className='block bg-[--theme-white] w-full h-1 transform rotate-45 absolute top-1/2' />
                    <span className='block bg-[--theme-white] w-full h-1 transform -rotate-45 absolute top-1/2' />
                </div>
                <div className="w-full h-full bg-[--theme-black] p-3 rounded-lg shadow-lg mx-auto space-y-3 overflow-auto flex flex-col">
                    <div className='w-[95%] mx-auto h-1/2 md:flex md:justify-center'>
                        <div className='aspect-video relative mt-5'>
                            <img className='w-full h-full rounded-3xl object-cover absolute top-0 left-0' src={img} />
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h2 className="text-2xl font-bold mb-4">{title}</h2>
                        <p>{description}</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectDetails;