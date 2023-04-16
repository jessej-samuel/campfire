import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

export default function Home() {
  const { x, y } = useWindowScroll();
  const navRef = useRef();

  const NAVBG = "bg-inherit";

  useEffect(() => {
    if (y > 0) {
      navRef.current.classList.remove(NAVBG);
      navRef.current.classList.add("bg-black");
      navRef.current.classList.add("text-white");
    } else {
      navRef.current.classList.add(NAVBG);
      navRef.current.classList.remove("bg-black");
      navRef.current.classList.remove("text-white");
    }
  }, [y]);

  return (
    <>
      <nav
        ref={navRef}
        className={`sticky top-0 flex justify-between py-2 items-center transition-colors ${NAVBG}`}
      >
        <Link href="/" className="flex items-center  text-lg font-serif">
          <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
          Campfire
        </Link>
        <ul className="text-sm font-medium text-opacity-0 flex mx-8">
          <li className="mr-4 hover:text-blue-500 ">
            <Link href="/about">About</Link>
          </li>
          <li className="mr-4 hover:text-blue-500 ">
            <Link href="/contact" className="mr-4">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {/* TODO: Hero Section */}
    </>
  );
}
