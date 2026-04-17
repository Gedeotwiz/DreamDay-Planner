import React from "react";

type GSubmitButtonProps = {
  name: string;
  loading?: boolean;
  onClick?: () => void;
  background?: string;
  width?: string;
  style?: React.CSSProperties;
};

const GSubmitButton: React.FC<GSubmitButtonProps> = ({
  name,
  loading = false,
  onClick,
  background = "bg-gradient-to-r from-blue-500 to-purple-600",
  width = "w-full",
  style,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={loading}
      style={style}
      className={`
        ${width}
        ${background}
        text-white
        font-medium
        py-3
        rounded-3xl
        transition
        duration-300
        hover:opacity-90
        disabled:opacity-60
        disabled:cursor-not-allowed
        flex
        items-center
        justify-center
      `}
    >
      {loading ? "Loading..." : name}
    </button>
  );
};

export { GSubmitButton };