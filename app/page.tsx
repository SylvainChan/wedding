import Header from "@/app/Header";
import React from "react";
import AvatarInformation from "@/app/AvatarInformation";
import {AspectRatio, Button, Divider, Sheet, Typography} from "@mui/joy";
import {Icon} from "@mui/material";


export default function Home() {
    return (
        <div className="bg-cover bg-bottom bg-fixed bg-no-repeat"
             style={{backgroundImage: 'url("https://wedsites.s3.amazonaws.com/accounts/3493/header/898/wallpaper-1620343201.png")'}}>
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
            <div className="top-14 overflow-clip">
                <>
                    <video autoPlay muted loop className="w-full blur-sm">
                        <source src="/vdo/644794dc-dcd2-4dd1-9ee7-d56f51ce62aa.mov"/>
                    </video>
                </>
            </div>

            {/* Body */}

            <img className="mt-32 w-3/5 mx-auto object-contain" src="/img/banner.png"/>

            <div className="mt-32 mx-auto text-center font-hw text-xl">21 December 2023</div>

            <img className="mt-32 mx-auto invert" src="https://www.wmhotel.hk/css/WMLOGO.png"/>

            <div className="mt-2 mx-auto text-center font-hw">28 Wai Man Road, Sai Kung, New Territories, Hong Kong
            </div>

            <div className="mt-32">
                <div className="mx-auto w-1/6 h-0.5 bg-green-900"/>

                <div className="my-10 mx-auto w-1/2 text-center font-display">After 7 years, we are very excited to
                    tie
                    the knot and celebrate with you all in December! We hope you can make it!
                </div>

                <div className="mx-auto w-1/6 h-0.5 bg-green-900"/>
            </div>

            <div className="mt-32 w-1/2 mx-auto grid grid-cols-1 gap-5">
                <div className="text-5xl text-center font-display">Schedule</div>
                <div className="flex flex-col justify-center">
                    <div className="text-center">Monday September 18, 2023</div>
                    <Divider/>
                    <div className="text-center">證婚 🤵👰💍🏝</div>
                    <div className="text-center">4:30 PM</div>
                    <Button className="w-1/2 mx-auto" variant={"outlined"}>Add To Calendar</Button>
                    <div className="">At WM Hotel ⛪️</div>
                </div>
                <div className="text-sm text-center">RECEPTION WILL BE PARTIALLY OPEN-AIR, AND PARTIALLY
                    TENTED/INDOORS.
                </div>
                <div className="text-sm text-center">DRESS CODE WILL BE SEMI-FORMAL.</div>
            </div>
        </div>
    )
}