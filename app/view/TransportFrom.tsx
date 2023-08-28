import React from "react";
import WMGoogleMap from "@/app/view/WMGoogleMap";
import { APPCONSTANTS } from "@/utills/const";

export default function TransportFrom() {
  return (
    <div className="prose-base mx-auto text-center">
      <h1 className={"font-light"}>Location & Transportation</h1>
      <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
        <div>
          <WMGoogleMap />
        </div>
        <div className={"mx-2"}>
          <h3 className={"my-5 text-justify font-bold"}>
            Hotel Complimentary Shuttle Bus From Hang Hau (Ming Shing Street)
          </h3>
          <div
            className={
              "flex flex-row gap-2 flex-wrap text-2xl font-bold mx-auto justify-center"
            }
          >
            <div>10:15</div>
            <div>12:45</div>
            <div>14:15</div>
            <div>15:45</div>
            <div>17:15</div>
            <div>18:45</div>
          </div>
          <div className={"my-5 text-sm text-justify font-light"}>
            The pick-up and drop-off point at Ming Shing Street, Hang Hau
            (between The Residence Oasis and East Point City). Each journey
            takes approximately 30 minutes, and the actual time is subject to
            change due to traffic conditions. Passengers are advised to arrive
            at the shuttle bus stop 10 minutes in advance. Seats are limited and
            exclusive for hotel-registered guests, and only hand-carried baggage
            is allowed. Pet dogs are not permitted on shuttle bus. Please
            contact the hotel concierge to reserve seats for the shuttle bus
            departing from WM Hotel.
          </div>
          <h3 className={"my-5 text-justify font-bold"}>
            🚌Walking Route and Public Transport🚶
          </h3>
          <button
            className={
              "border border-green-900 hover:bg-green-900 hover:text-white font-bold rounded-full px-4 py-2 text-sm"
            }
            onClick={gotoPublicTransportPdf}
          >
            Check HERE!
          </button>
          <h3 className={"my-5 text-justify font-bold"}>Driving & Parking</h3>
          <p className={"text-justify"}>
            We have reserved 18 free parking slots. Check with us if you want to
            drive there!
          </p>
        </div>
      </div>
    </div>
  );

  function gotoPublicTransportPdf() {
    window.open(APPCONSTANTS.WM_TRANSPORT, "_blank");
  }
}
