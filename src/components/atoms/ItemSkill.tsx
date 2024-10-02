import { HiLink } from "react-icons/hi";

//This component is responsible for rendering the skills of the user in the sidebar
export const ItemSkill = ({ text }: { text: string }) => {
  return (
    <div className="flex text-sm">
      <HiLink className="text-xl text-purple-600 me-2" />
      <span>{text}</span>
    </div>
  );
};
