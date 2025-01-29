import React from "react";
import { PageTitle, FinalProjectTitle, WebsiteTitle } from "./MajorProjectsHeadings";
import { IntroText } from "./MajorProejectsText";

const MajorProjectsPage = () => (
  <div>
    <head>
      <title>Major Personal Projects</title>
    </head>

    <main>
        <PageTitle />
        <IntroText />

        <FinalProjectTitle />

        <WebsiteTitle />

    </main>
  </div>
);

export default MajorProjectsPage;