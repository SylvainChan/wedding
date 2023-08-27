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
            alt={""}
            src="/img/banner.png"
          />
          <p>On {getWeddingDateTime()}</p>
        </article>

        <img
          className="mt-14 mx-auto invert h-[80px]"
          src="https://www.wmhotel.hk/css/WMLOGO.png"
          alt={""}
        />
        <div className="mt-2 mx-auto text-center font-ds text-2xl">
          {getLocation()}
        </div>
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

  function getBlurRatioFromY(y: number) {
    if (y > 80) return 0;
    if (y < 0) return 8;
    return (1 - y / 80) * 8;
  }
}
