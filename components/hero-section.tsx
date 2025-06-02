import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import HeroAnimation from "./hero-animation";
import Link from "next/link";

export function HeroSection() {
  return (
    <div>
      <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
            Create{" "}
            <span className="text-orange-500 dark:text-orange-400">
              stunning
            </span>{" "}
            presentations with AI
          </h1>
          <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-md">
            Transform your ideas into captivating presentations in minutes with
            our AI-powered platform.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 cursor-pointer"
            >
              <Link href={"/dashboard"}>Start creating for free</Link>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-orange-200 dark:border-orange-700 text-orange-500 dark:text-orange-400 dark:hover:bg-orange-900/20 cursor-pointer"
            >
              See examples
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <HeroAnimation />
        </div>
      </section>
    </div>
  );
}
