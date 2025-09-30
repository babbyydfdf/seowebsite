import Hero from "@/components/hero";

import Services from "@/components/services";

import Results from "@/components/results";

import Strategy from "@/components/strategy";

import ContactForm from "@/components/contactfo";

import Content from "@/components/content";

import Success from "@/components/success";

//import CTA from "@/components/cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <Content />
      <Services />
      <Success/>
      <Results />

      <Strategy />

      <ContactForm />
    </main>
  );
}
