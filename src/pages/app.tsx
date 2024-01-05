// src/app.tsx
import { AppProps } from 'next/app';
import 'src/globals.css'; 

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
