import React from "react";
import NavigationBar from "../navbar/navigation";
import PageTitle from "./creatingClub";
import ClubDescription from "./createClubDesc";

const AboutMePage = () => (
  <div>
    <NavigationBar />
    <main>
      <PageTitle />
      <ClubDescription />
    </main>
  </div>
);

export default AboutMePage;