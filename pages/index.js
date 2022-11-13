import React from 'react';
import Head from 'next/head'
import { Box, useMediaQuery } from '@mui/material';
import Banner from '/src/components/Home/Banner';
import Clients from '/src/components/Home/Clients';
import Contact from '/src/components/Home/Contact/Contact';
import CustomerStories from '/src/components/Home/CustomerStories';
import ECommerce from '/src/components/Home/ECommerce';
import Features from '/src/components/Home/Features';
import Services from '/src/components/Home/Services';
import GettingStart from '/src/components/Home/GettingStart';
import Reliance from '/src/components/Home/Reliance';
import Retouch from '../src/components/Home/Retouch';
import ServedIndustries from '/src/components/Home/ServedIndustries';

export default function Home() {
  const isXsDevice = useMediaQuery(theme => theme.breakpoints.down("sm"))
  return (
    <>
      <Head>
        <title>Home - Zoom Tech Street</title>
        <meta name="description" content="Home" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box component={"main"}>
        <Banner isXsDevice={isXsDevice} />
        <Clients />
        <Retouch isXsDevice={isXsDevice} />
        <ECommerce isXsDevice={isXsDevice} />
        <Reliance isXsDevice={isXsDevice} />
        <Services />
        <ServedIndustries />
        <Features isXsDevice={isXsDevice} />
        <GettingStart isXsDevice={isXsDevice} />
        <CustomerStories />
        <Contact />
      </Box>
    </>
  )
}
