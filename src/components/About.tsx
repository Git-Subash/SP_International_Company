"use client";
import { container, listItem, slidedownAnimation } from "@/constants/amination";
import { list } from "@/constants/detailes";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="py-24" id="/About">
      <motion.div
        variants={slidedownAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="mx-auto mb-10 flex w-full max-w-screen-2xl flex-col items-center gap-4 px-5 text-center md:px-10 lg:px-20"
      >
        <h1 className="mb-2 max-w-4xl text-4xl font-bold leading-none tracking-tight md:text-5xl">
          Leading with Vision, Serving with Commitment
        </h1>
        <p className="mb-2 max-w-4xl font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl">
          At SP Group, we pride ourselves on our wide global presence, offering
          a comprehensive range of products and services, including Pumps,
          Motors, Valves, Hydraulics, Pipes, Wires & Cables, Solar Pumping
          Systems, and Industrial Services.
        </p>

        <Link
          href="/About"
          className="bg-sky-450 hover:border-sky-450 group inline-flex w-full items-center justify-center rounded-lg border-2 border-transparent px-5 py-3 text-center text-sm font-medium text-white shadow-xl transition-all duration-500 hover:bg-white hover:text-black sm:w-auto"
        >
          Known More
          <MoveRight className="ml-2 h-4 w-6 transition-transform duration-500 group-hover:translate-x-2" />
        </Link>
      </motion.div>
      <motion.ul
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap items-center justify-evenly gap-x-10 bg-[#D4F0FF] px-2.5 shadow-xl md:mx-auto md:h-16 md:flex-row"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#00aeff34]"></div>
        <div className="via-transpar= absolute inset-0 bg-gradient-to-l from-transparent to-[#00aeff34]"></div>
        {list.map((item) => (
          <motion.li
            variants={listItem}
            key={item.id}
            className="my-2 flex cursor-pointer items-center gap-2"
          >
            <span>
              <img src="/icons/tick.svg" alt="tick" />
            </span>
            {item.name}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-2.5 grid gap-8 px-2.5 pb-8 pt-20 md:mx-20 lg:grid-cols-2 lg:place-self-center xl:flex xl:justify-center"
      >
        <motion.img
          variants={listItem}
          src="/pictures/environment.png"
          alt="environment"
          className="shadowxl w-full md:col-span-5"
        />
        <motion.img
          variants={listItem}
          src="/pictures/valves_about.png"
          alt="environment"
          className="hidden w-full rounded-xl md:col-span-5 xl:block"
        />
      </motion.div>
    </section>
  );
}
