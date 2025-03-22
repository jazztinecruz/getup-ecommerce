"use client";

import { ArrowRightIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

const catchPhrase = "Step Up Your Style – Fresh Kicks & Fits for Every Look!";

const Hero = () => {
  return (
    <section>
      <div className="hidden lg:block relative">
        <div className="absolute top-16 left-16 text-5xl font-bold w-full max-w-xl leading-snug flex flex-col gap-6">
          <span>{catchPhrase}</span>
          <button className="border border-primary px-5 py-2.5 rounded-xl w-full max-w-xs flex items-center justify-between">
            <span className="text-2xl font-semibold">Shop Now</span>
            <span className="bg-primary rounded-xl p-4">
              <ArrowRightIcon className="size-5 text-secondary" />
            </span>
          </button>
        </div>
        <HeroNewReleaseItem />
      </div>

      <div className="lg:hidden space-y-8">
        <div className="text-2xl font-bold">{catchPhrase}</div>
        <HeroNewReleaseItem />
        <button className="border border-primary px-4 py-2 rounded-xl w-full flex items-center justify-between">
          <span className="font-semibold">Shop Now</span>
          <span className="bg-primary rounded-xl p-3">
            <ArrowRightIcon className="size-4 text-secondary" />
          </span>
        </button>
      </div>
    </section>
  );
};

export default Hero;

const HeroNewReleaseItem = () => {
  return (
    <div className="relative aspect-video h-full w-full">
      <Image
        src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?q=80&w=3462&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="New Release Shoes"
        fill
        className="object-cover rounded-lg -z-10"
      />
    </div>
  );
};
