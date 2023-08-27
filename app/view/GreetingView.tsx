import React from "react";

export default function GreetingView() {
  return (
    <div className="mt-14">
      <div className="mx-auto w-1/6 h-0.5 bg-green-900" />
      <div className="relative my-10 font-mw mx-3">
        <article className="prose text-center mx-auto">
          <p className="text-justify">
            We're excited to share our special day with you! 🎉 We've planned a
            memorable celebration for{" "}
            <b className={"text-lg font-extrabold"}>
              Thursday, 21st December 2023
            </b>
            , with a joyous and intimate ceremony, followed by a delicious
            feast. We're honored that you're a part of our journey and can't
            wait to create lifelong memories with our friends and family. Save
            the date and get ready for a night to remember! 💕
          </p>
          <h3>With love,</h3>
          <h1>Janice & Sylvain.</h1>
        </article>
      </div>
      <div className="mx-auto w-1/6 h-0.5 bg-green-900" />
    </div>
  );
}
