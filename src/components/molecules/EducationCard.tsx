//This component is responsible for rendering every card in the education section
export const EducationCard = ({
  university,
  state,
  period,
  career,
  description,
}: {
  university: string;
  state: string;
  period: string;
  career: string;
  description: string;
}) => {
  return (
    <div className="flex w-full space-x-40 mb-5">
      <div className="flex flex-col space-y-3 w-1/3 items-start justify-center">
        <span className="text-start font-semibold">{university}</span>
        <div className="flex space-x-6 items-center w-full">
          <span className="text-left w-1/3 text-sm">{state}</span>
          <span className="bg-purple-600 text-white rounded-full p-1 w-auto text-sm">
            {period}
          </span>
        </div>
      </div>
      <div className="flex flex-col place-items-start justify-center w-2/3 space-y-3">
        <span className="font-bold">{career}</span>
        <span>{description}</span>
      </div>
    </div>
  );
};
