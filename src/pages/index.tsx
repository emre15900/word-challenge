import React from "react";
import OtpInput from "react-otp-input";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomePage() {
  const [otp, setOtp] = useState("");
  const notify = () =>
    toast("Congratulations correct answer!", { type: "success", position: "bottom-center" });

  const [buttonStyle, setButtonStyle] = useState({
    borderRadius: "50px",
    background: "#00e800",
    outline: 0,
    border: "1px solid rgb(4 201 4)",
    padding: "15px 5rem",
    fontWeight: 400,
    fontSize: "17px",
    cursor: "pointer",
    marginTop: "30px",
    transition: "background 0.3s ease",
    color: "#000",
  });

  const handleHover = () => {
    setButtonStyle({
      ...buttonStyle,
      background: "rgb(4 201 4)",
      color: "#fff",
    });
  };

  const handleMouseLeave = () => {
    setButtonStyle({
      ...buttonStyle,
      background: "#00e800",
      color: "#000",
    });
  };

  return (
    <div>
      <h1
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "30px" }}
      >
        Word Challenge
      </h1>
      <hr />
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <div style={{ width: 400 }}>
          <img
            src="https://media.istockphoto.com/id/1001374706/tr/vekt%C3%B6r/vekt%C3%B6r-%C5%9Fablonu-logo-o-harfi-%C3%A7izgili-tema-yarat%C4%B1c%C4%B1-minimalizm-logo-sembol-simge-amblemi.jpg?s=1024x1024&w=is&k=20&c=VlcJ2_OBq5V6tX1ixPot69J00ymFOCe5BwMJXNrPL-0="
            alt="word-img"
            style={{
              borderRadius: "30px",
              marginTop: "40px",
              boxShadow: "0 0 10px 0 #000000",
              width: "100%",
            }}
          />
        </div>
        <div>
          <h1>Accident</h1>
        </div>
        <div>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputType="text"
            shouldAutoFocus
            inputStyle={{
              width: "50px",
              height: "50px",
              margin: "0 10px",
              fontSize: "20px",
              borderRadius: 50,
              border: "1px solid rgba(0,0,0,0.3)",
              fontWeight: 800,
            }}
          />
        </div>
        <div>
          <button
            style={buttonStyle}
            onMouseOver={handleHover}
            onMouseLeave={handleMouseLeave}
            onClick={notify}
          >
            Verify
          </button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
