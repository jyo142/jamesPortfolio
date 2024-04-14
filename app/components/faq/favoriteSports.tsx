"use client";
import Image from "next/image";

const FavoriteSports: React.FC = () => {
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
      <p>
        As a Seattleite I do have allegiance to the Seattle sports teams!
        However, I do like the Miami Heat because I was a fan of the Big 3 era
        and to show that I am no bandwagoner I still follow the team!
      </p>

      <div className="overflow-x-auto whitespace-no-wrap w-52 lg:w-full">
        <div className="flex items-center w-full max-w-full">
          {images.map((image) => (
            <div className="mx-8 flex-shrink-0">
              <Image
                src={image.path}
                alt={image.title}
                width="150"
                height="150"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoriteSports;
