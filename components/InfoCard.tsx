import React from "react";
import { LucideIcon } from "lucide-react";

// ✅ Define prop types
interface InfoCardProps {
  title: string;
  icon: LucideIcon;
  count?: number;
  over?: string;
  items: string[];
  buttonText: string;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  icon: Icon,
  count,
  over,
  items,
  buttonText,
}) => {
  return (
    <div className="flex flex-col items-center p-4 border rounded-xl w-64 bg-white shadow-sm hover:shadow-md transition-shadow font-serif">
      {/* === Header === */}
      <div className="flex justify-center items-center gap-2 mb-2">
        <Icon className="w-5 h-5 text-gray-700" aria-label={title} />
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>

      {/* === Count (optional) === */}
      {count !== undefined && (
        <p className="text-3xl text-center font-sans font-bold">
          {count}
          <span className="text-sm font-normal">{over}</span>
        </p>
      )}

      {/* === Items List === */}
      <ul className="text-sm mt-3 space-y-1 text-gray-700 list-disc list-inside">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>

      {/* === Button === */}
      <button
        className="mt-4 w-full bg-black text-white rounded-md py-1.5 hover:bg-gray-800 transition-colors"
        type="button"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default InfoCard;
