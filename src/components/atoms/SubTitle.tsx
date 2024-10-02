
//This component is responsible for rendering the subtitle of a section
export const SubTitle = ({
    text
}: {
    text: string
}) => {
    return (
        <span className='text-lg font-semibold'>{text}</span>
    )
}
