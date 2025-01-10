"use client"
import React from "react";
import { Header } from "~/components/personals/header";
import Image from "next/image";
import questImg from "~/public/peick.webp";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Swords, ArrowRight, ChevronDown } from "lucide-react";
import { TypographyH2 } from "~/components/personals/typography";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent } from "~/components/ui/card";
import { useState } from 'react';

import Footer from "~/providers/footer";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "~/components/personals/modal";
import { CreateQuestForm } from "~/components/forms/create-quest-form";



type QuestIdPageProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
};

export default function QuestIdPage({}: QuestIdPageProps) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <main className="  h-full overflow-x-hidden ">
      <Header />
    <div className="flex w-[90%] mx-auto mt-[10%] md:mt-[7%] md:flex-row  flex-col gap-8 md:gap-0  md:justify-between">
    <div className="relative mt-20 ">
        <Image
          src={questImg}
          alt="Quest"
          width={500}
          height={200}
          className="object-cover rounded-md"
        />

        <div className="text-white  absolute z-10 top-2  left-[2%] bg-green-500 px-2 text-sm py-1 rounded-full ">
        <p className="text-[10px]">On Going</p>
      </div>

        <div className=" inset-0 flex mb-32 rounded-lg mt-6 shadow-2xl px-6  pb-3 md:pb-6  ">
          <div className="w-full py-4 space-y-2">
     <div className="flex justify-between items-center"> 
     <h1 className="max-w-xl text-3xl md:text-4xl font-bold ">
            QuestSphere
            </h1>

            <Badge className=" z-10 " variant={"secondary"}>
          $30
        </Badge>
     </div>

            <div className="flex  w-full text-lg   gap-6 flex-col">
              <div className="max-w-lg line-clamp-3 text-sm md:text-lg">
              QuestSphere is a dynamic platform where education meets adventure! Dive into a world of user-created quests spanning diverse topics and challenges. With each quest, you unlock AI-crafted quizzes designed to match your skill level and keep you engaged. Whether you are exploring new subjects or mastering old ones, QuestSphere makes learning a journey worth taking.
              </div>
              <div className="flex justify-end items-center"><Button className="block">          <Link href={"/quests"}>
     <div>Participate in a quest</div>                   
     </Link></Button>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="md:w-[60%] w-full p-3 mx-auto md:mt-16">
      <div>
      <div onClick={toggleDropdown} className="cursor-pointer flex justify-between items-center border-b border-gray-700 md:w-[90%] mx-auto pb-2 mb-6 md:mb-0">
      <div className=" px-6 py-2 rounded-lg text-sm flex gap-1 items-center">
          Admin Action </div>
          <ChevronDown className={`w-6 h-6  transition-transform ${dropdownVisible ? 'rotate-180' : 'rotate-0'}`} />
         </div>
      {dropdownVisible && (
        <div className="flex mt-6 justify-center   gap-6">
          <div>
            <button className="block bg-green-500 text-white px-4 py-2 hover:bg-green-600 rounded-lg text-sm">
              <Link href={"/"}>
                <div>Reward Participant</div>
              </Link>
            </button>
          </div>
          <div>
            <button className="block bg-red-600 text-white px-4 py-2 hover:bg-red-700 rounded-lg text-sm">
              <div>End Quest</div>
            </button>
          </div>
        </div>
      )}
    </div>
       
        <div className="my-10">
          <Component />
              </div>
      </div>





    </div>
<Footer />

    </main>
  );
}

const leaderboardData = [
  {
    id: 1,
    name: "Alex Johnson",
    score: 2800,
    avatar: "",
  },
  {
    id: 2,
    name: "Sam Alex",
    score: 2650,
    avatar: "",
  },
  {
    id: 3,
    name: "Taylor Brown",
    score: 2500,
    avatar: "",
  },
  {
    id: 4,
    name: "Jordan Lee",
    score: 2400,
    avatar: "",
  },
  {
    id: 5,
    name: "Casey White",
    score: 2350,
    avatar: "",
  },
  {
    id: 6,
    name: "Riley Green",
    score: 2300,
    avatar: "",
  },
];

function Component() {
  const topThree = leaderboardData.slice(0, 3);
  const rest = leaderboardData.slice(3);

  return (
    <div className="md:w-[90%] w-full max-w-2xl mx-auto mb-10 ">
      <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">Leaderboard</h2>
      <div className="flex items-end justify-center mb-10  gap-6">
        {topThree.map((player, index) => (
          <div
            key={player.id}
            className={`flex flex-col items-center ${
              index === 1 ? "order-1" : index === 0 ? "order-2" : "order-3"
            }`}
          >
            <Avatar
              className={`${index == 0 ? "w-20 h-20 text-gray-900" : "w-16 h-16 text-gray-900"} mb-2`}
            >
              <AvatarImage src={player.avatar} alt={player.name} />
              <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div
              className={`text-2xl font-bold ${
                index === 0
                  ? "text-yellow-400"
                  : index === 1
                  ? "text-gray-300"
                  : "text-amber-600"
              }`}
            >
              {index + 1}
            </div>
            <div className="font-semibold truncate">{player.name}</div>
            <div className="text-sm text-muted-foreground">{player.score}</div>
          </div>
        ))}
      </div>
      <Card>
        <CardContent className="p-0">
          {rest.map((player, index) => (
            <div
              key={player.id}
              className="flex items-center p-4 border-b last:border-b-0"
            >
              <div className="w-8 font-semibold">{index + 4}</div>
              <Avatar className="w-10 h-10 mr-4">
                <AvatarImage src={player.avatar} alt={player.name} />
                <AvatarFallback>{player.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <div className="font-semibold">{player.name}</div>
                <div className="text-sm text-muted-foreground">
                  {player.score}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
