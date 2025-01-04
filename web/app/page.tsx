import { Sparkles, Swords } from "lucide-react";
import Link from "next/link";
import { Meteors } from "~/components/meteors";
import { Header } from "~/components/personals/header";
import { ListTile } from "~/components/personals/list-tile";
import { Button } from "~/components/ui/button";
import Image from 'next/image';
import Footer from "~/providers/footer";
import ConnectWallets from '~/components/connectWallet/Connect';
  




import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "~/components/personals/modal";
import { CreateQuestForm } from "~/components/forms/create-quest-form";

export default function Home() {
  return (
    <main className="text-white w-full h-full overflow-x-hidden">
      <Header />
      <section className="absolute top-0 bottom-0 w-screen bg-[#5B2B99] px-6 md:px-2 pt-20  md:pt-20 overflow-hidden">
        <Meteors number={20} />
        <div className="flex justify-center items-center mt-8 md:flex-row flex-col md:w-5/6 mx-auto">
          <div className="container relative z-10 p-3 mx-auto text-center md:text-left">
            <h2 className="pt-16 text-4xl font-semibold">
              Welcome to{" "}
              <span className="text-transparent bg-gradient-to-br bg-clip-text from-primary to-primary-foreground">
                Ascendix
              </span>
            </h2>
            <p className="md:max-w-xl pt-6 md:pt-10 mx-auto md:mx-0 text-sm text-center md:text-left">
              Ascendix transforms learning into an exciting adventure. Our
              platform gamifies education by allowing users to create and
              participate in quests on various topics. Each quest comes with
              unique, AI-generated quizzes tailored to your learning level.
            </p>
            <div className="flex justify-center md:justify-start md:items-center mt-10 md:gap-6 gap-3 flex-row">
              <Button className="hover:hover:bg-gray-300" variant={"secondary"} size={"lg"}>
              <Link href={"/quests"}>
                <div>Join a quest</div>                   
              </Link>
              </Button>
              <Modal>
                <Button className="hover:bg-primary/30" size={"lg"} asChild>
                  <ModalTrigger>Create a quest</ModalTrigger>
                </Button>
                <ModalBody>
                  <ModalContent>
                    <CreateQuestForm />
                  </ModalContent>
                </ModalBody>
              </Modal>
            </div>
          </div>
          <div className="pt-12 md:pt-28 hidden lg:block">
            <Image src="/content.png" alt="content image" width={400} height={200} priority={true} />
          </div>
        </div>
        <div className="">
          <Footer />
        </div>
      </section>
    </main>
  );
}
