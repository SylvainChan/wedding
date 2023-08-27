import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import React from "react";

import { AddToCalendarButton } from "add-to-calendar-button-react";

export function TimelineItemView({
  name,
  date,
  startTime,
  endTime,
  location,
  desc,
}: {
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  desc: string;
}) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className="bg-green-900" />
        <TimelineConnector className="bg-green-900" />
      </TimelineSeparator>
      <TimelineContent>
        <article className="prose font-mw text-green-950">
          <h3>{startTime}</h3>
          <h1>{name}</h1>
          <p>{desc}</p>
        </article>
        <div className={"my-5"}>
          <AddToCalendarButton
            name={`${name} @ ${location}`}
            description={`${name} @ ${location}`}
            startDate={date}
            startTime={startTime}
            endTime={endTime}
            timeZone="Asia/Hong_Kong"
            options="'Apple','Google','Outlook.com'"
            buttonStyle="default"
            lightMode="system"
            pastDateHandling="disable"
          />
        </div>
      </TimelineContent>
    </TimelineItem>
  );
}
