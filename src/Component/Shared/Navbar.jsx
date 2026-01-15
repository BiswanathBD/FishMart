import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-secondary py-1">
      <Container>
        <div className="flex justify-between items-center">
          <Logo />
          <ul className="flex gap-4 text-primary items-center">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
            <div className="relative">
              <input
                type="text"
                name="search"
                id=""
                className="pr-4 pl-8 py-1 bg-white/50 border border-primary/50 rounded-full outline-none focus:border-primary transition-all focus:bg-white focus:text-black/60"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                <CiSearch />
              </div>
            </div>

            <button className="bg-primary text-white px-4 py-1.5 rounded-full hover:bg-primary/90 transition-all text-sm font-medium">
              LOGIN
            </button>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
