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

    const resetScroll = () => {
        const scrollContainer = document.getElementById("detail-project-content");
        if (scrollContainer) {
            scrollContainer.scrollTop = 0;
        }
    }

    return (
        <>
            <div
                style={isShown ? backgroundShowState : backgroundHideState}
                className={`transition-all duration-300 fixed inset-0 bg-black bg-opacity-60 z-10 h-screen w-screen overflow-hidden`}
                onClick={() => {
                    onUpdate ? onUpdate() : null;
                    resetScroll();
                }}
            />
            <div
                style={isShown ? panelShowState : panelHideState}
                className="proj-detail fixed inset-0 flex items-center justify-center overflow-hidden z-20 w-4/5 mx-auto my-10"
            >
                <div className='absolute inset-0 left-auto right-0 h-10 w-10 z-20 mr-5 mt-5' onClick={() => {
                    onUpdate ? onUpdate() : null;
                    resetScroll();
                }} >
                    <span className='block bg-[--theme-white] w-full h-1 transform rotate-45 absolute top-1/2' />
                    <span className='block bg-[--theme-white] w-full h-1 transform -rotate-45 absolute top-1/2' />
                </div>
                <div id='detail-project-content' className="w-full h-full bg-[--theme-black] p-3 rounded-lg shadow-lg mx-auto space-y-3 overflow-auto flex flex-col">
                    <div className='w-[95%] mx-auto h-1/2 min-h-[200px] md:flex md:justify-center py-2'>
                        <div className='aspect-video relative mx-auto h-full'>
                            <img className='w-full h-full rounded-3xl object-cover absolute' src={img} />
                        </div>
                    </div>
                    <div className='flex-1 w-full h-fit min-h-[200px] text-center px-5 py-5 mb-3 flex flex-col'>
                        <h2 className="text-2xl font-bold">{title}</h2>
                        <div className='pb-5'>
                            <pre>{description}

                            </pre>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectDetails;