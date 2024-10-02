
//This component is responsible for rendering the personal information of the user
export const PersonalItem = ({ topic, info }: {
    topic: string,
    info: string
}) => {
    return (
        <div className='flex justify-between'>
            <span className='font-semibold'>{topic}:</span>
            <span>{info}</span>

        </div>
    )
}
