//This component is responsible for rendering the photo of the user
export const Photo = ({ styles }: { styles: string }) => {
  return <img src="/img/foto.jpg" alt="mi foto" className={`${styles}`} />;
};
