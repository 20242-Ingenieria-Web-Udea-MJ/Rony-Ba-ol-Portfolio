
//This component is responsible for rendering the title of a section
export const Title = ({ text }:
  { text: string }
) => {
  return (
    <span className='font-semibold text-4xl'>{text}</span>
  )
}
