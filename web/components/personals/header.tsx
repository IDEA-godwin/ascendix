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
        {/*{ !authenticated && <LoginButton/> }*/}
        {/*{ authenticated && <span>{ ocAuth.getAuthInfo()?.edu_username }</span>}*/}

        <Modal>
          <Button className="" size={"lg"} asChild>
            <ModalTrigger>
              <div className="hidden md:block">Log In</div>
              <div className="block md:hidden">
                <WalletIcon />
              </div>
            </ModalTrigger>
          </Button>
          <ModalBody className="bg-red-200">
            <ModalContent>
              <TypographyH4 className="text-start">
                Sign in
              </TypographyH4>
              <p>
                <Label htmlFor="wallet" className="text-right">
                  Wallet
                </Label>
                <Input
                  id="wallet"
                  value={wallet}
                  placeholder="0x...1xx"
                  className="mt-3"
                  onChange={(e) => setwallet(e.target.value)}
                />
              </p>
            </ModalContent>
            <ModalFooter>
              <CloseIcon>
                <Button
                  className="w-full overflow-hidden"
                  onClick={handleButtonClick}
                >
                  Add Address
                  <motion.div
                    className="w-6 h-6 ml-2"
                    animate={controls}
                    initial={{ rotate: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                  >
                    <RocketIcon />
                  </motion.div>
                </Button>
              </CloseIcon>
            </ModalFooter>
          </ModalBody>
        </Modal>
      </nav>
    </header>
  );
}
