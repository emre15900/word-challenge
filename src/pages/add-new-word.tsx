import React, { useState } from "react";
import { TextField, Grid, Typography, Button } from "@mui/material";
import axios from "axios";

function AddNewWord() {
  const [word, setWord] = useState("");
  const [answer, setAnswer] = useState("");
  const [image, setImage] = useState("");

  const handleAddWord = async () => {
    try {
      const response = await axios.post("http://localhost:4000/add-new-word", {
        word: word,
        answer: answer,
        image: image,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Error adding word:", error);
    }
  };

  return (
    <Grid>
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
            sx={{ borderRadius: "30px" }}
          >
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddNewWord;
