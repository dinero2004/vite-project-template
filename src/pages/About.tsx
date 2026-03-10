import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">ABOUT</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Apex Motorsport
                </h2>
                
                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Apex Motorsport is a premium digital showroom dedicated to showcasing exceptional sports and luxury vehicles. Our platform connects car owners with serious buyers by presenting vehicles with professional images, detailed specifications, and high-quality listings. We help customers promote and sell their cars to a targeted audience of enthusiasts and collectors.
                  </p>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                   In addition to vehicle sales, Apex Motorsport offers exclusive car rental experiences. Clients can discover and rent high-performance and luxury vehicles directly through our platform. Our goal is to create a refined, trustworthy space where unique cars can be showcased, sold, and experienced by people who truly appreciate them.
                  </p>
                </div>
              </div>
              
              <div className="space-y-12">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">APPROACH</h3>
                  <div className="space-y-6">
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Research</h4>
                      <p className="text-muted-foreground">Deep understanding of context, culture, and climate</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Collaboration</h4>
                      <p className="text-muted-foreground">Close partnership with clients, engineers, and craftspeople</p>
                    </div>
                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">Innovation</h4>
                      <p className="text-muted-foreground">Sustainable materials and forward-thinking design solutions</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">FOUNDED</h3>
                      <p className="text-xl">2023</p>
                    </div>
                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">PROJECTS</h3>
                      <p className="text-xl">150+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;