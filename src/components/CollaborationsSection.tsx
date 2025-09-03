"use client";
import React from "react";
import { Gallery4, Gallery4Item } from "@/components/ui/gallery4";

const collaborationsData: Gallery4Item[] = [
  {
    id: "the-kp",
    title: "The KP",
    industry: "Micro-SaaS",
    description: "Pioneering micro-SaaS solutions that streamline business operations for small and medium enterprises. The KP specializes in developing lightweight, focused applications that solve specific business challenges with maximum efficiency and minimal complexity.",
    href: "https://thekp.com",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "origin-path",
    title: "Origin Path",
    industry: "Consultancy",
    description: "Strategic consulting firm that guides organizations through digital transformation journeys. Origin Path combines deep industry expertise with innovative methodologies to help businesses navigate complex technological and operational challenges in today's rapidly evolving market.",
    href: "https://originpath.com",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwyfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "valentis",
    title: "Valentis",
    industry: "Research & Development",
    description: "Advanced research and development organization focused on breakthrough innovations in technology and science. Valentis conducts cutting-edge research across multiple disciplines, translating theoretical discoveries into practical applications that drive industry advancement.",
    href: "https://valentis.com",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwzfHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: "idexia-studio",
    title: "Idexia Studio",
    industry: "Digital Landscaping",
    description: "Creative digital studio specializing in immersive digital landscapes and virtual environments. Idexia Studio combines artistic vision with advanced technology to create compelling digital experiences that transform how people interact with virtual spaces and digital content.",
    href: "https://idexiastudio.com",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHw0fHx8fHx8Mnx8MTcyMzgwNjkzOXw&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

export function CollaborationsSection() {
  return (
    <Gallery4
      title="Strategic Research Collaborations"
      description="We partner with leading organizations across diverse industries to accelerate research publication and showcase innovative work. These strategic alliances enable our partners to publish high-quality research on a fast-track basis, ensuring their groundbreaking discoveries reach the academic and business communities quickly."
      items={collaborationsData}
    />
  );
}
