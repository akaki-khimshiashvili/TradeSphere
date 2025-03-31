import Link from "next/link";

function Nav() {
  return (
    <>
      <nav className=" bg-white ">
        <div className="container mx-xl text-black flex justify-between m-auto py-2 px-2">
          <Link href="/" className="text-xl">
            TradeSphere
          </Link>

          <ul className="text-black flex gap-x-6 text-lg">
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>Q&A</li>
            <li>Charts</li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Nav;
