import React from "react";

export default function AppButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-green-700 text-white rounded-full py-2 px-4">
      {children}
    </button>
  );
}
