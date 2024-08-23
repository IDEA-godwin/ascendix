"use client";
import { motion, useAnimation } from "framer-motion";
import { ClockIcon, RocketIcon, Wallet2Icon, WalletIcon } from "lucide-react";
import Link from "next/link";
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
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { TypographyH4 } from "./typography";

export function Header() {
  const [wallet, setwallet] = useState("");
  const { setOpen } = useModal();
  const controls = useAnimation();

  const [ authenticated, setAuthenticated]  = useState<boolean>(false)
  const { authState, ocAuth } = useOCAuth();

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
    <header className="bg-foreground/10">
      <nav className="container flex justify-between p-3 mx-auto border-b">
        <Link
          href={"/"}
          className="flex items-center justify-center px-6 text-lg font-semibold bg-background rounded-md hover:bg-background/50 transition-all duration-300"
        >
          Ascendix
        </Link>
        { authenticated && <div className={"flex items-center"}>
          { ocAuth.getAuthInfo()?.edu_username }
          <span role={'button'} className={'ms-2 rounded-full bg-gray-100/[.06] w-8 h-8 inline-block overflow-hidden text-center'}>
            <svg fill={'currentColor'} className={'w-max h-max'} viewBox='0 0 24 24'>
            <path
                d='M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z'/>
          </svg>
          </span>
        </div>}

        {!authenticated && <Modal>
          <Button className="" size={"lg"} asChild>
            <ModalTrigger>
              <div className="hidden md:block">Log In</div>
              <div className="block md:hidden">
                <WalletIcon/>
              </div>
            </ModalTrigger>
          </Button>
          <ModalBody className="bg-red-200">
            <ModalContent>
              <TypographyH4 className="font-light text-2xl text-start">
                Log In to Ascendix
              </TypographyH4>
              <p className={'font-thin text-xs'}>
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
