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
    img: "https://img.freepik.com/free-photo/closeup-view-twocar-collision_157027-3862.jpg?t=st=1707671064~exp=1707674664~hmac=5edcf44b3345b3f573f26a60b694e7855d639a51ff161420a675313cbde6f3cf&w=2000",
    word: "Accident",
    answer: "kaza",
  },
  {
    id: 2,
    img: "https://img.freepik.com/free-photo/view-funny-monkey-human-clothing_23-2150758516.jpg?t=st=1707671201~exp=1707674801~hmac=dc720e54c46888aa36e3c1be56e50a56eba8c38baf0f8e1e902a4f042450ebde&w=826",
    word: "Hilarious",
    answer: "komik",
  },
  {
    id: 3,
    img: "https://img.freepik.com/free-photo/grilled-fillet-steak-rustic-meal-wood-generated-by-ai_188544-22196.jpg?t=st=1707671236~exp=1707674836~hmac=56b4608a2b52165779e7a5bb847064d95db1e3ce6adaef398de6380168d5ee46&w=2000",
    word: "Chop",
    answer: "kesmek",
  },
  {
    id: 4,
    img: "https://img.freepik.com/free-photo/fast-fashion-concept-with-piles-clothes_23-2150871130.jpg?t=st=1707671324~exp=1707674924~hmac=90df44b3abc83d171c9f56fa8a3d02281085e07ed2c1ae51e1fb43f4b8470b41&w=740",
    word: "Various",
    answer: "Çeşitli",
  },
  {
    id: 5,
    img: "https://img.freepik.com/free-photo/painting-person-suffering-from-anxiety_23-2150859253.jpg?t=st=1707671390~exp=1707674990~hmac=130ad241a22fd7fd932b9f4f92f711d8e35b9c404d1bfdd88d632862ccba3db1&w=1800",
    word: "Suddenly",
    answer: "Birdenbire",
  },
  {
    id: 6,
    img: "",
    word: "Arranged",
    answer: "Düzenlemek",
  },
  {
    id: 7,
    img: "",
    word: "Temperature",
    answer: "Sıcaklık",
  },
  {
    id: 8,
    img: "",
    word: "Reach",
    answer: "Ulaşmak",
  },
  {
    id: 9,
    img: "",
    word: "Budget",
    answer: "Bütçe",
  },
  {
    id: 10,
    img: "",
    word: "Snuggle",
    answer: "Sarılmak",
  },
  {
    id: 11,
    img: "",
    word: "Swarm",
    answer: "Sürü",
  },
  {
    id: 12,
    img: "",
    word: "Raise",
    answer: "Yükseltmek",
  },
  {
    id: 13,
    img: "",
    word: "Dizziness",
    answer: "Baş dönmesi",
  },
  {
    id: 14,
    img: "",
    word: "Burglar",
    answer: "Hırsız",
  },
  {
    id: 15,
    img: "",
    word: "Handcuffs",
    answer: "Kelepçe",
  },
  {
    id: 16,
    img: "",
    word: "Release",
    answer: "Serbest Bırakmak",
  },
  {
    id: 17,
    img: "",
    word: "Explore",
    answer: "Keşfetmek",
  },
  {
    id: 18,
    img: "",
    word: "Candidate",
    answer: "Aday",
  },
  {
    id: 19,
    img: "",
    word: "Hurt",
    answer: "incinmek",
  },
  {
    id: 20,
    img: "",
    word: "Prepare",
    answer: "Hazırlanmak",
  },
  {
    id: 21,
    img: "",
    word: "Accommodation",
    answer: "Konaklama",
  },
  {
    id: 22,
    img: "",
    word: "Thick",
    answer: "Kalın",
  },
  {
    id: 23,
    img: "",
    word: "Spicy",
    answer: "Baharatlı",
  },
  {
    id: 24,
    img: "",
    word: "Condition",
    answer: "Koşul",
  },
  {
    id: 25,
    img: "",
    word: "Severe",
    answer: "Şiddetli",
  },
  {
    id: 26,
    img: "",
    word: "Loose",
    answer: "Gevşek",
  },
  {
    id: 27,
    img: "",
    word: "Carry",
    answer: "taşımak",
  },
  {
    id: 28,
    img: "",
    word: "Rise",
    answer: "Yükseliş",
  },
  {
    id: 29,
    img: "",
    word: "Proud",
    answer: "Gururlu",
  },
  {
    id: 30,
    img: "",
    word: "Tribe",
    answer: "Kabile",
  },
  {
    id: 31,
    img: "",
    word: "Cheek",
    answer: "Yanak",
  },
  {
    id: 32,
    img: "",
    word: "Thief",
    answer: "Hırsız",
  },
  {
    id: 33,
    img: "",
    word: "Bride",
    answer: "Gelin",
  },
  {
    id: 34,
    img: "",
    word: "Formal",
    answer: "Resmi",
  },
  {
    id: 35,
    img: "",
    word: "Greet",
    answer: "Selamlaşmak",
  },
  {
    id: 36,
    img: "",
    word: "Shaken",
    answer: "Sarsılmış",
  },
  {
    id: 37,
    img: "",
    word: "Whisk",
    answer: "çırpma teli",
  },
  {
    id: 38,
    img: "",
    word: "Slice",
    answer: "Dilim",
  },
  {
    id: 39,
    img: "",
    word: "Pour",
    answer: "Dökmek",
  },
  {
    id: 40,
    img: "",
    word: "Wicked",
    answer: "Kötü",
  },
  {
    id: 41,
    img: "",
    word: "Afford",
    answer: "Uygunluk",
  },
  {
    id: 42,
    img: "",
    word: "Attention",
    answer: "Dikkat",
  },
  {
    id: 43,
    img: "",
    word: "Definitely",
    answer: "kesinlikle",
  },
  {
    id: 44,
    img: "",
    word: "Sip",
    answer: "Yudumlamak",
  },
  {
    id: 45,
    img: "",
    word: "Literate",
    answer: "Okuryazar",
  },
  {
    id: 46,
    img: "",
    word: "Prescribe",
    answer: "Reçete",
  },
  {
    id: 47,
    img: "",
    word: "Contain",
    answer: "içermek",
  },
  {
    id: 48,
    img: "",
    word: "Terrible",
    answer: "Korkunç",
  },
  {
    id: 49,
    img: "",
    word: "Patient",
    answer: "Hasta",
  },
  {
    id: 50,
    img: "",
    word: "Surgery",
    answer: "Ameliyat",
  },
  {
    id: 51,
    img: "",
    word: "Appointment",
    answer: "Randevu",
  },
  {
    id: 52,
    img: "",
    word: "Furious",
    answer: "öfkeli",
  },
  {
    id: 53,
    img: "",
    word: "Participants",
    answer: "Katılımcı",
  },
  {
    id: 54,
    img: "",
    word: "Competition",
    answer: "Rekabet",
  },
  {
    id: 55,
    img: "",
    word: "Lip",
    answer: "Dudak",
  },
  {
    id: 56,
    img: "",
    word: "Wrist",
    answer: "Bilek",
  },
  {
    id: 57,
    img: "",
    word: "Addicted",
    answer: "Bağımlı",
  },
  {
    id: 58,
    img: "",
    word: "Injured",
    answer: "Yaralı",
  },
  {
    id: 59,
    img: "",
    word: "Pleasant",
    answer: "Hoş",
  },
  {
    id: 60,
    img: "",
    word: "Helpless",
    answer: "Çaresiz",
  },
  {
    id: 61,
    img: "",
    word: "Peel",
    answer: "Soymak",
  },
  {
    id: 62,
    img: "",
    word: "Charged",
    answer: "Ücretli",
  },
  {
    id: 63,
    img: "",
    word: "Court",
    answer: "mahkeme",
  },
  {
    id: 64,
    img: "",
    word: "Peaceful",
    answer: "Huzurlu",
  },
  {
    id: 65,
    img: "",
    word: "Suitable",
    answer: "Uygun",
  },
  {
    id: 66,
    img: "",
    word: "Wedding",
    answer: "Düğün",
  },
  {
    id: 67,
    img: "",
    word: "Cosy",
    answer: "Rahat",
  },
  {
    id: 68,
    img: "",
    word: "Crime",
    answer: "suç",
  },
  {
    id: 69,
    img: "",
    word: "Waving",
    answer: "El sallamak",
  },
  {
    id: 70,
    img: "",
    word: "Whisper",
    answer: "fısıltı",
  },
  {
    id: 71,
    img: "",
    word: "Prediction",
    answer: "Tahmin",
  },
  {
    id: 72,
    img: "",
    word: "Involve",
    answer: "Dahil Etmek",
  },
  {
    id: 73,
    img: "",
    word: "Deposit",
    answer: "mevduat",
  },
  {
    id: 74,
    img: "",
    word: "Stand",
    answer: "Ayakta durmak",
  },
  {
    id: 75,
    img: "",
    word: "Flock",
    answer: "Sürü",
  },
  {
    id: 76,
    img: "",
    word: "Shake",
    answer: "Sallamak",
  },
  {
    id: 77,
    img: "",
    word: "Determine",
    answer: "belirlemek",
  },
  {
    id: 78,
    img: "",
    word: "Crew",
    answer: "Mürettebat",
  },
  {
    id: 79,
    img: "",
    word: "Annual",
    answer: "Yıllık",
  },
  {
    id: 80,
    img: "",
    word: "Exhausting",
    answer: "Yorucu",
  },
  {
    id: 81,
    img: "",
    word: "Bump",
    answer: "Çarpmak",
  },
  {
    id: 82,
    img: "",
    word: "Acted",
    answer: "Oyunculuk",
  },
  {
    id: 83,
    img: "",
    word: "Silly",
    answer: "Aptalca",
  },
  {
    id: 84,
    img: "",
    word: "Disease",
    answer: "hastalık",
  },
  {
    id: 85,
    img: "",
    word: "Knowledge",
    answer: "Bilgi",
  },
  {
    id: 86,
    img: "",
    word: "Drug",
    answer: "uyuşturucu",
  },
  {
    id: 87,
    img: "",
    word: "Property",
    answer: "gayrimenkul",
  },
  {
    id: 88,
    img: "",
    word: "Unexpected",
    answer: "Beklenmedik",
  },
  {
    id: 89,
    img: "",
    word: "Might",
    answer: "Güçlü",
  },
  {
    id: 90,
    img: "",
    word: "Careless",
    answer: "Dikkatsiz",
  },
  {
    id: 91,
    img: "",
    word: "Seat",
    answer: "koltuk",
  },
  {
    id: 92,
    img: "",
    word: "Admit",
    answer: "itiraf etmek",
  },
  {
    id: 93,
    img: "",
    word: "Approach",
    answer: "Yaklaşım",
  },
  {
    id: 94,
    img: "",
    word: "Catch",
    answer: "Yakalamak",
  },
  {
    id: 95,
    img: "",
    word: "Certain",
    answer: "kesin",
  },
  {
    id: 96,
    img: "",
    word: "former",
    answer: "önceki",
  },
  {
    id: 97,
    img: "",
    word: "Pressure",
    answer: "Basınç",
  },
  {
    id: 98,
    img: "",
    word: "Represent",
    answer: "Temsil etmek",
  },
  {
    id: 99,
    img: "",
    word: "Society",
    answer: "Toplum",
  },
  {
    id: 100,
    img: "",
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
                height: "250px",
                minWidth: "350px",
                objectFit: "cover",
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
