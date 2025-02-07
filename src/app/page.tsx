import { BackgroundLines } from "@/components/ui/background-lines";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <BackgroundLines className="flex w-full flex-col items-center justify-center px-4">
        <h2 className="relative z-20 bg-gradient-to-b from-neutral-900 to-neutral-700 bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent dark:from-neutral-600 dark:to-white md:py-10 md:text-4xl lg:text-7xl">
          Jobify - <br /> AI-Powered Job Descriptions
        </h2>
        <p className="mx-auto max-w-xl text-center text-sm text-neutral-700 dark:text-neutral-400 md:text-lg">
          Automate job descriptions with AI and simplify hiring.
        </p>
        <Link href="/jobs" passHref>
          <Button className="relative z-[100] mt-6 bg-black text-white hover:bg-gray-800 dark:bg-gray-800">
            Browse Jobs
          </Button>
        </Link>
      </BackgroundLines>
    </div>
  );
}
