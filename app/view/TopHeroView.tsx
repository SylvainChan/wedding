import React, { useEffect, useState } from "react";
import { APPCONSTANTS } from "@/utills/const";

export default function () {
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
    <div className="relative overflow-clip font-mw min-h-fit">
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
        <article className="prose-sm md:prose-lg mt-14 mx-auto text-center">
          <h1 className={"font-bold"}>Let's Celebrate</h1>
          <img
            className={`w-3/5 mx-auto object-contain`}
            style={{ filter: `blur(${headerBlurRatio}px)` }}
            alt={""}
            src="/img/banner.png"
          />
          <h2>{getWeddingDateTime()}</h2>
        </article>

        <img
          className="mt-4 mx-auto invert h-[80px]"
          src="https://www.wmhotel.hk/css/WMLOGO.png"
          alt={""}
        />
        <h3 className="mt-4 mx-auto text-center font-bold">{getLocation()}</h3>
      </div>
    </div>
  );

  function getWeddingDateTime() {
    let datetime = new Date(APPCONSTANTS.WEDDING_START);

    return `On ${datetime.getDate()}/${datetime.getMonth()}/${datetime.getFullYear()} At ${datetime.getHours()}:${datetime
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
