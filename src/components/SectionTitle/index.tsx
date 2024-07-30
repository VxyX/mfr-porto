import './sectionTitle.scss'

type prop = {
    title?: string,
    align?: 'center' | 'left' | 'right'
};

const SectionTitle = ({ title = "None", align = 'right' }: prop) => {
    return (
        <span className={`sec-title ${align}`} data-aos="fade-down">
            <h1 className={`text-${align}`}>{title}</h1>
        </span>
    )
}

export default SectionTitle;