import { navLinks } from "./data";
import hamburger from "../assets/hamburger.svg";

export default function Navbar() {
  return (
    <header className=" py-6 z-30 w-full fixed shadow-lg bg-white">
      <nav className="flex justify-center items-center max-container">
        <ul className="flex-1 flex justify-start px-24 items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a className="hover:text-yellow-500 font-normal" href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block justify-end">
          {/* <img src={hamburger} alt="hamburger" width={25} high={25} /> */}
        </div>
      </nav>
    </header>
  );
}
