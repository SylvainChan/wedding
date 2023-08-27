import React from "react";

export default function WMGoogleMap() {
  return (
    <div className="relative h-96">
      <iframe
        width="100%"
        height="100%"
        src="https://www.google.com/maps/embed/v1/place?q=WM+Hotel,+Wai+Man+Road,+Sai+Kung,+Hong+Kong&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        aria-hidden="false"
      ></iframe>
    </div>
  );
}
