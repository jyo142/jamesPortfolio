import React from "react";

export interface SkillModel {
  id: string;
  skillTitle: string;
  filePath: string;
}

export const frontendSkills: SkillModel[] = [
  {
    id: "javascriptSkill",
    skillTitle: "Javascript",
    filePath: "frontend/js.svg",
  },
  {
    id: "typescriptSkill",
    skillTitle: "Typescript",
    filePath: "frontend/typescript.svg",
  },
  {
    id: "htmlSkill",
    skillTitle: "HTML 5",
    filePath: "frontend/html5.svg",
  },
  {
    id: "cssSkill",
    skillTitle: "CSS 3",
    filePath: "frontend/css3.svg",
  },
  {
    id: "tailwindSkill",
    skillTitle: "Tailwind CSS",
    filePath: "frontend/tailwind.svg",
  },
  {
    id: "reactSkill",
    skillTitle: "React",
    filePath: "frontend/react.svg",
  },
  {
    id: "reduxSkill",
    skillTitle: "Redux",
    filePath: "frontend/redux.svg",
  },
  {
    id: "reactNativeSkill",
    skillTitle: "React Native",
    filePath: "frontend/react.svg",
  },
  {
    id: "nextjsSkill",
    skillTitle: "NextJS",
    filePath: "frontend/nextjs.svg",
  },
  {
    id: "vercelSkill",
    skillTitle: "Vercel",
    filePath: "frontend/vercel.svg",
  },
  {
    id: "flutterSkill",
    skillTitle: "Flutter",
    filePath: "frontend/flutter.svg",
  },
  {
    id: "cypressSkill",
    skillTitle: "Cypress",
    filePath: "frontend/cypress.svg",
  },
  {
    id: "jestSkill",
    skillTitle: "Jest",
    filePath: "frontend/jest.svg",
  },
];
