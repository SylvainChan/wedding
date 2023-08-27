import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Button } from "@mui/joy";
import React from "react";
import AppButton from "@/views/AppButton";

export function TimelineItemView({
  time,
  event,
  desc,
}: {
  time: String;
  event: String;
  desc: String;
}) {
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot className="bg-green-900" />
        <TimelineConnector className="bg-green-900" />
      </TimelineSeparator>
      <TimelineContent>
        <article className="prose font-mw text-green-950">
          <h3>{time}</h3>
          <h1>{event}</h1>
          <p>{desc}</p>
          <AppButton>Add To Calendar</AppButton>
        </article>
      </TimelineContent>
    </TimelineItem>
  );
}
