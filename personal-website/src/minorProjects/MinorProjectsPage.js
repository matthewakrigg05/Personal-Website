import React from "react";
import { PageTitle, WeatherSiteTitle, CalcuatorAppTitle, FileLockingTitle } from "./MinorProjectHeadings";
import { IntroText } from "./MinorProjectText";

const MinorProjectsPage = () => (
  <div>
    <head>
      <title>Major Personal Projects</title>
    </head>
    
    <main>
        <PageTitle />
        <IntroText />

        <WeatherSiteTitle />

        <CalcuatorAppTitle />

        <FileLockingTitle />
    </main>
  </div>
);

export default MinorProjectsPage;