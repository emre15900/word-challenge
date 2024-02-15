import Document, { Html, Main, NextScript, Head } from "next/document";
import Link from "next/link";
import { Box, Grid } from "@mui/material";

export default class MyDocument extends Document {
  render() {
    const favicon = "/img/favicon.jpg";
    return (
      <Html>
        <Head>
          <title>Emre Sayın - Word Challenge</title>
          <meta name="description" content="Emre Sayın | Word Challenge" />
          <meta name="keywords" content="Emre Sayın, word challenge, word" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#322d97" />
          <link href={favicon} rel="icon" />
          <meta name="author" content="Emre-Sayin" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Grid>
            <Link href="https://sayinweb.com/">
              <Box
                sx={{
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <Grid sx={{ mr: 2 }}>
                  <img src={favicon} width={50} alt="Emre Sayın" />
                </Grid>
              </Box>
            </Link>
          </Grid>
        </body>
      </Html>
    );
  }
}
