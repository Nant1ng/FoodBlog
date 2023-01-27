import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <Link href="/" className="flex flex-row items-center space-x-2">
        <Image
          className="rounded-full"
          src="/FoodLogo.jpg"
          width={50}
          height={50}
          alt="logo"
        />
        <h1>Blog</h1>
      </Link>
    </header>
  );
}

export default Header;
