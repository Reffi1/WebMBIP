import React from "react";
import Hero from "@/app/components/Home/Hero";
import Companies from "@/app/components/Home/Companies";
import Courses from "@/app/components/Home/Courses";
import ContactForm from "@/app/components/ContactForm";
import Statistics from "./components/Home/Statistics";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Mitrabhakti Inti Persada",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Courses />
      <Statistics />
      {/* <Testimonial /> */}
      <Companies />
      <ContactForm/>
    </main>
  );
}