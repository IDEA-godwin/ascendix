"use client";
import { motion, useAnimation } from "framer-motion";
import { ClockIcon, RocketIcon, Wallet2Icon, WalletIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ConnectWallets from "../connectWallet/Connect";

// @ts-ignore
import {LoginButton, useOCAuth} from '@opencampus/ocid-connect-js'
import {useEffect, useState} from "react";

import {
  useModal,
} from "~/components/personals/modal";
import { ConnectButton } from "./connect-button";

export function Header() {
  const [wallet, setwallet] = useState("");
  const pathname = usePathname();
  const { setOpen } = useModal();
  const controls = useAnimation();

  const [ authenticated, setAuthenticated]  = useState<boolean>(false)
  const { authState, ocAuth } = useOCAuth();

  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  useEffect(() => {
    console.log(authState);
    setAuthenticated(authState.isAuthenticated);
    if (authState.isAuthenticated) console.log(ocAuth?.getAuthInfo());
  }, []);

  function handleButtonClick() {
    setOpen(false);

    controls
      .start({
        scale: 1.5,
        rotate: 360,
        transition: { duration: 0.5, ease: "easeInOut" },
      })
      .then(() => {
        controls.start({
          y: -1000,
          opacity: 0,
          transition: { duration: 1, ease: "easeIn" },
        });
      });
  }


 
  return (
    <header className="bg-[#5B2B99] w-full ">
      <nav className=" shadow-2xl bg-[#5B2B99]  pr-8 pl-8 lg:pr-24 lg:pl-16 flex fixed z-20 justify-between items-center p-3 w-full mx-auto ">
        <Link
          href={"/"}
          className="flex items-center justify-center  text-lg font-semibold gap-2 md:gap-4 rounded-md  transition-all duration-300"
        >
          <Image
            src="/ascendix1.png" 
            alt="Description of the image"
            width={70} 
            height={70} 
            priority={true} 
          /> <span className="text-2xl text-white">ASCENDIX</span> 

        </Link>

        {/* Desktop Navbar Links */}
        <div className={`hidden lg:flex space-x-12 md:space-x-4`}>
          <Link className={`hover:bg-primary/30 py-2 text-white rounded-md w-fit md:px-6 ${pathname == '/' ? 'bg-primary/30' : ''}`} href={"/"}>Home</Link>
          <Link className={`hover:bg-primary/30 py-2 text-white rounded-md w-fit md:px-6 ${pathname == '/quests' ? 'bg-primary/30' : ''}`} href={"/quests"}>Quests</Link>
          <Link className={`hover:bg-primary/30 py-2 text-white rounded-md w-fit md:px-6 ${pathname == '/about' ? 'bg-primary/30' : ''}`} href={"/about"}>About</Link>
        </div>
        <div className="hidden lg:flex">
          <ConnectButton/>
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="lg:hidden flex items-center justify-center space-x-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          { !isMenuOpen &&
            <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          }
          {/* Close Icon*/}
          {
            isMenuOpen && 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 64 64">
              <path d="M 12 8 L 8 12 L 24.666016 32 L 8 52 L 12 56 L 32 39.333984 L 52 56 L 56 52 L 39.333984 32 L 56 12 L 52 8 L 32 24.666016 L 12 8 z"></path>
            </svg>
          }
        </button>

        {/* Sidebar Menu for Small Screens */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full text-end bg-[#5B2B99] px-4 pb-3 shadow-lg lg:hidden">
            <div className="pt-6 flex flex-col gap-2">
              <Link onClick={() => handleButtonClick()} className={`block px-4 w-fit text-white hover:bg-primary/30 py-2 rounded-md  ${pathname == '/' ? 'bg-primary/30 py-2 rounded-md w-fit' : ''}`} href={"/"}>Home</Link>
              <Link onClick={() => handleButtonClick()} className={`block px-4 text-white hover:bg-primary/30 py-2 rounded-md w-fit ${pathname == '/quests' ? 'bg-primary/30' : ''}`} href={"/quests"}>Quests</Link>
              <Link onClick={() => handleButtonClick()} className={`block px-4 text-white hover:bg-primary/30 py-2 rounded-md w-fit ${pathname == '/about' ? 'bg-primary/30' : ''}`} href={"/about"}>About us</Link>
              <div className="w-full flex justify-start">
                <ConnectButton /> 
              </div> 
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
