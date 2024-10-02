
//This component is a card that displays an icon, a title and a description. 
//It is used in the KnowledgeSection component.
export const KnowledgeCard = ({
    icon,
    title,
    description
}: {
    icon: string,
    title: string,
    description: string
}) => {
    return (
        <div className="flex flex-col items-center bg-slate-50 p-16 space-y-3 w-80 h-96 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img src={icon} alt={title} className="w-24" />
            <span className="font-bold text-lg text-gray-800">{title}</span>
            <span className="text-center text-gray-600">{description}</span>
        </div>

    );
};
