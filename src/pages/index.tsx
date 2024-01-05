// src/pages/index.js
import React from "react";

function HomePage() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>Word Challenge</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <div>
          <img
            src="https://media.istockphoto.com/id/1001374706/tr/vekt%C3%B6r/vekt%C3%B6r-%C5%9Fablonu-logo-o-harfi-%C3%A7izgili-tema-yarat%C4%B1c%C4%B1-minimalizm-logo-sembol-simge-amblemi.jpg?s=1024x1024&w=is&k=20&c=VlcJ2_OBq5V6tX1ixPot69J00ymFOCe5BwMJXNrPL-0="
            alt="word-img"
            width={400}
            style={{
              borderRadius: "30px",
              marginTop: "20px",
              boxShadow: "0 0 10px 0 #000000",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
