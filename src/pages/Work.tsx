import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ferrari from "@/assets/manufacturers/Ferrari/models/488 Pista/2019-ferrari-488-pista-103-1528476282.jpg";
import lamborghini from "@/assets/manufacturers/Lamborghini/models/Aventador SVJ/2020-lamborghini-aventador-svj-roadster-drive-111-1576871370.jpg";
import mclaren from "@/assets/manufacturers/McLaren/models/720S/2019-mclaren-720s-spider-122-hdr-1565493353.jpg";

const Work = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const projects = [
    {
      image: ferrari,
      title: "Ferrari 488 Pista",
      location: "Ferrari · 2019",
      category: "FERRARI",
      description:
        "A track-focused Ferrari powered by a twin-turbo V8 delivering exceptional performance, aerodynamic precision, and unmistakable Italian design.",
      power: "710 HP",
      year: "2019",
    },
    {
      image: lamborghini,
      title: "Lamborghini Aventador SVJ",
      location: "Lamborghini · 2020",
      category: "LAMBORGHINI",
      description:
        "One of Lamborghini’s most extreme V12 supercars, combining aggressive styling, advanced aerodynamics, and extraordinary driving dynamics.",
      power: "759 HP",
      year: "2020",
    },
    {
      image: mclaren,
      title: "McLaren 720S Spider",
      location: "McLaren · 2019",
      category: "MCLAREN",
      description:
        "A lightweight carbon-fiber supercar featuring a twin-turbo V8 and exceptional performance with the thrill of open-top driving.",
      power: "710 HP",
      year: "2019",
    },
    {
      image: ferrari,
      title: "Ferrari 488 Pista",
      location: "Ferrari · 2019",
      category: "FERRARI",
      description:
        "Designed for pure driving engagement, the 488 Pista blends racing technology with refined Italian craftsmanship.",
      power: "710 HP",
      year: "2019",
    },
    {
      image: lamborghini,
      title: "Lamborghini Aventador SVJ",
      location: "Lamborghini · 2020",
      category: "LAMBORGHINI",
      description:
        "A naturally aspirated V12 flagship delivering raw performance, precision handling, and unmistakable Lamborghini character.",
      power: "759 HP",
      year: "2020",
    },
    {
      image: mclaren,
      title: "McLaren 720S",
      location: "McLaren · 2019",
      category: "MCLAREN",
      description:
        "Engineered around a carbon-fiber monocoque, the 720S delivers extraordinary speed, balance, and cutting-edge supercar technology.",
      power: "710 HP",
      year: "2019",
    },
  ];

  const categories = ["ALL", "FERRARI", "LAMBORGHINI", "MCLAREN"];

  const filteredProjects =
    activeCategory === "ALL"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h1 className="text-6xl md:text-8xl font-light text-architectural mb-8">
                OUR CARS
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl">
                A curated selection of our architectural projects, each telling
                a unique story through thoughtful design and meticulous
                attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              {categories.map((category) => {
                const flagGradient =
                  category === "FERRARI" || category === "LAMBORGHINI"
                    ? "linear-gradient(to right, #009246, #ffffff, #ce2b37)"
                    : category === "MCLAREN"
                      ? "linear-gradient(to right, #cf142b, #ffffff, #00247d)"
                      : "linear-gradient(to right, #7A0C1B, #7A0C1B)";

                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`text-minimal transition-colors duration-300 relative group ${
                      activeCategory === category
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {category}

                    <span
                      className={`absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 origin-left ${
                        activeCategory === category
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                      style={{ background: flagGradient }}
                    ></span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
              {filteredProjects.map((project, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden mb-8">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Project Category Badge */}
                    <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm px-4 py-2">
                      <span className="text-minimal text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-light text-architectural mb-2 group-hover:text-muted-foreground transition-colors duration-500">
                        {project.title}
                      </h3>
                      <p className="text-minimal text-muted-foreground">
                        {project.location}
                      </p>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex gap-8 pt-4 border-t border-border">
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">
                          POWER
                        </p>
                        <p className="text-foreground">{project.power}</p>
                      </div>
                      <div>
                        <p className="text-minimal text-muted-foreground mb-1">
                          YEAR
                        </p>
                        <p className="text-foreground">{project.year}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Ready to Start
              <br />
              What is you dream car?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Let's help you find you next car. Whether you're looking for a
              sleek Ferrari, a powerful Lamborghini, or a cutting-edge McLaren,
              we have the expertise to make your dream a reality.
            </p>
            <a
              href="#contact"
              className="inline-block text-minimal text-foreground hover:text-muted-foreground transition-colors duration-300 relative group"
            >
              GET IN TOUCH
              <span className="absolute bottom-0 left-0 w-full h-px bg-foreground group-hover:bg-muted-foreground transition-colors duration-300"></span>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Work;
