import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutMePage from './aboutMe/aboutMePage';
import CodingClubPage from './codingClub/CodingClubPage';
import ExtraCurricularPage from './extraCurricular/ExtraCurricularPage';
import MinorProjectsPage from './minorProjects/MinorProjectsPage';
import MajorProjectsPage from './majorProjects/MajorProjectsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>

        <Routes>     
            <Route exact path='/' element={<Navigate to='/AboutMe' />} />
            <Route path="/AboutMe"  element={<AboutMePage />} />
            <Route path="/CodingClub"  element={<CodingClubPage />}/>
            <Route path="/ExtraCurricular"  element={<ExtraCurricularPage />}/>
            <Route path="/MinorProjects"  element={<MinorProjectsPage />}/>
            <Route path="/MajorProjects"  element={<MajorProjectsPage />}/>
        </Routes>

        <App />

      </BrowserRouter>
  </React.StrictMode>
);
