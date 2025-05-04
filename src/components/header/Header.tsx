"use client";

import Link from "next/link";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 md:py-6 px-4 bg-huly-background/90 backdrop-blur-sm fixed top-0 left-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <Logo className="h-8 w-8" />
          </Link>
          <Navigation className="hidden md:flex" />
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/hcengineering/platform"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center text-13 text-grey-90 hover:text-white transition-colors duration-200 font-medium"
          >
            Star Us
          </a>
          <Link
            href="/login"
            className="text-13 text-grey-90 hover:text-white transition-colors duration-200 font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="text-13 bg-white text-huly-dark px-3 py-1.5 rounded font-medium"
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-huly-background transition-all duration-300 overflow-hidden ${isOpen ? "max-h-screen py-4" : "max-h-0"}`}>
        <Navigation className="flex flex-col px-4" isMobile={true} />
        <div className="flex flex-col gap-3 mt-4 px-4">
          <a
            href="https://github.com/hcengineering/platform"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-13 text-grey-90 hover:text-white transition-colors duration-200 font-medium"
          >
            Star Us
          </a>
        </div>
      </div>
    </header>
  );
}
