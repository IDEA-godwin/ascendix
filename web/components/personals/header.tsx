import Link from "next/link";
import { Button } from "~/web/components/ui/button";

export function Header() {
  return (
    <header className="bg-foreground/10">
      <nav className="container flex justify-between p-3 mx-auto border-b">
        <Link
          href={"/"}
          className="flex items-center justify-center px-6 text-lg font-semibold bg-background rounded-md hover:bg-background/50 transition-all duration-300"
        >
          Ascendix
        </Link>
        <Button className="" size={"lg"}>
          Connect Wallet
        </Button>
      </nav>
    </header>
  );
}
