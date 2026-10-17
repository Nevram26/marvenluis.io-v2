import { Hero } from "@/components/hero";
import { SelectedWork } from "@/components/project-work";
import { Experience, About } from "@/components/background-sections";
import { Contact } from "@/components/site-footer";
import { profile } from "@/lib/portfolio";

export default function HomePage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: profile.url,
    jobTitle: "Full-Stack Software Engineer",
    sameAs: [profile.github, profile.linkedin],
  };
  return (
    <main id="main-content" className="container-wide">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(person).replace(/</g, "\\u003c"),
        }}
      />
      <Hero />
      <SelectedWork />
      <Experience />
      <About />
      <Contact />
    </main>
  );
}
