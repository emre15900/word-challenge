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
  {
    id: 4,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Various",
    answer: "Çeşitli",
  },
  {
    id: 5,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Suddenly",
    answer: "Birdenbire",
  },
  {
    id: 6,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Arranged",
    answer: "Düzenlemek",
  },
  {
    id: 7,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Temperature",
    answer: "Sıcaklık",
  },
  {
    id: 8,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Reach",
    answer: "Ulaşmak",
  },
  {
    id: 9,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Budget",
    answer: "Bütçe",
  },
  {
    id: 10,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Snuggle",
    answer: "Sarılmak",
  },
  {
    id: 11,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Swarm",
    answer: "Sürü",
  },
  {
    id: 12,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Raise",
    answer: "Yükseltmek",
  },
  {
    id: 13,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Dizziness",
    answer: "Baş dönmesi",
  },
  {
    id: 14,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Burglar",
    answer: "Hırsız",
  },
  {
    id: 15,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Handcuffs",
    answer: "Kelepçe",
  },
  {
    id: 16,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Release",
    answer: "Serbest Bırakmak",
  },
  {
    id: 17,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Explore",
    answer: "Keşfetmek",
  },
  {
    id: 18,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Candidate",
    answer: "Aday",
  },
  {
    id: 19,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Hurt",
    answer: "incinmek",
  },
  {
    id: 20,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Prepare",
    answer: "Hazırlanmak",
  },
  {
    id: 21,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Accommodation",
    answer: "Konaklama",
  },
  {
    id: 22,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Thick",
    answer: "Kalın",
  },
  {
    id: 23,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Spicy",
    answer: "Baharatlı",
  },
  {
    id: 24,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Condition",
    answer: "Koşul",
  },
  {
    id: 25,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Severe",
    answer: "Şiddetli",
  },
  {
    id: 26,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Loose",
    answer: "Gevşek",
  },
  {
    id: 27,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Carry",
    answer: "taşımak",
  },
  {
    id: 28,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Rise",
    answer: "Yükseliş",
  },
  {
    id: 29,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Proud",
    answer: "Gururlu",
  },
  {
    id: 30,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Tribe",
    answer: "Kabile",
  },
  {
    id: 31,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Cheek",
    answer: "Yanak",
  },
  {
    id: 32,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Thief",
    answer: "Hırsız",
  },
  {
    id: 33,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Bride",
    answer: "Gelin",
  },
  {
    id: 34,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Formal",
    answer: "Resmi",
  },
  {
    id: 35,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Greet",
    answer: "Selamlaşmak",
  },
  {
    id: 36,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Shaken",
    answer: "Sarsılmış",
  },
  {
    id: 37,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Whisk",
    answer: "çırpma teli",
  },
  {
    id: 38,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Slice",
    answer: "Dilim",
  },
  {
    id: 39,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Pour",
    answer: "Dökmek",
  },
  {
    id: 40,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Wicked",
    answer: "Kötü",
  },
  {
    id: 41,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Afford",
    answer: "Uygunluk",
  },
  {
    id: 42,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Attention",
    answer: "Dikkat",
  },
  {
    id: 43,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Definitely",
    answer: "kesinlikle",
  },
  {
    id: 44,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Sip",
    answer: "Yudumlamak",
  },
  {
    id: 45,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Literate",
    answer: "Okuryazar",
  },
  {
    id: 46,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Prescribe",
    answer: "Reçete",
  },
  {
    id: 47,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Contain",
    answer: "içermek",
  },
  {
    id: 48,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Terrible",
    answer: "Korkunç",
  },
  {
    id: 49,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Patient",
    answer: "Hasta",
  },
  {
    id: 50,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Surgery",
    answer: "Ameliyat",
  },
  {
    id: 51,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Appointment",
    answer: "Randevu",
  },
  {
    id: 52,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Furious",
    answer: "öfkeli",
  },
  {
    id: 53,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Participants",
    answer: "Katılımcı",
  },
  {
    id: 54,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Competition",
    answer: "Rekabet",
  },
  {
    id: 55,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Lip",
    answer: "Dudak",
  },
  {
    id: 56,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Wrist",
    answer: "Bilek",
  },
  {
    id: 57,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Addicted",
    answer: "Bağımlı",
  },
  {
    id: 58,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Injured",
    answer: "Yaralı",
  },
  {
    id: 59,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Pleasant",
    answer: "Hoş",
  },
  {
    id: 60,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Helpless",
    answer: "Çaresiz",
  },
  {
    id: 61,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Peel",
    answer: "Soymak",
  },
  {
    id: 62,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Charged",
    answer: "Ücretli",
  },
  {
    id: 63,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Court",
    answer: "mahkeme",
  },
  {
    id: 64,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Peaceful",
    answer: "Huzurlu",
  },
  {
    id: 65,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Suitable",
    answer: "Uygun",
  },
  {
    id: 66,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Wedding",
    answer: "Düğün",
  },
  {
    id: 67,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Cosy",
    answer: "Rahat",
  },
  {
    id: 68,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Crime",
    answer: "suç",
  },
  {
    id: 69,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Waving",
    answer: "El sallamak",
  },
  {
    id: 70,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Whisper",
    answer: "fısıltı",
  },
  {
    id: 71,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Prediction",
    answer: "Tahmin",
  },
  {
    id: 72,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Involve",
    answer: "Dahil Etmek",
  },
  {
    id: 73,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Deposit",
    answer: "mevduat",
  },
  {
    id: 74,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Stand",
    answer: "Ayakta durmak",
  },
  {
    id: 75,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Flock",
    answer: "Sürü",
  },
  {
    id: 76,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Shake",
    answer: "Sallamak",
  },
  {
    id: 77,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Determine",
    answer: "belirlemek",
  },
  {
    id: 78,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Crew",
    answer: "Mürettebat",
  },
  {
    id: 79,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Annual",
    answer: "Yıllık",
  },
  {
    id: 80,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Exhausting",
    answer: "Yorucu",
  },
  {
    id: 81,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Bump",
    answer: "Çarpmak",
  },
  {
    id: 82,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Acted",
    answer: "Oyunculuk",
  },
  {
    id: 83,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Silly",
    answer: "Aptalca",
  },
  {
    id: 84,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Disease",
    answer: "hastalık",
  },
  {
    id: 85,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Knowledge",
    answer: "Bilgi",
  },
  {
    id: 86,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Drug",
    answer: "uyuşturucu",
  },
  {
    id: 87,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Property",
    answer: "gayrimenkul",
  },
  {
    id: 88,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Unexpected",
    answer: "Beklenmedik",
  },
  {
    id: 89,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Might",
    answer: "Güçlü",
  },
  {
    id: 90,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Careless",
    answer: "Dikkatsiz",
  },
  {
    id: 91,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Seat",
    answer: "koltuk",
  },
  {
    id: 92,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Admit",
    answer: "itiraf etmek",
  },
  {
    id: 93,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Approach",
    answer: "Yaklaşım",
  },
  {
    id: 94,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Catch",
    answer: "Yakalamak",
  },
  {
    id: 95,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Certain",
    answer: "kesin",
  },
  {
    id: 96,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "former",
    answer: "önceki",
  },
  {
    id: 97,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Pressure",
    answer: "Basınç",
  },
  {
    id: 98,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Represent",
    answer: "Temsil etmek",
  },
  {
    id: 99,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Society",
    answer: "Toplum",
  },
  {
    id: 100,
    img: "https://i.ytimg.com/vi/ZYVX0wviSgQ/maxresdefault.jpg",
    word: "Violence",
    answer: "Şiddet",
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
      otp.toLocaleLowerCase() === answer.toLocaleLowerCase()
        ? "Congratulations correct answer!"
        : "Wrong answer try again!",
      {
        type:
          otp.toLocaleLowerCase() === answer.toLocaleLowerCase()
            ? "success"
            : "error",
        position: "bottom-center",
        autoClose: 500,
      }
    );

    const clearOtp = setTimeout(() => {
      if (otp.toLocaleLowerCase() === answer.toLocaleLowerCase()) {
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
