"use client";

import React, { useEffect, useState } from "react";

import { Timeline, timelineItemClasses } from "@mui/lab";
import { TopNavBar } from "@/app/view/TopNavBar";
import { TimelineItemView } from "@/app/view/TimeLineView";
import WMGoogleMap from "@/app/view/WMGoogleMap";
import { APPCONSTANTS } from "@/utills/const";
import ImageMasonry from "@/app/view/ImageGallery";
import TransportFrom from "@/app/view/TransportFrom";
import GreetingView from "@/app/view/GreetingView";
import TopHeroView from "@/app/view/TopHeroView";
import RundownView from "@/app/view/RundownView";

export default function Home() {
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
      <TopHeroView />

      {/* Greeting */}
      <GreetingView />

      {/* Transportation */}
      <TransportFrom />

      {/* Schedule */}
      <RundownView />

      {/* Image */}
      <ImageMasonry />
    </div>
  );
}
