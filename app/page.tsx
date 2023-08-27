"use client";

import React, { useEffect, useState } from "react";

import { Timeline, timelineItemClasses } from "@mui/lab";
import { TopNavBar } from "@/app/TopNavBar";
import { TimelineItemView } from "@/app/TimeLineView";
import WMGoogleMap from "@/app/WMGoogleMap";
import { APPCONSTANTS } from "@/utills/const";
import ImageMasonry from "@/app/view/ImageGallery";

export default function Home() {
  const [headerBlurRatio, setHeaderBlurRatio] = useState(8);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    setHeaderBlurRatio(getBlurRatioFromY(window.scrollY));
    const scroll = () => {
      const blur = getBlurRatioFromY(window.scrollY);
      setHeaderBlurRatio(blur);
      setOffsetY(window.scrollY);
    };

    window.addEventListener("scroll", scroll, false);
    return () => window.removeEventListener("scroll", scroll, false);
  }, []);

  return (
    <div
      className="bg-cover bg-bottom bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://wedsites.s3.amazonaws.com/accounts/3493/header/898/wallpaper-1620343201.png")',
      }}
    >
      {/* Menu */}
      <TopNavBar />
      {/* Photo */}
      <div className="relative overflow-clip">
        <>
          <video
            controls={false}
            autoPlay
            playsInline
            muted
            loop
            className="relative top-0 left-0 w-full blur-sm"
          >
            <source src="/vdo/644794dc-dcd2-4dd1-9ee7-d56f51ce62aa.mov" />
          </video>
        </>
        <div className="absolute top-0 left-0 w-full">
          <article className="prose-green prose-2xl mt-14 mx-auto text-center font-mw text-teal-900">
            <h3>Let's Celebrate</h3>
            <img
              className={`my-10 w-3/5 mx-auto object-contain`}
              style={{ filter: `blur(${headerBlurRatio}px)` }}
              src="/img/banner.png"
            />
            <p>On {getWeddingDateTime()}</p>
          </article>

          <img
            className="mt-14 mx-auto invert h-[80px]"
            src="https://www.wmhotel.hk/css/WMLOGO.png"
          />
          <div className="mt-2 mx-auto text-center font-ds text-2xl">
            {getLocation()}
          </div>
        </div>
      </div>

      <div className="mt-14">
        <div className="mx-auto w-1/6 h-0.5 bg-green-900" />
        <div className="relative my-10 font-mw mx-3">
          <article className="prose text-center mx-auto">
            <p className="text-justify">
              We're excited to share our special day with you! 🎉 We've planned
              a memorable celebration for{" "}
              <b className={"text-lg font-extrabold"}>
                Thursday, 21st December 2023
              </b>
              , with a joyous and intimate ceremony, followed by a delicious
              feast. We're honored that you're a part of our journey and can't
              wait to create lifelong memories with our friends and family. Save
              the date and get ready for a night to remember! 💕
            </p>
            <h3>With love,</h3>
            <h1>Janice & Sylvain.</h1>
          </article>
        </div>
        <div className="mx-auto w-1/6 h-0.5 bg-green-900" />
      </div>

      {/* Transportation */}
      <div className="mt-14 prose md:prose-xl mx-auto text-center font-lato">
        <div className={"px-2"}>
          <h2 className={"text-lg font-light"}>Location & Transportation</h2>
          <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
            <div>
              <WMGoogleMap />
            </div>
            <div>
              <button
                className={
                  "border border-green-900 hover:bg-green-900 hover:text-white rounded-full px-4 py-2 text-sm"
                }
                onClick={gotoPublicTransportPdf}
              >
                Walking Route and Public Transport
              </button>

              <h3 className={"my-5 font-light"}>
                Hotel Complimentary Shuttle Bus From Hang Hau (Ming Shing
                Street)
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
                takes approximately 30 minutes, and the actual time is subject
                to change due to traffic conditions. Passengers are advised to
                arrive at the shuttle bus stop 10 minutes in advance. Seats are
                limited and exclusive for hotel-registered guests, and only
                hand-carried baggage is allowed. Pet dogs are not permitted on
                shuttle bus. Please contact the hotel concierge to reserve seats
                for the shuttle bus departing from WM Hotel.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="mt-32 mx-auto grid grid-cols-1 gap-5">
        <div className="text-4xl text-center font-mw text-green-900">
          Schedule
        </div>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          <TimelineItemView
            date={"2023-12-21"}
            startTime={"16:30"}
            endTime={"17:30"}
            location={"WM Hotel Chapel"}
            name={"Wedding Ceremony"}
            desc="Same day, same dress, same location, same amazing photographer +
                                    videographer. Just a much more scaled down, intimate event with bridal party only in
                                    what we have dubbed our 'minimony'."
          />

          <TimelineItemView
            date={"2023-12-21"}
            startTime={"17:30"}
            endTime={"18:00"}
            location={"WM Hotel Chapel"}
            name={"Group Photo Session"}
            desc="Same day, same dress, same location, same amazing photographer +
                                    videographer. Just a much more scaled down, intimate event with bridal party only in
                                    what we have dubbed our 'minimony'."
          />

          <TimelineItemView
            date={"2023-12-21"}
            startTime={"19:00"}
            endTime={"20:00"}
            location={"WM Hotel Basement Floor"}
            name={"Reception"}
            desc="Same day, same dress, same location, same amazing photographer +
                                    videographer. Just a much more scaled down, intimate event with bridal party only in
                                    what we have dubbed our 'minimony'."
          />

          <TimelineItemView
            date={"2023-12-21"}
            startTime={"20:00"}
            endTime={"22:30"}
            location={"WM Hotel Basement Floor"}
            name={"Wedding Dinner"}
            desc="Same day, same dress, same location, same amazing photographer +
                                    videographer. Just a much more scaled down, intimate event with bridal party only in
                                    what we have dubbed our 'minimony'."
          />
        </Timeline>
      </div>

      {/* Image */}
      <ImageMasonry />
    </div>
  );

  function gotoPublicTransportPdf() {
    window.open(APPCONSTANTS.WM_TRANSPORT, "_blank");
  }

  function getWeddingDateTime() {
    let datetime = new Date(APPCONSTANTS.WEDDING_START);

    return `${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()} At ${datetime.getHours()}:${datetime
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  }

  function getLocation() {
    return "28 Wai Man Road, Sai Kung, New Territories, Hong Kong";
  }

  function getBlurRatioFromY(y: number) {
    if (y > 80) return 0;
    if (y < 0) return 8;
    return (1 - y / 80) * 8;
  }
}
