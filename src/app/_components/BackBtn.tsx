// app/components/BackButton.tsx
"use client";

import { useRouter } from "next/navigation";
import { FaBackward } from "react-icons/fa";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      aria-label="Go back"
      className="bg-blue-500 p-3 py-1 mb-7 rounded-md flex gap-2 justify-center items-center cursor-pointer hover:bg-blue-600 transition duration-300"
      onClick={handleBack}
    >
      <FaBackward size={25} /> <span className="font-semibold">Back</span>
    </button>
  );
}
