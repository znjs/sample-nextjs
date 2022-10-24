import Image from "next/image";
import Link from "next/link";
import { logo } from "../public";

export const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src={logo} width={"95px"} height={"77px"} alt='logo' />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};
