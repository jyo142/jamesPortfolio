"use client";
import Image from "next/image";

const MoviesTvShows: React.FC = () => {
  const images = [
    {
      title: "Lilo and Stitch Image",
      path: "/moviestv/lilostitch.jpg",
    },
    {
      title: "Chuck Image",
      path: "/moviestv/chuck.jpg",
    },
    {
      title: "Dragon Ball Z Image",
      path: "/moviestv/dbz.jpg",
    },
    {
      title: "Avengers Image",
      path: "/moviestv/avengers.jpg",
    },

    {
      title: "Dark Knight Image",
      path: "/moviestv/darkknight.jpg",
    },

    {
      title: "Demon Slayer Image",
      path: "/moviestv/demonslayer.jpeg",
    },
    {
      title: "Hawaii Five O Image",
      path: "/moviestv/hawaiifiveo.jpg",
    },

    {
      title: "Modern Family Image",
      path: "/moviestv/modernfamily.jpeg",
    },
    {
      title: "Spy Family Image",
      path: "/moviestv/spyfamily.avif",
    },
  ];
  return (
    <div>
      <p className="my-3 text-left">
        My favorite genres are comedy and action and I guess sometimes
        romcoms...
      </p>

      <div className="overflow-x-auto whitespace-no-wrap w-52 lg:w-full">
        <div className="flex items-center w-full max-w-full">
          {images.map((image) => (
            <div key={image.title} className="mx-8 flex-shrink-0">
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

export default MoviesTvShows;
