"use client";
import { FAQModel } from "@/app/models/faqModel";
import { useCallback, useState } from "react";
import DoForFunDetails from "../faq/doForFunDetails";
import FAQCard from "../faq/faqCard";
import FavoriteSports from "../faq/favoriteSports";
import LeagueOfLegendsDetails from "../faq/leagueOfLegendsDetails";
import MoviesTvShows from "../faq/moviesTvShows";
const FrequentlyAskedQuestionsSection = () => {
  const faqInfo: FAQModel[] = [
    {
      id: "doForFun",
      questionTitle: "What do I like to do for fun?",
      showDetails: false,
      moreDetailsComponent: DoForFunDetails,
    },
    {
      id: "favoriteSports",
      questionTitle: "What are my favorite sport teams?",
      showDetails: false,
      moreDetailsComponent: FavoriteSports,
    },
    {
      id: "favoriteMoviesTV",
      questionTitle: "What are my favorite movies and TV shows?",
      showDetails: false,
      moreDetailsComponent: MoviesTvShows,
    },
    {
      id: "leagueOfLegends",
      questionTitle: "Can you beat me in League of Legends?",
      showDetails: false,
      moreDetailsComponent: LeagueOfLegendsDetails,
    },
  ];

  const [curFaqInfo, setCurFaqInfo] = useState(faqInfo);

  const onToggleShowDetails = useCallback((id: string) => {
    setCurFaqInfo((prevFaqInfo) =>
      prevFaqInfo.map((faq) =>
        faq.id === id ? { ...faq, showDetails: !faq.showDetails } : faq
      )
    );
  }, []);

  return (
    <div className="text-center mt-8">
      <h1 className="text-5xl tracking-widest mb-5">FAQs</h1>
      <div>Here are some fun little FAQs about me</div>
      {curFaqInfo.map((faq) => {
        return (
          <FAQCard
            key={faq.questionTitle}
            faqModel={faq}
            onToggle={onToggleShowDetails}
          />
        );
      })}
    </div>
  );
};

export default FrequentlyAskedQuestionsSection;
