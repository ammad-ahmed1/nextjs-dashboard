// components/Card.tsx

import { MdSupervisedUserCircle } from "react-icons/md";

interface CardProps {
  item: {
    title: string;
    number: number;
    change: number;
  };
}

const Card: React.FC<CardProps> = ({ item }) => {
  const isPositive = item.change > 0;

  return (
    <div className="bg-blue p-25 rounded-lg flex jus gap-5 cursor-pointer hover:bg-gray w-full">
      <MdSupervisedUserCircle size={24} className="text-gray-300" />
      <div className="flex flex-col gap-2">
        <span className="text-lg font-medium text-white">{item.title}</span>
        <span className="text-2xl font-semibold text-white">{item.number}</span>
        <span className="text-sm font-light text-white">
          <span className={isPositive ? "text-lime-500" : "text-red-500"}>
            {item.change}%
          </span>{" "}
          {isPositive ? "more" : "less"} than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
