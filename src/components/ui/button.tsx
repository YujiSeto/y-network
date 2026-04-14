type Props = {
  label: string;
  onClick?: () => void;
  size: "sm" | "md" | "lg";
};

export const Button = ({ label, onClick, size }: Props) => {
  return (
    <div
      onClick={onClick}
      className={`flex justify-center items-center cursor-pointer bg-white text-black font-bold rounded-3xl ${size === "sm" ? "h-7 text-xs" : size === "md" ? "h-10 text-md" : size === "lg" ? "h-14 text-lg" : "h-14 text-lg"}`}
    >
      {label}
    </div>
  );
};
