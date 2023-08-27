import { Timeline, timelineItemClasses } from "@mui/lab";
import { TimelineItemView } from "@/app/view/TimeLineView";
import React from "react";

export default function RundownView() {
  return (
    <div className="prose-base mx-auto ">
      <h1 className="text-center">Schedule</h1>
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
  );
}
