"use client";
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
      <div className={"grid grid-cols-1 gap-y-14"}>
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
    </div>
  );
}
