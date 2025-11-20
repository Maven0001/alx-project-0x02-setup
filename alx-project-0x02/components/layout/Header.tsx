import "../../src/app/globals.css";
import Link from "next/link";

function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className="flex list-none">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/posts">Posts</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
