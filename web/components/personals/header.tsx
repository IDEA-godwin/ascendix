"use client";
import { motion, useAnimation } from "framer-motion";
import { ClockIcon, RocketIcon, Wallet2Icon, WalletIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';

// @ts-ignore
import {LoginButton, useOCAuth} from '@opencampus/ocid-connect-js'
import {useEffect, useState} from "react";
import {
  CloseIcon,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "~/components/personals/modal";
import { Button } from "~/components/ui/button";
import { TypographyH4 } from "./typography";

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
    <header className="bg-[#5B2B99] ">
      <nav className="container shadow-2xl bg-[#5B2B99]  pr-8 pl-8 lg:pr-24 lg:pl-16 flex fixed z-20 justify-between items-center p-3  mx-auto ">
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
        <div className={`hidden md:flex space-x-12 md:space-x-4`}>
          <Link className={`hover:bg-primary/30 py-2 text-white rounded-md w-fit md:px-6 ${pathname == '/' ? 'bg-primary/30' : ''}`} href={"/"}>Home</Link>
          <Link className={`hover:bg-primary/30 py-2 text-white rounded-md w-fit md:px-6 ${pathname == '/quests' ? 'bg-primary/30' : ''}`} href={"/quests"}>Quests</Link>
          <Link className={`hover:bg-primary/30 py-2 text-white rounded-md w-fit md:px-6 ${pathname == '/about' ? 'bg-primary/30' : ''}`} href={"/about"}>About</Link>
          <Link className={` hover:bg-primary/30 py-2 text-white rounded-md w-fit md:px-6 ${pathname == '/task' ? 'bg-primary/30' : ''}`} href={"/task"}>Tasks</Link>
           
        </div>

        {/* Hamburger Menu Button (visible on small screens) */}
        <button
          className="md:hidden flex items-center justify-center space-x-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {/* Hamburger Icon */}
          <svg className="w-8 h-8 text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Sidebar Menu for Small Screens */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#5B2B99] py-8 px-4 shadow-lg md:hidden">

            <div className="space-y-4">
              <Link onClick={() => handleButtonClick()} className={`block px-4 text-white hover:bg-primary/30 py-2 rounded-md w-fit ${pathname == '/' ? 'bg-primary/30 py-2 rounded-md w-fit' : ''}`} href={"/"}>Home</Link>
              <Link onClick={() => handleButtonClick()} className={`block px-4 text-white hover:bg-primary/30 py-2 rounded-md w-fit ${pathname == '/quests' ? 'bg-primary/30' : ''}`} href={"/quests"}>Quests</Link>
              <Link onClick={() => handleButtonClick()} className={`block px-4 text-white hover:bg-primary/30 py-2 rounded-md w-fit ${pathname == '/about' ? 'bg-primary/30' : ''}`} href={"/about"}>About us</Link>
              <Link onClick={() => handleButtonClick()} className={`block px-4 text-white hover:bg-primary/30 py-2 rounded-md w-fit ${pathname == '/task' ? 'bg-primary/30' : ''}`} href={"/task"}>Tasks</Link>
            
            </div>
            {!authenticated && <Modal>
          <Button className="mt-6 hover:bg-primary/30" size={"lg"} asChild>
            <ModalTrigger>
              <div className="hidden md:block">Log In</div>
              <div className=" md:hidden flex items-center gap-2">
                <WalletIcon/> <span className="">CONNECT WALLET</span>
              </div>
            </ModalTrigger>
          </Button>
          <ModalBody className="bg-white text-gray-900 mx-6 rounded-lg">
            <ModalContent>
              <TypographyH4 className=" text-2xl text-start">
                Log In to Ascendix
              </TypographyH4>
              <p className={'py-2 text-xs'}>
                By logging in to Ascendix, you agree to Terms of Service and Privacy Policy and if you have an Open
                Campus ID,
                you agree to link your Open Campus ID and allow Ascendix to access and use your OCID info.
              </p>
              <div className={'mt-4 flex items-center justify-start'}>
                <p className={'pe-3'}>Have Open Campus ID? Or Create OCID </p> <LoginButton/>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>}


            
          </div>
        )}

        {/* User Authentication Check */}
        { authenticated && <div className={"flex items-center"}>
          {ocAuth.getAuthInfo()?.edu_username}
          {/* User Avatar or Dropdown Menu */}
          <div className="relative inline-block text-left">
            <div>
              <span id="menu-button" aria-expanded="true" aria-haspopup="true" role={'button'} className={'ms-2 rounded-full bg-gray-100/[.06] w-8 h-8 inline-block overflow-hidden text-center'}>
                <svg fill={'currentColor'} className={'w-max h-max'} viewBox='0 0 24 24'>
                  <path
                    d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z'/>
                </svg>
              </span>
            </div>
          </div>
        </div>}
        {!authenticated && <Modal>
          <Button className="hidden md:block hover:bg-primary/30" size={"lg"} asChild>
            <ModalTrigger>
              <div className="hidden md:block ">Log In</div>
              <div className="block md:hidden">
                <WalletIcon/>
              </div>
            </ModalTrigger>
          </Button>
          <ModalBody className="bg-white text-gray-900">
            <ModalContent>
              <TypographyH4 className=" text-2xl text-start">
                Log In to Ascendix
              </TypographyH4>
              <p className={'py-2 text-xs'}>
                By logging in to Ascendix, you agree to Terms of Service and Privacy Policy and if you have an Open
                Campus ID,
                you agree to link your Open Campus ID and allow Ascendix to access and use your OCID info.
              </p>
              <div className={'mt-4 flex items-center justify-start'}>
                <p className={'pe-3'}>Have Open Campus ID? Or Create OCID </p> <LoginButton/>
              </div>
            </ModalContent>
          </ModalBody>
        </Modal>}
        
      </nav>
    </header>
  );
}
