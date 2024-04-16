"use client";
import Image from "next/image";

const LeagueOfLegendsDetails: React.FC = () => {
  const images = [
    {
      title: "Seahawks Logo",
      path: "/sportsteams/seahawks.svg",
    },
    {
      title: "Mariners Logo",
      path: "/sportsteams/mariners.svg",
    },
    {
      title: "Miami Heat Logo",
      path: "/sportsteams/miamiheat.svg",
    },
    {
      title: "Washington Huskies Logo",
      path: "/sportsteams/huskies.svg",
    },
    {
      title: "Seattle Sounders Logo",
      path: "/sportsteams/sounders.svg",
    },
  ];
  return (
    <div>
      <p>Most Likely!</p>
    </div>
  );
};

export default LeagueOfLegendsDetails;
