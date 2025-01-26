import React from "react";
import NavigationBar from "../navigation";
import PageTitle from "./pageTitle";
import Introduction from "./introduction";
import Achievements from "./achievements";

const AboutMePage = () => (
  <div>
    <NavigationBar />
    <main>
      <PageTitle />
      <Introduction />
      <Achievements />
    </main>
  </div>
);

export default AboutMePage;