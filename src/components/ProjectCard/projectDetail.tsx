import './projectDetail.scss';
interface InfoDetail {
    img?: string,
    title?: string,
    description?: string,
    isShown: boolean,
    onUpdate: () => void;
}

const ProjectDetails = ({ img = '', title = '', description = '', isShown, onUpdate }: InfoDetail) => {
    const backgroundHideState:React.CSSProperties = {
        opacity: 0,
        visibility: 'hidden'
    }
    const backgroundShowState:React.CSSProperties = {
        opacity: 1,
        visibility: 'visible'
    }

    const panelHideState:React.CSSProperties = {
        opacity: 0,
        transform: 'translateY(-60%) scale(0)'
    }
    const panelShowState:React.CSSProperties = {
        opacity: 1,
        transform: 'translateY(0) scale(1)'
    }

    return (
        <>
            <div
                style={isShown ? backgroundShowState : backgroundHideState}
                className={`transition-all duration-300 fixed inset-0 bg-black bg-opacity-60 z-10`}
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
                <div className="w-full h-full bg-[--theme-black] p-8 rounded-lg shadow-lg mx-auto">
                    <img src={img} />
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p>{description}</p>
                    <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default ProjectDetails;