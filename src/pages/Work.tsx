import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

import project1 from "@/assets/portfolio/case-1.png";
import project2 from "@/assets/portfolio/case-2.png";
import project3 from "@/assets/portfolio/case-3.png";

const Work = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState("ALL");

  const projects = [
    {
      image: project1,
      title: "Contract Dispute Resolution",
      category: "COMMERCIAL",
      description:
        "Representation of a corporate client in a complex contractual dispute involving international partners and commercial obligations.",
      area: "Corporate Law",
      year: "2024"
    },
    {
      image: project2,
      title: "Civil Property Litigation",
      category: "RESIDENTIAL",
      description:
        "Legal representation in a property ownership dispute including negotiation, mediation and court proceedings.",
      area: "Civil Law",
      year: "2023"
    },
    {
      image: project3,
      title: "Corporate Restructuring",
      category: "COMMERCIAL",
      description:
        "Advising a company during a restructuring process including compliance, shareholder agreements and legal risk management.",
      area: "Corporate Law",
      year: "2023"
    }
  ];

  const categories = [
    { key: "ALL", label: t("work.categories.all") },
    { key: "RESIDENTIAL", label: t("work.categories.residential") },
    { key: "COMMERCIAL", label: t("work.categories.commercial") },
    { key: "CULTURAL", label: t("work.categories.cultural") },
    { key: "HOSPITALITY", label: t("work.categories.hospitality") }
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-light text-architectural mb-6">
              {t("work.title")}
            </h1>

            <p className="text-lg text-muted-foreground max-w-3xl">
              {t("work.description")}
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-wrap gap-8">

            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`text-minimal transition-colors duration-300 ${
                  activeCategory === category.key
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.label}
              </button>
            ))}

          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">

            {filteredProjects.map((project, index) => (
              <div key={index} className="group">

                <div className="relative overflow-hidden mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute top-6 left-6 bg-background/90 px-4 py-2">
                    <span className="text-minimal">
                      {project.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl font-light mb-2 text-architectural">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex gap-10 pt-4 border-t border-border">

                  <div>
                    <p className="text-minimal text-muted-foreground">
                      {t("work.area")}
                    </p>
                    <p>{project.area}</p>
                  </div>

                  <div>
                    <p className="text-minimal text-muted-foreground">
                      {t("work.year")}
                    </p>
                    <p>{project.year}</p>
                  </div>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-muted">
        <div className="container mx-auto px-6 text-center max-w-3xl">

          <h2 className="text-4xl md:text-5xl font-light mb-6 text-architectural">
            {t("work.cta.title")}
          </h2>

          <p className="text-muted-foreground mb-10">
            {t("work.cta.description")}
          </p>

          <a
            href="/contact"
            className="text-minimal hover:text-muted-foreground transition-colors"
          >
            {t("work.cta.button")}
          </a>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Work;