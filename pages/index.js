import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="border-b shadow">
        <Link href="/" className="flex items-center text-lg">
          <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
          Campfire
        </Link>
      </nav>
    </div>
  );
}
