import React from "react";

export function TopNavBar() {
  return (
    <div className="sticky top-0 h-14 z-[2] backdrop-blur-2xl">
      <div className="mx-2 translate-y-1/4 h-14">
        <div className="relative float-left font-hw"> Janice & Sylvain</div>
        <div className="relative float-right font-display">
          <div className="flex gap-4 justify-end">
            <span>Information</span>
            <span>Registry</span>
          </div>
        </div>
      </div>
    </div>
  );
}
