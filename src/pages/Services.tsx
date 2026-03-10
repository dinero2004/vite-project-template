import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "SELL YOUR CAR",
      description: "We help owners present and sell their vehicles through our premium digital showroom, connecting them with serious buyers."
    },
    {
      number: "02", 
      title: "EXCLUSIVE RENTALS",
      description: "Experience the thrill of driving exceptional sports and luxury cars available for exclusive rental."
    },
    {
      number: "03",
      title: "PREMIUM VEHICLE SHOWCASE",
      description: "Every car is presented with high-quality visuals, detailed specifications, and a professional listing."
    },
    {
      number: "04",
      title: "CLIENT SUPPORT",
      description: "Our team assists clients throughout the process, ensuring a smooth experience for both sellers and renters."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h1 className="text-minimal text-muted-foreground mb-4">SERVICES</h1>
              <h2 className="text-4xl md:text-6xl font-light text-architectural">
                What We Do
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="flex items-start space-x-6">
                    <span className="text-minimal text-muted-foreground font-medium">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="text-2xl font-light mb-4 text-architectural group-hover:text-muted-foreground transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;