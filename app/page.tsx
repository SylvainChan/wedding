import Header from "@/app/Header";
import React from "react";
import AvatarInformation from "@/app/AvatarInformation";
import {AspectRatio, Divider, Sheet, Typography} from "@mui/joy";
import {Icon} from "@mui/material";


export default function Home() {
    return (
        <div>
            {/* Menu */}
            <div className="sticky top-0 h-14 z-[2] bg-gray-50">
                <div className="mx-2 translate-y-1/4 h-14">
                    <div className="relative float-left font-hw">Sylvain &
                        Janice
                    </div>
                    <div className="relative float-right font-display">
                        <div className="flex gap-4 justify-end">
                            <span>Information</span>
                            <span>Registry</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Photo */}
            <div className="sticky top-14">
                <AspectRatio>
                    <img className="h-full w-full mx-auto object-cover contrast-50 saturate-50 blur-sm"
                         src="/img/banner_image.jpeg"/>
                </AspectRatio>
            </div>

            {/* Body */}
            <div className="relative font-display z-[1] h-[960px] bg-gradient-to-b from-transparent to-gray-50">

                <img className="mt-32 w-3/5 mx-auto object-contain" src="/img/banner.png"/>

                <div className="mt-32 mx-auto text-center font-hw text-xl">21 December 2023</div>

                <img className="mt-32 mx-auto invert" src="https://www.wmhotel.hk/css/WMLOGO.png"/>

                <div className="mt-2 mx-auto text-center font-hw">28 Wai Man Road, Sai Kung, New Territories, Hong Kong
                </div>


            </div>
        </div>
    )
}
