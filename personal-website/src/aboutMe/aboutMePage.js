import React from "react";
import NavigationBar from "../navbar/navigation";
import PageTitle from "./pageTitle";
import Introduction from "./introduction";
import Achievements from "./achievements";

const AboutMePage = () => (
  <div>
    <main>
      <PageTitle />
      <Introduction />
      <Achievements />
    </main>
  </div>
);

export default AboutMePage;