"use client";
import { motion, useAnimation } from "framer-motion";
import { ClockIcon, RocketIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
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
  const [wallet, setwallet] = React.useState("");
  const { setOpen } = useModal();
  const controls = useAnimation();

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

        <Modal>
          <Button className="" size={"lg"} asChild>
            <ModalTrigger>Connect Wallet</ModalTrigger>
          </Button>
          <ModalBody className="bg-red-200">
            <ModalContent>
              <TypographyH4 className="text-center">
                Add a Wallet to Ascendix
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