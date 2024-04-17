import React from "react";

export interface SkillModel {
  id: string;
  skillTitle: string;
  filePath: string;
  description?: string;
}

export const frontendSkills: SkillModel[] = [
  {
    id: "javascriptSkill",
    skillTitle: "JavaScript",
    filePath: "frontend/js.svg",
    description:
      "I have used JavaScript throughout my entire career to create a variety of dynamic content in web applications. I love its versatility, enabling me to develop both mobile and web applications, as well as client-side and server-side applications. Prototypal inheritance is awesome!",
  },
  {
    id: "typescriptSkill",
    skillTitle: "TypeScript",
    filePath: "frontend/typescript.svg",
    description:
      "As with JavaScript, I have also used TypeScript throughout my entire career. Although it can be limiting at times, static typing helps catch a lot of type-based errors that I have made and makes the code a lot easier to read, in my opinion. TypeScript generics are really cool!",
  },
  {
    id: "htmlSkill",
    skillTitle: "HTML 5",
    filePath: "frontend/html5.svg",
    description:
      "I have used HTML to create webpages since I first learned how to create web pages a long time ago. HTML makes it so easy to create standard components like tables or forms. Witnessing HTML evolve over the years, whether through the addition of new semantic elements or attributes, has been truly captivating.",
  },
  {
    id: "cssSkill",
    skillTitle: "CSS 3",
    filePath: "frontend/css3.svg",
    description:
      "CSS is essential for crafting stunning web pages! I've leveraged CSS to create responsive and visually captivating applications. The flexbox, grid and sticky css features are truly gifts sent from heaven!",
  },
  {
    id: "tailwindSkill",
    skillTitle: "Tailwind CSS",
    filePath: "frontend/tailwind.svg",
    description:
      "I recently discovered Tailwind CSS, and my only regret is not using it sooner! I love how easy it is to quickly build components due to its utility class-based approach. If possible, please utilize IntelliSense in your IDEs or code editors to make it easier to remember classes and to explore its other fantastic features. The space utility class is particularly impressive!",
  },
  {
    id: "reactSkill",
    skillTitle: "React",
    filePath: "frontend/react.svg",
    description:
      "React has been my go-to library for building web applications. The componentized nature of React makes it very easy to construct, debug, and test features of any web application. I love how React puts so much emphasis on performance, with the virtual DOM, and how the new compiler will automatically optimize and memoize components and values as needed.",
  },
  {
    id: "reduxSkill",
    skillTitle: "Redux",
    filePath: "frontend/redux.svg",
    description:
      "If I need to manage state in my React applications, I would use Redux! I love Redux for its ease of use and seamless debugging capabilities, thanks to the centralized store and the ability to perform time-travel debugging.",
  },
  {
    id: "reactNativeSkill",
    skillTitle: "React Native",
    filePath: "frontend/react.svg",
    description:
      "React Native was my first foray into cross-platform mobile applications. Thanks to my familiarity with JavaScript and React, I quickly learned and developed with ease. Despite its cross-platform nature, I appreciate how React Native seamlessly integrates with native functionality through native APIs and the ability to build native modules.",
  },
  {
    id: "expoSkill",
    skillTitle: "Expo / EAS",
    filePath: "frontend/expo.svg",
    description:
      "For some of my React Native applications, I've used Expo and EAS to streamline the development process. Expo and EAS simplify the building and deployment of applications, even providing Over The Air updates. Expo and EAS have saved our team significant time by handling the complexities of deploying to Android and iOS stores, including certificate and configuration management.",
  },
  {
    id: "nextjsSkill",
    skillTitle: "Next.js",
    filePath: "frontend/nextjs.svg",
    description:
      "At RentMarble, we integrated NextJS into our React application to enhance the developer experience and improve application performance. Next.js's handling of static assets and support for Server-Side Rendering (SSR) significantly boosted our application's performance, while hot module reloading accelerated the development process ",
  },
  {
    id: "vercelSkill",
    skillTitle: "Vercel",
    filePath: "frontend/vercel.svg",
    description:
      "While using Next.js, we employed Vercel because of its seamless deployment experience for Next.js applications. We loved using the preview deployments feature on our PRs and vercel's utilization of a global CDN helped to ensure fast page loads for our customers wherever they were located.",
  },
  {
    id: "flutterSkill",
    skillTitle: "Flutter",
    filePath: "frontend/flutter.svg",
    description:
      "I've used Flutter with Dart to explore cross-platform mobile development, and I can't praise it enough! Flutter's design system, based on Material UI, ensures a consistent UI throughout the entire application, and the Null-Safety feature helps prevent unnecessary errors. I'm excited about the prospect of using Flutter to develop desktop and web applications in the future as well!",
  },
  {
    id: "cypressSkill",
    skillTitle: "Cypress",
    filePath: "frontend/cypress.svg",
    description:
      "During my time on the Adobe Experience Platform team, we utilized Cypress for automated UI testing to ensure the robustness of every feature we developed. Personally, I was amazed by the magic of automated testing! Additionally, we seamlessly integrated Cypress into our CI/CD environment.",
  },
  {
    id: "jestSkill",
    skillTitle: "Jest",
    filePath: "frontend/jest.svg",
    description:
      "I've relied on Jest testing for the majority of my frontend projects. I appreciate Jest's simplicity and ease of setup. It seamlessly handles mocking modules and external libraries, and I particularly enjoy utilizing its code coverage feature",
  },
];

export const backendSkills: SkillModel[] = [
  {
    id: "nodejs",
    skillTitle: "NodeJS",
    filePath: "backend/nodejs.svg",
    description:
      "I was amazed that I was able to run Javascript on a backend environment with Node.js! Being able to use Javascript to write code for both the client and server makes it so much easier to create a web application end to end!",
  },
  {
    id: "csharp",
    skillTitle: "C#",
    filePath: "backend/csharp.svg",
    description:
      "During my time at Bizible/Adobe, we used C# along with .NET to build and power our web application. Because of its object oriented nature, C# was very easy to learn, especially fresh out of college. Using LINQ made my life so much easier and made me dream about C# in my sleep :)",
  },
  {
    id: "dotnet",
    skillTitle: ".NET",
    filePath: "backend/dotnet.svg",
    description:
      "At Bizible/Adobe, we utilized the .NET platform for both frontend and backend development. By leveraging ASP.NET and .NET Core, we seamlessly integrated with Azure, enabling us to build a high-performant, cross-platform application.",
  },
  {
    id: "azure",
    skillTitle: "Azure",
    filePath: "backend/azure.svg",
    description:
      "We used Azure as our cloud computing platform at Bizible/Adobe. We utilized an abundance of features on Azure such as Table Storage, Blob Storage, AAD, Keyvault, and App Services to name a few. Azure made it very easy for us to configure and monitor the state of our application.",
  },
  {
    id: "aws",
    skillTitle: "AWS",
    filePath: "backend/aws.svg",
    description:
      "At Rentmarble, we utilized AWS as our cloud computing platform. We relied on S3 for storage, while EC2 served as the hosting solution for our servers. Additionally, we leveraged the CDK to streamline infrastructure management through code.",
  },
  {
    id: "firebase",
    skillTitle: "Firebase",
    filePath: "backend/firebase.svg",
    description:
      "I've been utilizing Firebase as the platform to manage my application built in Flutter/Dart. I've utilized Firebase's authentication feature, the NoSQL Firestore database, Cloud Functions, and FCM messaging for push notifications. I appreciate the additional extensions that Firebase offers, such as sending emails and SMS messages, as well as the ability to handle payments with Stripe integration.",
  },
  {
    id: "sql",
    skillTitle: "SQL",
    filePath: "backend/sql.svg",
    description:
      "We utilized SQL to manage our relational databases at Bizible/Adobe. I appreciate the efficiency of SQL in storing, retrieving, manipulating, and analyzing data effectively and efficiently. Views in SQL are particularly useful because they allow us to encapsulate queries into a single object, reducing complexity and promoting code reusability.",
  },
  {
    id: "postgresql",
    skillTitle: "PostgreSQL",
    filePath: "backend/postgresql.svg",
    description:
      "At RentMarble, we used PostgreSQL as our RDBMS. While leveraging the benefits of SQL, we found the support for complex data types like JSON and arrays especially valuable for representing complex customer data.",
  },
];

export const toolsProcesses: SkillModel[] = [
  {
    id: "scrum",
    skillTitle: "Scrum / Scrum Master",
    filePath: "toolsprocesses/scrum.svg",
    description:
      "I used Scrum to facilitate our team's agile development process. I appreciate how Scrum divides projects into sprints, each aimed at completing a small, shippable increment of the project. Additionally, I served as Scrum Master, trying to manage the balance between resolving technical debt and implementing new features.",
  },
  {
    id: "githubactions",
    skillTitle: "Github Actions",
    filePath: "toolsprocesses/githubactions.svg",
    description:
      "I have experience using GitHub Actions for setting up CI/CD pipelines.. I appreciate the ability to trigger workflows based on common GitHub actions like opening or merging a pull request. Additionally, it is very convenient to create custom workflows using YAML.",
  },
  {
    id: "jenkins",
    skillTitle: "Jenkins",
    filePath: "toolsprocesses/jenkins.svg",
    description: "",
  },
  {
    id: "jira",
    skillTitle: "Jira",
    filePath: "toolsprocesses/jira.svg",
    description:
      "Jira was essential for project management as it was able to offer tools for issue and bug tracking. Its seamless integration with agile principles helped us to stay focused on sprint objectives and helped us plan more accurately by keeping track of our sprint velocity",
  },
  {
    id: "retool",
    skillTitle: "Retool",
    filePath: "toolsprocesses/retool.svg",
    description:
      "As a low-code tool with predefined UI components, it was very easy to use Retool to build tools and dashboards to trigger workflows and monitor the state of the system.",
  },
];
