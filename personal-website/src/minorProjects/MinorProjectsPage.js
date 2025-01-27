import React from "react";
import { PageTitle, WeatherSiteTitle, CalcuatorAppTitle, FileLockingTitle } from "./MinorProjectHeadings";
import { IntroText } from "./MinorProjectText";

const MajorProjectsPage = () => (
  <div>
    <main>
        <PageTitle />
        <IntroText />

        <WeatherSiteTitle />

        <CalcuatorAppTitle />

        <FileLockingTitle />
    </main>
  </div>
);

export default MajorProjectsPage;