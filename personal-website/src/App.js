import AboutMePage from "./aboutMe/aboutMePage.js";
import CodingClubPage from "./codingClub/CodingClubPage.js";
import NavigationBar from "./navbar/navigation.js";
import { Route, Routes } from "react-router-dom";
import './App.css';

function App() { 
    return ( 
        <div>
            <NavigationBar />

            <div>
                <Routes>        
                    <Route path="/AboutMe"  element={<AboutMePage />} />
                    <Route path="/CodingClub"  element={<CodingClubPage />}/>
                </Routes>
            </div>

        </div> 
    ); 
}

export default App;