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
    id: "expoSkill",
    skillTitle: "Expo / EAS",
    filePath: "frontend/expo.svg",
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

export const backendSkills: SkillModel[] = [
  {
    id: "nodejs",
    skillTitle: "NodeJS",
    filePath: "backend/nodejs.svg",
  },
  {
    id: "csharp",
    skillTitle: "C#",
    filePath: "backend/csharp.svg",
  },
  {
    id: "dotnet",
    skillTitle: ".NET",
    filePath: "backend/dotnet.svg",
  },
  {
    id: "azure",
    skillTitle: "Azure",
    filePath: "backend/azure.svg",
  },
  {
    id: "aws",
    skillTitle: "AWS",
    filePath: "backend/aws.svg",
  },
  {
    id: "firebase",
    skillTitle: "Firebase",
    filePath: "backend/firebase.svg",
  },
  {
    id: "sql",
    skillTitle: "SQL",
    filePath: "backend/sql.svg",
  },
  {
    id: "postgresql",
    skillTitle: "PostgresQL",
    filePath: "backend/postgresql.svg",
  },
];

export const toolsProcesses: SkillModel[] = [
  {
    id: "scrum",
    skillTitle: "Scrum / Scrum Master",
    filePath: "toolsprocesses/scrum.svg",
  },
  {
    id: "githubactions",
    skillTitle: "Github Actions",
    filePath: "toolsprocesses/githubactions.svg",
  },
  {
    id: "jenkins",
    skillTitle: "Jenkins",
    filePath: "toolsprocesses/jenkins.svg",
  },
  {
    id: "jira",
    skillTitle: "Jira",
    filePath: "toolsprocesses/jira.svg",
  },
  {
    id: "retool",
    skillTitle: "Retool",
    filePath: "toolsprocesses/retool.svg",
  },
];
