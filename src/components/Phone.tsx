import "./Phone.css";
import React from "react";

const Phone: React.FC = () => {
  return (
    <div className="App">
      <div className="mobile">
        <div className="phone">
          <div className="phone-mirror">
            <div className="topWrapper">
              <div className="camera"></div>
              <div className="line-rec"></div>
            </div>
            <img
              src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
              alt="oppo"
              height="535"
              width="312"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phone;
