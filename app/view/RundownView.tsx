import { Timeline, timelineItemClasses } from "@mui/lab";
import { TimelineItemView } from "@/app/view/TimeLineView";
import React from "react";

export default function RundownView() {
  return (
    <div className="prose-base mx-auto w-full md:w-1/2">
      <h1 className="text-center font-light">Timeline</h1>
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
          desc="Join us at the luxurious WM Hotel in Hong Kong as we celebrate the union of Janice and Sylvain! 💕 The ceremony will take place in the stunning Chapel@WM Hotel with elegant decorations and a romantic atmosphere. 💝 Let's make this day truly unforgettable for the happy couple! 🎉 #JustMarried #WMHotel #HongKongWedding"
        />

        <TimelineItemView
          date={"2023-12-21"}
          startTime={"17:30"}
          endTime={"18:00"}
          location={"WM Hotel Chapel"}
          name={"Group Photo Session"}
          desc="Join us for a fun and memorable group photo session at the beautiful WM Hotel! 📸👥 Our professional photographer will capture the joy and love of your special day in a series of candid and posed shots. 💕 You'll have the chance to relax and have fun with your loved ones while we take care of capturing the moment. 😊"
        />

        <TimelineItemView
          date={"2023-12-21"}
          startTime={"19:00"}
          endTime={"22:00"}
          location={"WM Hotel Basement Floor"}
          name={"Reception"}
          desc="The evening promises to be a memorable celebration of our love and commitment to each other, surrounded by the people we hold dear. We have planned a lavish feast of traditional Chinese delicacies, accompanied by music, dance, and other entertainment. We would be honored if you could join us to share in the joy and merriment of this special occasion. Your presence means the world to us, and we cannot wait to celebrate this new chapter in our lives with you."
        />
      </Timeline>
    </div>
  );
}
