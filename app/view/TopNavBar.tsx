import React from "react";

export function TopNavBar() {
  return (
    <div className="sticky top-0 h-14 z-[2] backdrop-blur-2xl">
      <div className="relative mx-4 top-1/4 -translate-y-1/2">
        <div className="relative float-left font-qwitcher_grypen text-3xl">
          Janice & Sylvain
        </div>
        <div className="relative float-right">
          <div className="flex gap-4 justify-end">
            <span>Information</span>
            <span>Registry</span>
          </div>
        </div>
      </div>
    </div>
  );
}
