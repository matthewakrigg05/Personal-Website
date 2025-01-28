import React from "react";
import { PageTitle, TTTitle, ResearchClubTitle } from "./ExtraCurricularHeadings";
import { IntroText, ResearchClubText, TTText } from "./ExtraCurricularText";

const CodingClubPage = () => (
  <div>
    <main>
      <PageTitle />
      <IntroText />
      
      <ResearchClubTitle />
      <ResearchClubText />

      <TTTitle />
      <TTText />
    </main>
  </div>
);

export default CodingClubPage;