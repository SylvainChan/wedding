"use client";

import React, { useEffect, useState } from "react";

import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  timelineItemClasses,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { Simulate } from "react-dom/test-utils";
import blur = Simulate.blur;
import { max, min } from "@popperjs/core/lib/utils/math";
import { TopNavBar } from "@/app/TopNavBar";
import { TimelineItemView } from "@/app/TimeLineView";
import WMGoogleMap from "@/app/WMGoogleMap";
import { useFormatter } from "use-intl";
import { APPCONSTANTS } from "@/utills/const";
import AppButton from "@/views/AppButton";

export default function Home() {
  const [headerBlurRatio, setHeaderBlurRatio] = useState(8);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const scroll = () => {
      const headerBlur =
        8 - Number.parseInt((min(80, window.scrollY) / 8).toPrecision(2));
      setHeaderBlurRatio(headerBlur);
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
            autoPlay
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

      {/* Body */}

      {/*Google Map*/}
      <WMGoogleMap />

      <div className="mt-14">
        <div className="mx-auto w-1/6 h-0.5 bg-green-900" />

        <div className="relative my-10 font-mw mx-3">
          <article className="prose text-center mx-auto">
            <p className="text-justify">
              With all the change that’s happened in the world, we’ve decided to
              reassess what our wedding will look like. With this in mind, we’ve
              chosen to get married with a more intimate event on Saturday 20th
              November. While this unfortunately means we won’t have the
              opportunity to share the day with you, we want to extend our most
              heartfelt thanks for your support as we continue to navigate a
              wedding in a pandemic – every kind thought has meant a lot. We
              cannot wait to share a celebratory drink and party with all of you
              on the new date of Friday 26th November. We promise you’re in for
              a real treat.
            </p>
            <h3>With love,</h3>
            <h1>Janice & Sylvain.</h1>
          </article>
        </div>
        <div className="mx-auto w-1/6 h-0.5 bg-green-900" />
      </div>

      <div className="mt-32 mx-auto grid grid-cols-1 gap-5">
        <div className="text-5xl text-center font-mw text-green-900">
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
            time="16:00 WM Hotel Chapel"
            event="The Ceremony"
            desc="Same day, same dress, same location, same amazing photographer +
                                    videographer. Just a much more scaled down, intimate event with bridal party only in
                                    what we have dubbed our 'minimony'."
          />

          <TimelineItemView
            time="20:00 WM Hotel Basement"
            event="Wedding Dinner"
            desc="Same day, same dress, same location, same amazing photographer +
                                    videographer. Just a much more scaled down, intimate event with bridal party only in
                                    what we have dubbed our 'minimony'."
          />
        </Timeline>
      </div>
    </div>
  );

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
}
