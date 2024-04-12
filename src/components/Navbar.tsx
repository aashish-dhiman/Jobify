import logo from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ModeToggle } from "./Toggle";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <header className="fixed left-0 top-0 z-[20] w-full shadow-sm backdrop-blur">
      <nav className="m-auto flex max-w-5xl items-center justify-between px-3 py-5">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} width={120} height={50} alt="Jobify logo" />
          <span className="sr-only">Jobify</span>
        </Link>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <Button asChild>
            <Link href="/jobs/new">New Job</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
