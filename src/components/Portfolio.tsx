import project1 from "@/assets/ferrari-488-pista.jpg";
import project2 from "@/assets/alfa-romeo-giulia-qv.jpeg";
import project3 from "@/assets/lamborghini-revuelto.jpeg";

const Portfolio = () => {
  const projects = [
    {
      image: project1,
      title: "Ferrari 488 PISTA",
      location: "NEW YORK, 2020",
      description: "The Ferrari 488 Pista is a track-focused, lightweight, high-performance variant of the 488 GTB"
    },
    {
      image: project2,
      title: "Alfa Romeo Giulia Quadrifoglio",
      location: "Italy, 2023",
      description: "The Alfa Romeo Giulia Quadrifoglio is a high-performance sports sedan that combines Italian style with cutting-edge technology."
    },
    {
      image: project3,
      title: "Lamborghini Revuelto",
      location: "Toscana, 2023",
      description: ""
    }
  ];

  return (
    <section id="work" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">SELECTED WORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Our Projects
            </h3>
          </div>
          
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                
                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-2xl font-light text-architectural mb-2">
                      {project.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {project.location}
                    </p>
                  </div>
                  
                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;