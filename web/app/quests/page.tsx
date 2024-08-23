import { ArrowRight } from "lucide-react";
import React from "react";
import { Header } from "~/components/personals/header";
import { ListTile } from "~/components/personals/list-tile";
import { TypographyH2, TypographyH4 } from "~/components/personals/typography";
import { Button } from "~/components/ui/button";

type ViewAllPageProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string };
};

export default function ViewAllPage({
  params,
  searchParams,
}: ViewAllPageProps) {
  return (
    <main>
      <Header />
      <div className="my-10 text-center">
        <TypographyH2 className="border-b-0">
          Participace in Ongoing Quests
        </TypographyH2>
      </div>

      <div className="container p-3 mx-auto gap-4 grid grid-cols-1 md:grid-cols-3">
        {Array.from({ length: 10 }).map((_, index) => (
          <ListTile key={index + 1} questId={index.toString()} />
        ))}
        <div className="w-full">
          <Button variant={"ghost"} className="w-full h-full group">
            <TypographyH4>Create A Quest</TypographyH4>{" "}
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </main>
  );
}
