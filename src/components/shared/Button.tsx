import React from "react";
interface ButtonProps {
  label: string;
  height: string;
  width: string;
  bg: string;
  color: string;
  type: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  label,
  height,
  width,
  bg,
  color,
  type,
}) => {
  return (
    <div>
      <button className={`${width} ${height} ${bg} ${color}`} type={type}>
        {label}
      </button>
    </div>
  );
};

export default Button;
