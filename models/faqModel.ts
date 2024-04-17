import React from "react";

export interface FAQModel {
  id: string;
  questionTitle: string;
  showDetails: boolean;
  moreDetailsComponent: React.ComponentType;
}
