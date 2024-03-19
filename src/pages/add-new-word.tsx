import React from "react";
import { TextField, Grid, Typography, Button } from "@mui/material";

function AddNewWord() {
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
            id="name"
            label="Name"
            variant="outlined"
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
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px !important",
              },
            }}
          />
          <TextField
            fullWidth
            id="img"
            label="Image"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: "30px !important",
              },
            }}
          />
          <Button variant="contained" sx={{ borderRadius: "30px" }}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default AddNewWord;
