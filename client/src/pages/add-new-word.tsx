import React, { useState } from "react";
import { TextField, Grid, Typography, Button } from "@mui/material";
import axios from "axios";

import Link from "next/link";

function AddNewWord() {
  const [word, setWord] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState("");

  const handleAddWord = async () => {
    if (!word || !answer || !image) {
      console.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/add-new-word", {
        word: word,
        answer: answer,
        image: image,
      });
      console.log(response.data);
      setWord("");
      setAnswer("");
      setImage("");
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  return (
    <Grid>
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
      <Typography
        variant="h5"
        sx={{ fontWeight: 500, textAlign: "center", mb: 3, mt: 4 }}
      >
        Enter a new word
      </Typography>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            minWidth: 350,
          }}
        >
          <TextField
            fullWidth
            id="word"
            label="Word"
            variant="outlined"
            value={word}
            onChange={(e) => setWord(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px !important",
              },
            }}
          />
          <TextField
            fullWidth
            id="answer"
            label="Answer"
            variant="outlined"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px !important",
              },
            }}
          />
          <TextField
            fullWidth
            id="image"
            label="Image"
            variant="outlined"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px !important",
              },
            }}
          />
          <Button
            variant="contained"
            onClick={handleAddWord}
            sx={{
              borderRadius: "30px",
              backgroundColor: "#00198f",
              "&:hover": {
                backgroundColor: "#062cdf",
              },
            }}
          >
            Add
          </Button>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Grid>
              <Button
                variant="contained"
                onClick={handleAddWord}
                sx={{
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  width: "100%",
                  backgroundColor: "#000000",
                  "&:hover": {
                    backgroundColor: "#313131",
                  },
                }}
              >
                Back to Home
              </Button>
            </Grid>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddNewWord;
