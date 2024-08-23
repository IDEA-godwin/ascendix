import React from "react";
import { Header } from "~/components/personals/header";
import Image from "next/image";
import questImg from "~/public/peick.webp";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Swords } from "lucide-react";
import { TypographyH2 } from "~/components/personals/typography";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Card, CardContent } from "~/components/ui/card";

type QuestIdPageProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
};

export default function QuestIdPage({}: QuestIdPageProps) {
  return (
    <main>
      <Header />
      <div className="relative">
        <Image
          src={questImg}
          alt="Quest"
          width={500}
          height={500}
          className="object-cover w-full md:max-h-[30rem] max-md:min-h-[20rem]"
        />

        <Badge className="absolute z-10 top-2 right-2" variant={"secondary"}>
          $30
        </Badge>
        <div className="absolute inset-0 flex items-end bg-black/70">
          <div className="w-full p-4 space-y-2">
            <h1 className="max-w-xl text-4xl font-bold text-white">
              Name Of Quest
            </h1>
            <p className="flex items-end justify-between w-full text-lg text-white">
              <div className="max-w-xl line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Praesentium quia laudantium eum minus rerum similique dolores
                perferendis placeat, hic necessitatibus odit eius qui a expedita
                quo iure. Nesciunt, officia animi!
              </div>
              <Button className="hidden md:block">Join Quest</Button>
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-20">
        <Button className="mx-auto" variant={"secondary"} size={"lg"}>
          Join Quest <Swords className="ml-2" />
        </Button>
      </div>
      <div className="container p-3 mx-auto mt-20">
        <div className="mt-10">
          <Component />
        </div>
      </div>
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
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="mb-6 text-2xl font-bold text-center">Leaderboard</h2>
      <div className="flex items-end justify-center mb-10 space-x-4 gap-6">
        {topThree.map((player, index) => (
          <div
            key={player.id}
            className={`flex flex-col items-center ${
              index === 1 ? "order-1" : index === 0 ? "order-2" : "order-3"
            }`}
          >
            <Avatar
              className={`${index == 0 ? "w-20 h-20" : "w-16 h-16"} mb-2`}
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
