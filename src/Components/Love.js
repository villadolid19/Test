import React from "react";
import love from "../img/Lovey1.mp4";
import Rhea from "../img/Rhea1.jpg";

export default function Love() {

    return (
      <div className="max-w-md mt-2 rounded-xl mx-auto bg-gray-800 bg-opacity-70 shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:w-auto p-2 rounded-md">
            <video
              className="w-full rounded-md opacity-70"
              height="auto"
              poster={Rhea}
              controls
            >
              <source src={love} type="video/mp4" />
            </video>
          </div>

          <div className="p-5 mt-3 justify-items-center">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              To you MyLove
            </div>

            <p className="mt-2 text-justify text-slate-400">
              It's been a year since we've met, and I've never felt this way
              before, partly because of my recent relationship trauma. Honestly
              it's kinda hard for me to trust a women again, but we all know
              that not all women would do the same way like my ex's did.
            </p>
            <p className="mt-2 text-justify text-slate-400">
              During my weakest time, I hide my inner child just to be strong in
              everybody's eyes. Though my mom can feel my deep sorrow, I still
              wear that fake mask. Months have passed, I realized that all my
              prayers was answered, I also regret those negative thoughts about
              her and learned it as a lesson.
            </p>
            <p className="mt-2 text-justify text-slate-400">
              3 years passed, I finally found myself being happy alone, vibin'
              with the new friends. I was able to live without a relationship, I
              don't even care about those girls who want's to hangout with me.
              Until a moment of time that I saw you on Rachel's birthday.
            </p>
            <p className="mt-2 text-justify text-slate-400">
              My first impression that time is "Damn you're pretty cute",
              honestly my heart wants you that time but my mind keeps reminding
              me of what happened last time. So I never give a thing to be with
              you until I found out that you also have a crush on me. At first,
              there's still a doubt in my mind that if we could be in a
              relationship, same thing would happened.
            </p>
            <p className="mt-2 text-justify text-slate-400">
              Then suddenly I realized that you're a different women, you're not
              my ex why would I think that way. I ask myself, "what if this is
              it?", "what if this is the girl you've been praying for?" that's
              the time I jumped into this situation. 2nd moment of time we met
              again on Rachel's house, that's the time that I decided to court
              you.
            </p>
            <p className="mt-2 text-justify text-slate-400">
              If God answers my prayers, I think this is it and I would never ever regret
              that in this phase of my journey, I have you my "miss independent". Diku
              kasabot sa ahong na feel ron love, basta happy kaayu ko nimo 
              ug love kaayu ka naho. Please be my jopay  
            </p>
          </div>
        </div>
      </div>
    );
}

