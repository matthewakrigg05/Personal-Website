import AboutMePage from "./aboutMe/aboutMePage.js";
import CodingClubPage from "./codingClub/CodingClubPage.js";
import NavigationBar from "./navbar/navigation.js";
import ExtraCurricularPage from "./extraCurricular/ExtraCurricularPage.js";
import MinorProjectsPage from "./minorProjects/MinorProjectsPage.js";
import { Route, Routes } from "react-router-dom";
import './App.css';
import MajorProjectsPage from "./majorProjects/MajorProjectsPage.js";

function App() { 
    return ( 
        <div>
            <NavigationBar />

            <div>
                <Routes>        
                    <Route path="/AboutMe"  element={<AboutMePage />} />
                    <Route path="/CodingClub"  element={<CodingClubPage />}/>
                    <Route path="/ExtraCurricular"  element={<ExtraCurricularPage />}/>
                    <Route path="/MinorProjects"  element={<MinorProjectsPage />}/>
                    <Route path="/MajorProjects"  element={<MajorProjectsPage />}/>
                </Routes>
            </div>

        </div> 
    ); 
}

export default App;