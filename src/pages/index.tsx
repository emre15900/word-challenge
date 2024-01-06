import React from "react";
import OtpInput from "react-otp-input";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/global.module.css";

interface Word {
  id: number;
  img: string;
  word: string;
  answer: string;
}

const words: readonly Word[] = [
  {
    id: 1,
    img: "https://media.istockphoto.com/id/1001374706/tr/vekt%C3%B6r/vekt%C3%B6r-%C5%9Fablonu-logo-o-harfi-%C3%A7izgili-tema-yarat%C4%B1c%C4%B1-minimalizm-logo-sembol-simge-amblemi.jpg?s=1024x1024&w=is&k=20&c=VlcJ2_OBq5V6tX1ixPot69J00ymFOCe5BwMJXNrPL-0=",
    word: "Accident",
    answer: "kaza",
  },
  {
    id: 2,
    img: "https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2018/11/Lorem-Ipsum-alternatives.png.webp",
    word: "Hilarious",
    answer: "komik",
  },
  {
    id: 3,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Chop",
    answer: "kesmek",
  },
];

function HomePage() {
  const [otp, setOtp] = useState("");

  const [currentPage, setCurrentPage] = useState(0);
  const currentWord = words[currentPage];

  useEffect(() => {
    setOtp("");
  }, [currentPage]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const notify = (answer: string) => {
    toast(
      otp === answer
        ? "Congratulations correct answer!"
        : "Wrong answer try again!",
      {
        type: otp === answer ? "success" : "error",
        position: "bottom-center",
        autoClose: 500,
      }
    );

    const clearOtp = setTimeout(() => {
      if (otp === answer) {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, words.length - 1));
      }
      setOtp("");
    }, 1500);

    return () => clearTimeout(clearOtp);
  };

  const [buttonStyle, setButtonStyle] = useState({
    borderRadius: "50px",
    background: "#00e800",
    outline: 0,
    border: "1px solid rgb(4 201 4)",
    padding: "12px 4rem",
    fontWeight: 400,
    fontSize: "17px",
    cursor: "pointer",
    marginTop: "20px",
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
    <div style={{ width: "100%" }}>
      <h1
        style={{ textAlign: "center", marginTop: "30px", marginBottom: "20px" }}
      >
        Word Challenge
      </h1>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <div
          key={currentWord.id}
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 10,
          }}
        >
          <div style={{ width: 350 }}>
            <img
              src={currentWord.img}
              alt={currentWord.word}
              style={{
                borderRadius: "30px",
                marginTop: "30px",
                boxShadow: "0 0 10px 0 #000000",
                width: "100%",
              }}
            />
          </div>
          <div>
            <h1>{currentWord.word}</h1>
          </div>
          <div className={styles.otpInput}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={currentWord.answer.length}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
              inputType="text"
              shouldAutoFocus
              inputStyle={{
                width: "42px",
                height: "42px",
                margin: "0 10px",
                fontSize: "20px",
                borderRadius: 80,
                border: "1px solid rgba(0,0,0,0.3)",
                fontWeight: 800,
              }}
            />
          </div>
          <div>
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={handleHover}
              onMouseLeave={handleMouseLeave}
              onClick={() => notify(currentWord.answer)}
            >
              Verify
            </button>
            <ToastContainer />
          </div>
          <div>
            <p style={{ fontWeight: 500 }}>
              <strong>{currentWord.id}</strong> / {words.length}
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default HomePage;
