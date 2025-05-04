"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/header/Logo";

export default function SignupPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-w-[350px] bg-huly-background">
      <header className="absolute left-0 top-0 z-50 w-full px-4 pt-4">
        <div className="container">
          <Link
            href="/"
            className="group flex items-center gap-x-1.5 py-4 text-13 font-medium tracking-snugger text-grey-90 transition-colors duration-200 hover:text-white"
          >
            Home
          </Link>
        </div>
      </header>

      <section className="relative flex h-screen min-h-[770px] flex-col items-center justify-center overflow-hidden py-16 px-4 xs:min-h-[440px] xs:px-5">
        <div className="relative z-10 h-[479px] w-[480px] bg-huly-dark px-12 pt-14 rounded-lg lg:w-[464px] lg:px-10 lg:pt-[64px] md:px-11 xs:h-[384px] xs:w-full xs:max-w-sm xs:px-5 xs:py-5">
          <main>
            <div className="flex justify-center mb-6">
              <Logo className="h-10 w-10" />
            </div>
            <h1 className="mt-[17px] font-title text-36 font-semibold leading-none tracking-snugger text-white lg:text-32 md:text-28 xs:mt-3 xs:text-24 text-center">
              Create new account
            </h1>
            <form className="mt-7 flex flex-col lg:mt-6 xs:mt-5">
              <label className="block text-14 leading-snug tracking-snugger text-grey-60" htmlFor="email">
                Email
              </label>
              <div className="relative mt-0.5 xs:mb-2">
                <input
                  className="remove-autocomplete-styles relative block h-[42px] w-full appearance-none rounded border !bg-huly-dark px-3 py-[9px] text-15 tracking-snugger text-white placeholder-white/20 outline-none autofill:!text-white focus:ring-[rgba(209,208,255,0.5)] md:h-[41px] sm:text-16 border-white/10"
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="name@work-email.com"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-[27px] h-11 xs:mt-4 xs:h-10 [&>div]:w-full [&_button]:w-full">
                <div className="relative inline-flex items-center w-full">
                  <div className="border-button-light-blur absolute left-1/2 top-1/2 h-[calc(100%+9px)] w-[calc(100%+9px)] -translate-x-1/2 -translate-y-1/2 rounded-full will-change-transform" style={{ opacity: 1 }}>
                    <div className="border-button-light relative h-full w-full rounded-full" />
                  </div>
                  <button className="transition-all duration-200 uppercase font-bold flex items-center justify-center h-11 w-full text-13 text-huly-dark -tracking-[0.015em] relative z-10 overflow-hidden rounded-full border border-white/60 bg-[#d1d1d1] relative w-full xs:h-10">
                    <span className="whitespace-nowrap text-14 uppercase leading-[42px] text-huly-dark">
                      Create account
                    </span>
                  </button>
                </div>
              </div>
            </form>
            <div className="relative mt-[25px] flex items-center lg:mt-[23px] xs:mt-4">
              <div className="h-px w-full bg-[linear-gradient(90deg,#443D59_0%,#2D2F31_50.9%)]" />
              <span className="px-3.5 text-13 uppercase text-grey-40">Or</span>
              <div className="h-px w-full bg-[linear-gradient(90deg,_#2D2F31_49.1%,_#2D2F31_100%)]" />
            </div>
            <div className="mt-[25px] grid grid-cols-2 gap-x-4 lg:mt-[22px] md:gap-x-2 xs:mt-4 xs:grid-cols-1 xs:gap-y-3">
              <a
                className="transition-colors duration-200 transition-all duration-200 uppercase font-bold flex items-center justify-center h-10 px-16 text-12 text-white tracking-snugger rounded bg-grey-5 ring-1 ring-white/10 transition-all duration-200 hover:ring-white/15 mx-px gap-x-2 !px-2 !text-13"
                href="/auth/google"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M21.6 12.2272C21.6 11.5181 21.5364 10.8363 21.4182 10.1818H12V14.0499H17.3818C17.15 15.2999 16.4455 16.359 15.3864 17.0681V19.5772H18.6182C20.5091 17.8363 21.6 15.2727 21.6 12.2272Z" fill="#4285F4"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 21.9999C14.7 21.9999 16.9636 21.1044 18.6182 19.5772L15.3864 17.0681C14.4909 17.6681 13.3455 18.0226 12 18.0226C9.39545 18.0226 7.19091 16.2635 6.40455 13.8999H3.06364V16.4908C4.70909 19.759 8.09091 21.9999 12 21.9999Z" fill="#34A853"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.40455 13.9001C6.20455 13.3001 6.09091 12.6592 6.09091 12.0001C6.09091 11.341 6.20455 10.7001 6.40455 10.1001V7.50916H3.06364C2.38636 8.85916 2 10.3864 2 12.0001C2 13.6137 2.38636 15.141 3.06364 16.491L6.40455 13.9001Z" fill="#FBBC05"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 5.97727C13.4681 5.97727 14.7863 6.48182 15.8227 7.47273L18.6909 4.60455C16.9591 2.99091 14.6954 2 12 2C8.09091 2 4.70909 4.24091 3.06364 7.50909L6.40455 10.1C7.19091 7.73636 9.39545 5.97727 12 5.97727Z" fill="#EA4335"/>
                </svg>
                <span className="font-medium !normal-case">Sign up with Google</span>
              </a>
              <a
                className="transition-colors duration-200 transition-all duration-200 uppercase font-bold flex items-center justify-center h-10 px-16 text-12 text-white tracking-snugger rounded bg-grey-5 ring-1 ring-white/10 transition-all duration-200 hover:ring-white/15 mx-px gap-x-2 !px-2 !text-13"
                href="/auth/github"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z" fill="white"/>
                </svg>
                <span className="font-medium !normal-case">Sign up with GitHub</span>
              </a>
            </div>
          </main>
        </div>
        <div className="relative z-10 mt-4 flex items-center gap-x-1 text-14 leading-snug tracking-snugger">
          <span className="text-white opacity-40">Already have an account?</span>
          <Link className="text-grey-90 hover:text-white" href="/login">
            Sign in
          </Link>
        </div>
        <div className="absolute bottom-8 z-10 mt-3 flex items-center gap-x-3 text-13 leading-snug tracking-snugger">
          <Link className="transition-colors duration-200 text-white opacity-40 transition-opacity duration-200 hover:opacity-80" href="/legal/terms">
            Terms of Use
          </Link>
          <Link className="transition-colors duration-200 text-white opacity-40 transition-opacity duration-200 hover:opacity-80" href="/legal/privacy">
            Privacy policy
          </Link>
        </div>

        {/* Background glow effect */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10">
          <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full bg-huly-accent/20 filter blur-[150px] opacity-60" />
          <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-huly-orange/10 filter blur-[120px] opacity-50" />
        </div>
      </section>
    </div>
  );
}
