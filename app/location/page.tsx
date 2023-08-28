"use client";
import React from "react";
import { Tabs } from "flowbite-react";
import WMGoogleMap from "@/app/view/WMGoogleMap";
import { HiPaperAirplane } from "react-icons/hi";
import { APPCONSTANTS } from "@/utills/const";
import { HiHandRaised } from "react-icons/hi2";

export default function LocationPage() {
  return (
    <div className={"w-full grid grid-cols-1"}>
      <div className={"h-56 md:h-96"}>
        <WMGoogleMap />
      </div>

      <Tabs.Group
        style="fullWidth"
        className={"backdrop-blur-sm sticky top-14"}
      >
        <Tabs.Item icon={HiPaperAirplane} title={"Arriving"}>
          <From />
        </Tabs.Item>
        <Tabs.Item icon={HiHandRaised} title={"Leaving"}>
          <Leave />
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}

function Leave() {
  return (
    <div>
      <div className={"prose-lg md:prose-2xl grid grid-cols-1 gap-5 mx-2"}>
        <div className={"grid grid-cols-1 gap-1"}>
          <>
            <h3 className={"text-justify font-bold"}>
              Walking Route and Public Transport
            </h3>
            <button
              className={
                "border border-green-900 hover:bg-green-900 hover:text-white font-bold rounded-full px-4 py-2 text-sm mx-auto"
              }
              onClick={gotoPublicTransportPdf}
            >
              Check HERE!
            </button>
          </>

          <>
            <h3 className={"text-justify font-bold"}>Free Shuttle Bus</h3>
            <p className={"text-justify"}>
              We hope you will have a wonderful time celebrating this special
              day with us. As the night draws to a close, we have arranged for
              four shuttle buses to transport you back to your destinations. The
              buses will be departing from the WM Hotel at the end of the
              wedding dinner, and they will be headed to four different
              locations: <b>Tuen Mun, Mong Kok, Kwun Tong, and Causeway Bay</b>.
              Please note that the departure times for the buses will be
              announced during the dinner, so please do stay tuned for the
              announcements. We want to ensure that everyone has a safe and
              convenient journey home, and we appreciate your cooperation in
              being punctual and prepared for the bus departure times.
            </p>
          </>
        </div>
      </div>
    </div>
  );
}

function gotoPublicTransportPdf() {
  window.open(APPCONSTANTS.WM_TRANSPORT, "_blank");
}

function From() {
  return (
    <div className={"prose-lg md:prose-2xl grid grid-cols-1 gap-5 mx-2"}>
      <div className={"grid grid-cols-1 gap-1"}>
        <h3 className={"my-5 text-justify font-bold"}>
          Hotel Complimentary Shuttle Bus From Hang Hau (Ming Shing Street)
        </h3>
        <div
          className={
            "flex flex-row gap-2 flex-wrap text-2xl font-bold justify-start"
          }
        >
          <div>10:15</div>
          <div>12:45</div>
          <div>14:15</div>
          <div>15:45</div>
          <div>17:15</div>
          <div>18:45</div>
        </div>
        <div className={"text-sm text-justify font-light"}>
          The pick-up and drop-off point at Ming Shing Street, Hang Hau (between
          The Residence Oasis and East Point City). Each journey takes
          approximately 30 minutes, and the actual time is subject to change due
          to traffic conditions. Passengers are advised to arrive at the shuttle
          bus stop 10 minutes in advance. Seats are limited and exclusive for
          hotel-registered guests, and only hand-carried baggage is allowed. Pet
          dogs are not permitted on shuttle bus. Please contact the hotel
          concierge to reserve seats for the shuttle bus departing from WM
          Hotel.
        </div>
      </div>

      <>
        <h3 className={"text-justify font-bold"}>
          Walking Route and Public Transport
        </h3>
        <button
          className={
            "border border-green-900 hover:bg-green-900 hover:text-white font-bold rounded-full px-4 py-2 text-sm mx-auto"
          }
          onClick={gotoPublicTransportPdf}
        >
          Check HERE!
        </button>
      </>

      <>
        <h3 className={"text-justify font-bold"}>Driving & Parking</h3>
        <p className={"text-justify"}>
          We have reserved 18 free parking slots. Check with us if you want to
          drive there!
        </p>
        <p className={"text-justify"}>
          The WM Hotel provides on-site parking for more than 270 parking spaces
          located on B1/F and B2/F. Hotel guests and outside guests are welcome
          to use the facilities and services. On-site Parking: Fee: HK$25 hourly
          Fee: HK$250 daily (24 hours) (Single entry) ** only private cars
          allowed
        </p>
      </>
    </div>
  );
}
