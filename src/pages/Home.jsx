import React from "react";
import bgpng from "/src/images/bg.png";
import git from "/src/images/git.png";
import '../css/Home.css'
import { Link } from "react-router-dom";

export default function Home() {

  return (
    
    <div id="img-container">
      <img src={bgpng} alt="background" />
      <div id="img-overlay"></div>
      <div id="info-container">
        <div id="details">
            <h1>Generative <br /> <span id="t1">Radiology</span></h1>
            <p>Generating radiology reports from chest X-rays using <b>CheXnet</b>  <br />and <b>distillGPT2</b> by leveraging <b>Attention</b></p>
            <div id="buttons">

              <Link to="/login">
                <button id="b1" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16" id="svg1">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                    </svg>
                    Generate Reports
                </button>
              </Link>

                <a href="https://drive.google.com/drive/folders/1h4tBzENbGaQXZlbBXkhvN8hTX8KhjQAc?usp=drive_link">
                    <button id="b2">
                        <img src={git} alt="" id="git" />
                        Source Code
                    </button>
                </a>

            </div>
        </div>
      </div>
    </div>
  );
}
