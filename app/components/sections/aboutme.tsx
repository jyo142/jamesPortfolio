"use client";
import Image from "next/image";
import AchievementCard from "../cards/achievementCard";
import FrequentlyAskedQuestionsSection from "./faq";
const AboutMeSection = () => {
  return (
    <div className="p-8 text-center">
      <h1 className="text-5xl tracking-widest mb-5">About Me</h1>
      <div>
        Hi Everyone! My name is James and I am originally from Honolulu, HI but
        I moved to Seattle, WA back in 2009. I am a dedicated full-stack
        engineer and an alumnus of the Paul G. Allen School at the University of
        Washington, holding a degree in Computer Science. With over 9 years of
        practical experience, I specialize in crafting and implementing software
        solutions across diverse industries, including real estate and
        marketing. My passion lies in creating web and mobile applications that
        address everyday challenges. I am committed to exploring new software
        solutions and technologies tailored to solving these problems.
      </div>
      <div className="mt-10 text-xl">
        <h2>
          I am not really one to brag &#128517; but here are some of the top
          achievements that I am proud of!
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 xs:grid-cols-1">
        <AchievementCard
          titleComponent={() => (
            <h2 className="text-2xl">Eagle Scout of America</h2>
          )}
          imageComponent={() => (
            <Image
              src="/boyscout.png"
              alt="Boyscouts of America logo"
              width="150"
              height="150"
            />
          )}
          hrefLink="https://en.wikipedia.org/wiki/Eagle_Scout"
        />
        <AchievementCard
          titleComponent={() => (
            <h2 className="text-2xl">
              Co Validictorian <br /> Lutheran High School of Hawaii
            </h2>
          )}
          imageComponent={() => (
            <Image
              src="/lutheran.jpg"
              alt="Lutheran High School of Hawaii Logo"
              width="150"
              height="150"
            />
          )}
          hrefLink="https://en.wikipedia.org/wiki/Lutheran_High_School_of_Hawaii"
        />
        <AchievementCard
          titleComponent={() => (
            <h2 className="text-2xl">
              Kendo 4Dan <br />
              (4th Degree Black Belt)
            </h2>
          )}
          imageComponent={() => (
            <Image src="/kendo.gif" alt="Kendo Gif" width="150" height="150" />
          )}
          hrefLink="https://en.wikipedia.org/wiki/Kendo"
        />
      </div>
      <div className="mt-10 text-xl">
        <h2>And here are some other fun milestones! &#128512;</h2>
      </div>
      <div className="grid lg:grid-cols-2 xs:grid-cols-1">
        <AchievementCard
          titleComponent={() => (
            <h2 className="text-2xl">Duolingo 1100 day streak!</h2>
          )}
          imageComponent={() => (
            <Image
              src="/duolingo.gif"
              alt="Lutheran High School of Hawaii Logo"
              width="150"
              height="150"
            />
          )}
          hrefLink="https://en.wikipedia.org/wiki/Lutheran_High_School_of_Hawaii"
        />
        <AchievementCard
          titleComponent={() => <h2 className="text-2xl">CodeWars</h2>}
          imageComponent={() => (
            <img src="https://www.codewars.com/users/jyo142/badges/large" />
          )}
          hrefLink="https://www.codewars.com/users/jyo142"
        />
      </div>
      <FrequentlyAskedQuestionsSection />
    </div>
  );
};

export default AboutMeSection;
