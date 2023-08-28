"use client";
import ImageMasonry from "@/app/view/ImageGallery";
import TransportFrom from "@/app/view/TransportFrom";
import GreetingView from "@/app/view/GreetingView";
import TopHeroView from "@/app/view/TopHeroView";
import RundownView from "@/app/view/RundownView";

export default function Home() {
  return (
    <div>
      <div className={"grid grid-cols-1 gap-y-14"}>
        {/* Photo */}
        <TopHeroView />

        {/* Greeting */}
        <GreetingView />

        {/* Schedule */}
        <RundownView />

        {/* Image */}
        <ImageMasonry />
      </div>
    </div>
  );
}
