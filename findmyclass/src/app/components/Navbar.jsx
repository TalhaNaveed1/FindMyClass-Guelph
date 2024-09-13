import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-black pt-6 pb-6">
      <nav className="flex flex-row justify-center items-center">
        <Link href="/" className="navBarLink">
          <button className="flex flex-row text-white font-sans font-bold text-3xl ml-5 ">
            FindMy
            <p className="text-blue-700">
              <em>Class</em>
            </p>
            <Image
              src="/images/magnifiying.png"
              alt="Magnifiying pic"
              width={25}
              height={25}
              className="ml-1 "
            />
          </button>
        </Link>
      </nav>
    </div>
  );
}
