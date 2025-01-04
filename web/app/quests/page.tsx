import { ArrowRight } from "lucide-react";
import React from "react";
import { Header } from "~/components/personals/header";
import { ListTile } from "~/components/personals/list-tile";
import { TypographyH2, TypographyH4 } from "~/components/personals/typography";
import { Button } from "~/components/ui/button";
import Footer from "~/providers/footer";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "~/components/personals/modal";
import { CreateQuestForm } from "~/components/forms/create-quest-form";


type ViewAllPageProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
};

export default function ViewAllPage({
  params,
  searchParams,
}: ViewAllPageProps) {
  return (
    <main className="text-white w-full h-full overflow-x-hidden" >
      <Header />
      

      <div className="container mt-[10%] mb-6 py-6 md:py-8 md:px-16 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-gray-100 ">
        {Array.from({ length: 3 }).map((_, index) => (
          <ListTile key={index + 1} questId={index.toString()} />
        ))}
        <div className="w-full bg-white py-14 shadow-2xl rounded-md">
          <Modal>
            <button  className="w-full h-full flex justify-center items-center text-lg font-semibold  group">
            <ModalTrigger className="flex justify-center items-center py-8">Create a quest
              <ArrowRight className="ml-3  group-hover:translate-x-2 transition-all duration-300" />
              </ModalTrigger>
            
            </button>
            <ModalBody>
            <ModalContent>
              <CreateQuestForm />
            </ModalContent>
          </ModalBody>
          </Modal>
        </div>
      </div>

      <Footer />
    </main>
  );
}
