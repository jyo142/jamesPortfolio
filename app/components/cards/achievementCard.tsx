"use client";
interface AchievementCardProps {
  titleComponent: React.ComponentType;
  imageComponent: React.ComponentType;
  hrefLink: string;
}

const AchievementCard: React.FC<AchievementCardProps> = ({
  titleComponent: TitleComponent,
  imageComponent: ImageComponent,
  hrefLink,
}) => {
  return (
    <a
      className="achievement-card"
      href={hrefLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex justify-center">
        <h2 className="text-2xl">
          <TitleComponent />
        </h2>
      </div>
      <div className="flex justify-center mt-3">
        <ImageComponent />
      </div>
    </a>
  );
};

export default AchievementCard;
