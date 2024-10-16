"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { DProductCard } from "@/constants/detailes";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/constants/amination";

export default function ProductCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );
  const router = useRouter();
  function handleClick(itemName: string, type: "Products" | "Services") {
    router.push(`/${type}/${encodeURIComponent(itemName)}`);
  }
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      opts={{
        align: "start",
      }}
      className="w-full max-w-[390px] overflow-hidden md:max-w-2xl lg:max-w-[1500px]"
    >
      <CarouselContent className="!z-10">
        {DProductCard.map((item, index) => (
          <CarouselItem key={index} className="!z-1 md:basis-1/2 xl:basis-1/4">
            <Link
              href={`/Products/${item.name}`}
              onClick={() => handleClick(item.name, "Products")}
            >
              <Card
                variants={fadeInAnimation}
                whileInView="animate"
                initial="initial"
                viewport={{
                  once: true,
                }}
                custom={index}
                whileHover={{ scale: 0.95, transition: { duration: 0.02 } }}
                className="flex h-full flex-col items-center justify-between transition-all duration-300 hover:border-[#00AEFF]"
              >
                <CardContent className="flex h-full flex-col items-center justify-between gap-4">
                  <img src={item.img} alt="Product Image" className="" />

                  <h1 className="my-2 text-xl font-semibold uppercase">
                    {item.name}
                  </h1>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="mr-6 hover:scale-110" />
      <CarouselNext className="ml-6 hover:scale-110" />
    </Carousel>
  );
}
