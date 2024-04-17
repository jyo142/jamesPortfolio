"use client";
import { FAQModel } from "@/models/faqModel";
import Image from "next/image";

interface FAQCardProps {
  faqModel: FAQModel;
  onToggle: any;
}
const FAQCard: React.FC<FAQCardProps> = ({ faqModel, onToggle }) => {
  return (
    <div className="mx-auto rounded shadow-lg bg-white p-3 px-8 m-3">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => onToggle(faqModel.id)}
      >
        <h2 className="flex justify-start text-xl">{faqModel.questionTitle}</h2>
        <div className="flex justify-end">
          {faqModel.showDetails ? (
            <Image
              src="/icons/chevron-up.svg"
              alt="Show More Details"
              width="16"
              height="16"
            />
          ) : (
            <Image
              src="/icons/chevron-down.svg"
              alt="Hide More Details"
              width="16"
              height="16"
            />
          )}
        </div>
      </div>
      {faqModel.showDetails && <faqModel.moreDetailsComponent />}
      {/* Render the component conditionally */}
    </div>
  );
};

export default FAQCard;
