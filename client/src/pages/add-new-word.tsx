import React from "react";
import { TextField, Grid, Typography, Button } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import { Formik, Form, Field, FormikHelpers } from "formik";
import * as Yup from "yup";

// Form values type
interface FormValues {
  word: string;
  answer: string;
  image: string;
}

// Form validation schema
const validationSchema = Yup.object().shape({
  word: Yup.string().required("Word is required"),
  answer: Yup.string().required("Answer is required"),
  image: Yup.string()
    // .url("Invalid URL format")
    .matches(
      /\.(jpeg|jpg|gif|png|webp)$/,
      "Image must have a valid file extension (.jpg, .jpeg, .gif, .png, .webp)"
    )
    .required("Image URL is required"),
});

function AddNewWord() {
  const router = useRouter();

  const handleAddWord = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/words`,
        {
          word: values.word,
          answer: values.answer,
          image: values.image,
        }
      );

      if (response.status === 201) {
        toast.success("Word added successfully!");
        resetForm();

        setTimeout(() => {
          router.push("/");
        }, 1500);
      } else {
        toast.error("Failed to add the word. Please try again.");
      }
    } catch (error) {
      toast.error("Error adding word. Please try again.");
      console.error("Error adding word:", error);
    }
  };

  return (
    <Grid>
      <ToastContainer position="bottom-center" />

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
            minWidth: 340,
            maxWidth: 450,
          }}
        >
          <Formik
            initialValues={{ word: "", answer: "", image: "" }}
            validationSchema={validationSchema}
            onSubmit={handleAddWord}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  fullWidth
                  id="word"
                  name="word"
                  label="Word"
                  variant="outlined"
                  error={touched.word && Boolean(errors.word)}
                  helperText={touched.word && errors.word}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "30px !important",
                    },
                  }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="answer"
                  name="answer"
                  label="Answer"
                  variant="outlined"
                  error={touched.answer && Boolean(errors.answer)}
                  helperText={touched.answer && errors.answer}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "30px !important",
                    },
                    mt: 2,
                  }}
                />
                <Field
                  as={TextField}
                  fullWidth
                  id="image"
                  name="image"
                  label="Image"
                  variant="outlined"
                  error={touched.image && Boolean(errors.image)}
                  helperText={touched.image && errors.image}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "30px !important",
                    },
                    mt: 2,
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    borderRadius: "30px",
                    backgroundColor: "#00198f",
                    width: "100%",
                    padding: "8px 2rem",
                    "&:hover": {
                      backgroundColor: "#062cdf",
                    },
                    mt: 2,
                  }}
                >
                  Add
                </Button>
              </Form>
            )}
          </Formik>
          <Link href="/" style={{ textDecoration: "none" }}>
            <Grid>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  width: "100%",
                  padding: "8px 2rem",
                  backgroundColor: "#000000",
                  "&:hover": {
                    backgroundColor: "#313131",
                  },
                  mt: 1,
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
