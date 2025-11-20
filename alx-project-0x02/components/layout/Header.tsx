import "../../app/globals.css";

function Header() {
  return (
    <>
      <div className="flex">
        <img src="../public/globe.svg" alt="globe" />

        <ul className="flex list-none bg-blue-400">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>FAQs</li>
        </ul>
      </div>
    </>
  );
}

export default Header;
