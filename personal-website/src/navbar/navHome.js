import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div>
            <Link to="/aboutMePage" id="aboutMe" title="Home">About Me</Link> 
        </div>
        ) 
    }