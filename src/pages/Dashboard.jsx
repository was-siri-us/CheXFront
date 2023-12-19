import React, { useState } from "react";
import "../css/Dashboard.css";
import "../css/Home.css";
import defaultImage from "../images/lung.jpg";
import bg from "../images/dashboard.jpg";
import loadingIcon from "../images/loading.gif"; // Add the path to your loading icon
import "../components/Navbar"


export default function DashBoard() {
  const [imgFile, setImgFile] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");
  const [xrayImage, setXrayImage] = useState(defaultImage);
  const [loading, setLoading] = useState(false);

  const fileSelectHandler = (event) => {
    const file = event.target.files[0];
    setImgFile(file);
    setXrayImage(URL.createObjectURL(file));
    setResponseMessage("");
  };

  const fileUploadHandler = async () => {
    if (imgFile) {
      setLoading(true);

      const formData = new FormData();
      formData.append("image", imgFile);

      try {
        const response = await fetch("barely-ruling-whale.ngrok-free.app/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          const predictedValue = data["Predicted"];
          setResponseMessage(predictedValue);
        } else {
          console.error("Image upload failed.");
        }
      } catch (error) {
        console.error("Error during image upload:", error);
      } finally {
        setLoading(false);
      }
    } else {
      console.log("No file selected.");
    }
  };

  const clearHandler = () => {
    setImgFile(null);
    setXrayImage(defaultImage);
    setResponseMessage("");
  };

 

  return (
    <div id="img-container4">
      <img src={bg} alt="background" />
      <div id="img-overlay4"></div>
      <div id="dashboard-container">
        <div id="pred">
          <div id="xray">
            <img
              src={xrayImage}
              alt="X-ray Image"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <div id="output">
            {loading ? (
              <img src={loadingIcon} alt="Loading"  id="loader"/>
            ) : (
              <div className="output-text">{responseMessage}</div>
            )}
          </div>
        </div>

        <div id="gen-buttons">
          <label htmlFor="imginp" className="custom-file-input">
            Choose File
          </label>
          <input type="file" id="imginp" onChange={fileSelectHandler} className="gen1"></input>
          <button onClick={fileUploadHandler} id="b1" className="gen2">
            Generate
          </button>
          <button onClick={clearHandler} id="b2" className="gen3">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
