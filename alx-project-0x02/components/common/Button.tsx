import { type ButtonProps } from "../../interfaces";

const sizeClasses = {
  small: "px-4 py-2 text-sm",
  medium: "px-6 py-3 text-base",
  large: "px-8 py-4 text-lg",
};

const shapeClasses = {
  "rounded-sm": "rounded-sm",
  "rounded-md": "rounded-md",
  "rounded-full": "rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  size = "medium",
  shape = "rounded-md",
}) => {
  return (
    <button
      className={`
        
        ${sizeClasses[size]}
        ${shapeClasses[shape]}
      `}
    ></button>
  );
};

export default Button;
