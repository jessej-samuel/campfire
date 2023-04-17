import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Campfire</title>
        <meta name="description" content="Find your perfect campsite." />
      </Head>
      <Navbar />
      <HeroSection />
    </>
  );
}
