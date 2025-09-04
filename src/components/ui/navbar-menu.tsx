"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white px-1 sm:px-2 py-1 text-xs sm:text-sm"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2 pt-2 z-50">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-lg overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-lg min-w-[280px] max-w-[95vw] sm:max-w-[500px]"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-full h-full p-2 sm:p-3"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = (props: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => props.setActive(null)}
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-lg flex justify-center space-x-1 sm:space-x-2 px-2 sm:px-3 md:px-4 py-2 text-xs sm:text-sm"
    >
      {props.children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link 
      href={href} 
      className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 p-2 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
    >
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-lg w-full sm:w-[140px] h-auto sm:h-[70px] object-cover"
      />
      <div className="flex flex-col space-y-1">
        <h4 className="text-sm sm:text-base font-bold text-black dark:text-white leading-tight">
          {title}
        </h4>
        <p className="text-neutral-700 text-xs sm:text-sm max-w-[15rem] dark:text-neutral-300 leading-relaxed">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ 
  children, 
  ...rest 
}: React.ComponentProps<typeof Link>) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors py-2 px-1 block"
    >
      {children}
    </Link>
  );
};
