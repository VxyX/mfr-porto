import './sectionTitle.scss'

type prop = {
    title?: string,
    align?: 'center' | 'left' | 'right'
};

const SectionTitle = ({ title = "None", align = 'center' }: prop) => {
    return (
        <span className='sec-title' data-aos="fade-down">
            <h1 className={`text-${align}`}>{title}</h1>
        </span>
    )
}

export default SectionTitle;