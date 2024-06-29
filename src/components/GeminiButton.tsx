// GeminiButton.tsx

import { StarFilledIcon } from "@radix-ui/react-icons";
import { SparkleIcon, Star } from "lucide-react";
import React from "react";
import { useFormContext } from "react-hook-form";

type GeminiButtonProps = {
  onClick: () => void;
};

const GeminiButton: React.FC<GeminiButtonProps> = ({ onClick }) => {
  const { watch } = useFormContext();

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className="rounded-md bg-gradient-to-br from-purple-600 to-pink-600 px-2 py-1 text-white hover:outline "
      onClick={handleButtonClick}
    >
      <span className="glowing-text text-xs inline-flex items-center gap-1">
        Generate with AI <SparkleIcon className="size-4" />
      </span>
    </button>
  );
};

export default GeminiButton;
