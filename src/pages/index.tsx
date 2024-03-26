import React from "react";
import OtpInput from "react-otp-input";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styles from "../styles/global.module.css";
import {
  Button,
  CircularProgress,
  Modal,
  Typography,
  Popover,
  Alert,
  Stack,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";
import Swal from "sweetalert2";
import axios from "axios";

interface Word {
  _id: number;
  image: string;
  word: string;
  answer: string;
}

const STORAGE_KEY = "word_challenge_answers";

function HomePage() {
  const responsive = useMediaQuery("(max-width:728px)");

  const [otp, setOtp] = useState("");

  const [words, setWords] = useState<Word[]>([]);

  const [currentPage, setCurrentPage] = useState(0);
  const currentWord = words[currentPage];

  const [isDisable, setIsDisable] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/all-words");
      const data = response.data;
      const reversedData = data.reverse();
      setWords(reversedData);
      // setWords(data);
      console.log("reversedData:", reversedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    const savedAnswers = localStorage.getItem(STORAGE_KEY);

    if (savedAnswers) {
      const parsedAnswers = JSON.parse(savedAnswers);
      const lastAnsweredPage = parsedAnswers[parsedAnswers.length - 1];
      setCurrentPage(lastAnsweredPage);

      if (parsedAnswers.length > 0) {
        setShowModal(true);
      }
    }
  }, []);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  const notify = (answer: string) => {
    setIsDisable(true);

    toast(
      otp.toLocaleLowerCase() === answer.split(" ").join("").toLocaleLowerCase()
        ? "Congratulations correct answer!"
        : "Wrong answer try again!",
      {
        type:
          otp.toLocaleLowerCase() ===
          answer.split(" ").join("").toLocaleLowerCase()
            ? "success"
            : "error",
        position: "bottom-center",
        autoClose: 500,
      }
    );

    const clearOtp = setTimeout(() => {
      if (
        otp.toLocaleLowerCase() ===
        answer.split(" ").join("").toLocaleLowerCase()
      ) {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, words.length - 1));
        const savedAnswers = localStorage.getItem(STORAGE_KEY);
        const updatedAnswers = savedAnswers
          ? [...JSON.parse(savedAnswers), currentPage]
          : [currentPage];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedAnswers));
      }
      setOtp("");
      setIsDisable(false);
    }, 1500);

    return () => clearTimeout(clearOtp);
  };

  const handleContinue = () => {
    setShowModal(false);
    setCurrentPage((prevPage) => Math.max(0, prevPage + 1));
  };

  const handleRestart = () => {
    setShowModal(false);
    localStorage.removeItem(STORAGE_KEY);
    setCurrentPage(0);
  };

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "display-popover" : undefined;

  const showAnswer = currentWord?.answer
    .trim()
    .split(/\s+/)
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const otpLength = currentWord?.answer.split(" ").join("").length;

  const handleDelete = (id: number) => async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.delete(
          `http://localhost:4000/delete/${id}`
        );
        if (response.status !== 200) {
          throw new Error("Failed to delete word");
        }
        const updatedWords = words.filter((word) => word._id !== id);
        setWords(updatedWords);
        console.log("Word deleted successfully");

        Swal.fire("Deleted!", "Your word has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting word:", error);
        Swal.fire("Error!", "Failed to delete word.", "error");
      }
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          justifyContent: "center",
          mb: 2,
          mt: 2,
        }}
      >
        <Grid sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
          <img src="/img/w-word.png" width={50} alt="W" />
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            ord
          </Typography>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center", gap: 0.4 }}>
          <img src="/img/c-word.png" width={50} alt="C" />
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            hallenge
          </Typography>
        </Grid>
      </Grid>
      <hr />
      <form onSubmit={handleFormSubmit}>
        <div
          key={currentWord?._id}
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
              src={currentWord?.image}
              alt={currentWord?.word}
              style={{
                borderRadius: "30px",
                marginTop: "30px",
                boxShadow: "0 0 10px 0 #000000",
                width: "100%",
                height: "250px",
                minHeight: "420px",
                minWidth: "350px",
                objectFit: "cover",
              }}
            />
          </div>
          <div>
            <Button aria-describedby={id} onClick={handleClick}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 800,
                  cursor: "pointer",
                  color: "#000000",
                  textTransform: "none",
                }}
              >
                {currentWord?.word}
              </Typography>
            </Button>
          </div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
          >
            <Typography sx={{ p: 2 }}>{showAnswer}</Typography>
          </Popover>
          <div className={styles.otpInput}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={otpLength}
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
            <Button
              type="submit"
              sx={{
                borderRadius: "50px",
                background: isDisable ? "#bbbbbb" : "#00e800",
                outline: 0,
                border: isDisable
                  ? "2px solid #bbbbbb"
                  : "1px solid rgb(4 201 4)",
                padding: "8px 3.5rem",
                fontSize: "17px",
                cursor: "pointer",
                marginTop: "20px",
                transition: "background 0.3s ease",
                color: "#000000",
                fontWeight: 500,
                textTransform: "none",
                "&:hover": {
                  background: isDisable ? "#bbbbbb" : "rgb(4 201 4)",
                },
              }}
              onClick={() => notify(currentWord?.answer)}
              disabled={isDisable}
            >
              {isDisable ? (
                <CircularProgress size={24} sx={{ color: "#ffffff" }} />
              ) : (
                "Verify"
              )}
            </Button>

            <ToastContainer />
          </div>
          <div>
            <p style={{ fontWeight: 500 }}>
              <strong>
                {currentPage + 1}
                {/* {currentWord?._id} */}
              </strong>{" "}
              / {words.length}
            </p>
          </div>
        </div>
      </form>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 1,
          mb: 2,
        }}
      >
        <Stack spacing={2}>
          <Alert severity="info">
            If you don&apos;t know the answer, click on the word!
          </Alert>
        </Stack>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/add-new-word">
            <Button
              variant="contained"
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                backgroundColor: "#000000",
                padding: "8px 2rem",
                "&:hover": {
                  backgroundColor: "#313131",
                },
              }}
            >
              Add new word
            </Button>
          </Link>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            onClick={handleDelete(currentWord?._id)}
            variant="contained"
            sx={{
              borderRadius: "30px",
              textTransform: "none",
              backgroundColor: "#ffffff",
              padding: "7px 2.5rem",
              border: "1.8px solid #000000",
              color: "#000000",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#ddd",
              },
            }}
          >
            Delete Word
          </Button>
        </Grid>
      </Grid>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          border: "1px solid #000000",
        }}
      >
        <div
          style={{
            position: "absolute",
            maxWidth: "400px",
            width: "80%",
            backgroundColor: "#ffffff",
            padding: "24px",
            borderRadius: "30px",
            border: "1px solid #000000",
            top: "50%",
            left: "48%",
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 10px 0 #000000",
          }}
        >
          <h2 id="modal-modal-title">Resume or Restart?</h2>
          <Typography id="modal-modal-description" sx={{ mb: 3 }}>
            Do you want to continue from where you left off or restart from the
            beginning?
          </Typography>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              onClick={handleRestart}
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                padding: responsive ? "8px 1.5rem" : "8px 2rem",
              }}
            >
              I&apos;ll start again
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={handleContinue}
              sx={{
                borderRadius: "30px",
                textTransform: "none",
                padding: responsive ? "8px 2rem" : "8px 2.5rem",
              }}
            >
              I&apos;ll continue
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default HomePage;
