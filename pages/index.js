import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useWindowScroll } from "react-use";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

export default function Home() {
  

  return (
    <>
      <Navbar />
      <HeroSection />
    </>
  );
}
