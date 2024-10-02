//This component is a progress bar that displays
//the percentage of knowledge in a specific field.
const ProgressBar = ({
  language,
  percentage,
}: {
  language: string;
  percentage: number;
}) => {
  return (
    <div className="mb-4 w-full text-sm">
      <div className="flex justify-between mb-1">
        <span>{language}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-purple-200 rounded-full h-2.5 ">
        <div
          className="bg-purple-400 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
};

export { ProgressBar };
