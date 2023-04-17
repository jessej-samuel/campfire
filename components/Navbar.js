import Link from "next/link";
import { useEffect, useRef } from "react";
import { useWindowScroll } from "react-use";

const Navbar = () => {
  const { x, y } = useWindowScroll();
  const navRef = useRef();

  const NAVBG = "bg-inherit";

  useEffect(() => {
    if (y > 0) {
      navRef.current.classList.remove(NAVBG);
      navRef.current.classList.add(
        "bg-black",
        "dark:bg-neutral-100",
        "dark:text-black",
        "text-white"
      );
    } else {
      navRef.current.classList.add(NAVBG);
      navRef.current.classList.remove(
        "bg-black",
        "dark:bg-neutral-100",
        "dark:text-black",
        "text-white"
      );
    }
  }, [y]);
  return (
    <nav
      ref={navRef}
      className={`sticky px-4 top-0 flex justify-between py-4 items-center transition-colors ${NAVBG}`}
    >
      <Link href="/" className="flex items-center  text-lg font-serif">
        {/* <Image
		src="/images/logo.png"
		className="block dark:hidden"
		alt="Logo"
		width={48}
		height={48}
	  />
	  <Image
		src="/images/logo-dark.png"
		className="hidden dark:block"
		alt="Logo"
		width={48}
		height={48}
	  /> */}
        Campfire
      </Link>
      <ul className="text-sm font-medium text-opacity-0 flex gap-4">
        <li className=" hover:text-blue-500 ">
          <Link href="/about">About</Link>
        </li>
        <li className=" hover:text-blue-500 ">
          <Link href="/contact">Contact</Link>
        </li>
        <li className=" hover:text-blue-500 ">
          <Link href="/contact">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
