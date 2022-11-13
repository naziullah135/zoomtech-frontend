import { CssBaseline, ThemeProvider } from "@mui/material"
import { Router, useRouter } from "next/router";
import { usePreviousRoute } from "../src/components/animations/usePreviousRoute";
import useTransition from "../src/components/animations/useTransition";
import MasterLayout from "../src/components/common/MasterLayout"
import { theme } from "../src/theme/theme"
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";
import Slides from "../src/components/animations/Slides";
import { useState } from "react";
import { useLayoutEffect } from "react";

function MyApp({ Component, pageProps }) {
  // const { start, end } = useTransition();
  // const { pathname, push } = useRouter();
  // const previousPath = usePreviousRoute();

  // const router = useRouter()




  // useEffect(() => {
  //   const handleStart = () => {
  //     start()
  //   }

  //   const handleStop = () => {
  //     setTimeout(() => {
  //       end()
  //     }, 1000);
  //   }

  //   router.events.on('routeChangeStart', handleStart)
  //   router.events.on('routeChangeComplete', handleStop)
  //   router.events.on('routeChangeError', handleStop)

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart)
  //     router.events.off('routeChangeComplete', handleStop)
  //     router.events.off('routeChangeError', handleStop)
  //   }
  // }, [router])


  // Router.events.on('routeChangeStart', (path, route) => {
  //   console.log(route);
  //   start()
  // });
  // Router.events.on('routeChangeComplete', (path) => {
  //   setTimeout(() => {
  //     end()
  //   }, 1000);
  // });
  // Router.events.on('routeChangeError', (path) => {
  //   setTimeout(() => {
  //     end()
  //   }, 1000);
  // });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Slides /> */}
      <MasterLayout>
        <NextNProgress
          color={theme.palette.primary.main}
          height={2}
        />
        <Component {...pageProps} />
      </MasterLayout>
    </ThemeProvider>
  )
}

export default MyApp
