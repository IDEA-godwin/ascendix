import { ChevronRight, Sparkles, Swords } from "lucide-react";
import Link from "next/link";
import { Meteors } from "~/components/meteors";
import { Header } from "~/components/personals/header";
import { ListTile } from "~/components/personals/list-tile";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="text-white">
      <Header />
      <section className="min-h-[30rem] bg-foreground/10 relative overflow-hidden">
        <Meteors number={40} />
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
          <div className="rounded-full w-96 h-80 blur-3xl bg-primary/30 left-1/2" />
        </div>
        <div className="container relative z-10 p-3 mx-auto text-center">
          <h2 className="pt-16 text-4xl font-semibold">
            Welcome to{" "}
            <span className="text-transparent bg-gradient-to-br bg-clip-text from-primary to-primary-foreground">
              Ascendix
            </span>
          </h2>
          <p className="max-w-xl pt-10 mx-auto text-sm text-center">
                         Ascendix transforms learning into an exciting adventure. Our platform gamifies education by
                        allowing users to create and participate in quests on various topics. Each quest comes with
                        unique, AI-generated quizzes tailored to your learning level.
          </p>
          <div className="flex flex-col-reverse justify-center mt-10 md:gap-6 gap-3 md:flex-row">
            <Button variant={"secondary"} className="" size={"lg"}>
              Join a quest
            </Button>
            <Button className="" size={"lg"}>
              Create a quest
            </Button>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="relative mx-auto text-3xl font-semibold text-center max-w-fit">
          <Sparkles className="absolute -top-4 -left-4 rotate-6 animate-pulse" />
          <Sparkles className="absolute -bottom-4 -right-4 rotate-6 animate-pulse" />
          <Sparkles className="absolute -top-4 right-1/3 rotate-6 animate-pulse" />
          <Sparkles className="absolute -bottom-4 right-2/3 rotate-6 animate-pulse" />
          Participace in Quests
        </h2>
        <div className="container p-3 mx-auto mt-20 gap-4 grid grid-cols-1 md:grid-cols-3">
          <ListTile />
          <ListTile />
          <ListTile />
        </div>

        <div className="flex justify-center mt-10">
          <Button asChild className="space-x-2">
            <Link href={"/view-all"}>
              <div>View All</div>
              <Swords />
            </Link>
          </Button>
        </div>
      </section>

       <footer className="mt-14 bg-foreground/20 rounded-md md:mt-20 md:mb-5 md:mx-10">
                <div className="container p-3 mx-auto text-center">
                    <div className="flex flex-col items-center justify-between text-lg font-semibold md:flex-row gap-4">
                        <div>
                            &#169;{" "}
                            <span className="text-base font-normal">
                {new Date().getFullYear()} All right reserved
              </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Button variant={"secondary"} className="px-3 py-2">
                                <svg
                                    width="19"
                                    height="19"
                                    viewBox="0 0 71 80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M60.1045 13.8978C55.5792 11.8214 50.7265 10.2916 45.6527 9.41542C45.5603 9.39851 45.468 9.44077 45.4204 9.52529C44.7963 10.6353 44.105 12.0834 43.6209 13.2216C38.1637 12.4046 32.7345 12.4046 27.3892 13.2216C26.905 12.0581 26.1886 10.6353 25.5617 9.52529C25.5141 9.44359 25.4218 9.40133 25.3294 9.41542C20.2584 10.2888 15.4057 11.8186 10.8776 13.8978C10.8384 13.9147 10.8048 13.9429 10.7825 13.9795C1.57795 27.7309 -0.943561 41.1443 0.293408 54.3914C0.299005 54.4562 0.335386 54.5182 0.385761 54.5576C6.45866 59.0174 12.3413 61.7249 18.1147 63.5195C18.2071 63.5477 18.305 63.5139 18.3638 63.4378C19.7295 61.5728 20.9469 59.6063 21.9907 57.5383C22.0523 57.4172 21.9935 57.2735 21.8676 57.2256C19.9366 56.4931 18.0979 55.6 16.3292 54.5858C16.1893 54.5041 16.1781 54.304 16.3068 54.2082C16.679 53.9293 17.0513 53.6391 17.4067 53.3461C17.471 53.2926 17.5606 53.2813 17.6362 53.3151C29.2558 58.6202 41.8354 58.6202 53.3179 53.3151C53.3935 53.2785 53.4831 53.2898 53.5502 53.3433C53.9057 53.6363 54.2779 53.9293 54.6529 54.2082C54.7816 54.304 54.7732 54.5041 54.6333 54.5858C52.8646 55.6197 51.0259 56.4931 49.0921 57.2228C48.9662 57.2707 48.9102 57.4172 48.9718 57.5383C50.038 59.6034 51.2554 61.5699 52.5959 63.435C52.6519 63.5139 52.7526 63.5477 52.845 63.5195C58.6464 61.7249 64.529 59.0174 70.6019 54.5576C70.6551 54.5182 70.6887 54.459 70.6943 54.3942C72.1747 39.0791 68.2147 25.7757 60.1968 13.9823C60.1772 13.9429 60.1437 13.9147 60.1045 13.8978ZM23.7259 46.3253C20.2276 46.3253 17.3451 43.1136 17.3451 39.1693C17.3451 35.225 20.1717 32.0133 23.7259 32.0133C27.308 32.0133 30.1626 35.2532 30.1066 39.1693C30.1066 43.1136 27.28 46.3253 23.7259 46.3253ZM47.3178 46.3253C43.8196 46.3253 40.9371 43.1136 40.9371 39.1693C40.9371 35.225 43.7636 32.0133 47.3178 32.0133C50.9 32.0133 53.7545 35.2532 53.6986 39.1693C53.6986 43.1136 50.9 46.3253 47.3178 46.3253Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </Button>
                            <Button variant={"secondary"} className="px-3 py-2">
                                <svg viewBox="0 0 24 24" height={16} width={16}>
                                    <g>
                                        <path
                                            fill="currentColor"
                                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                        ></path>
                                    </g>
                                </svg>
                            </Button>
                        </div>
                    </div>
                </div>
            </footer>
    </main>
  );
}


