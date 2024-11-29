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
      <section className="relative w-screen bg-[#5B2B99] px-6 md:px-2 pt-20  md:pt-20 overflow-hidden">
      <Meteors number={20} />
  <div className="flex justify-center items-center md:flex-row flex-col md:w-5/6 mx-auto">
  
  <div className="container z-5 p-3 mx-auto text-center md:text-left ">
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
<div className="pt-8 md:pt-28">
<Image
        src="/scendixhero.png" 
        alt="content image"
        width={400} 
        height={200} 
        priority={true} 
      />

</div>

  </div>
</section>


<section className="flex justify-center gap-8 items-center pt-16 md:gap-12">
<Link href=''><Image
        src="/solana.png" 
        alt="content image"
        width={50} 
        height={50} 
        priority={true} 
      /></Link>
<Link href=''><Image
        src="/ledger.png" 
        alt="content image"
        width={50} 
        height={50} 
        priority={true} 
      /></Link>

<Link href=''><Image
        src="/ton.png" 
        alt="content image"
        width={50} 
        height={50} 
        priority={true} 
      /></Link>

<Link href=''><Image
        src="/trust.png" 
        alt="content image"
        width={50} 
        height={50} 
        priority={true} 
      />

</Link>
</section>




<section className="pt-16 md:pt-20 md:w-5/6 md:mx-auto mx-2">
        <h2 className="relative mx-auto text-3xl font-bold text-gray-900 text-center max-w-full">
          <Sparkles className="absolute top-2 md:left-6 rotate-6 animate-pulse text-primary" />
          <Sparkles className="absolute -bottom-4 right-1 md:right-8 rotate-6 animate-pulse text-primary" />
          <Sparkles className="absolute -top-6 right-1/3 rotate-6 animate-pulse text-primary" />
          <Sparkles className="absolute -bottom-8 right-2/3 rotate-6 animate-pulse text-primary" />
          Participace in Quests
        </h2>
        <div className="container py-3 px-5 mx-auto mt-10 md:mt-20 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <ListTile />
          <ListTile />
          <ListTile />
        </div>

                <div className="flex justify-center mb-7 mt-10">
                    <Button asChild className="space-x-2 ">
                        <Link href={"/quests"}>
                            <div>View All</div>
                            <Swords/>
                        </Link>
                    </Button>

                </div>
            </section>

<Footer />





    </main>
  );
}
