import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20">
              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h1>
                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  Let's Work Together
                </h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">EMAIL</h3>
                    <a href="mailto:lazar.minkov@gmail.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      lazar.minkov@gmail.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">PHONE</h3>
                    <a href="tel:+41782348028" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                      +41 78 234 80 28
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">STUDIO</h3>
                    <address className="text-xl not-italic">
                      Muserstrasse 3
                      <br />
                      8001 Zürich
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">FOLLOW US</h3>
                  <div className="space-y-4">
                    <a href="https://www.instagram.com/lazar.minkov/" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/lazar-minkov-b0494b22a/" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </a>
                    <a href="https://github.com/dinero2004" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      GitHub
                    </a>
                  </div>
                </div>
                
                <div className="pt-12 border-t border-border">
                  <p className="text-muted-foreground">
                   We approach every vehicle with passion, precision, and a commitment to excellence. Our process begins with understanding our clients’ needs and presenting exceptional cars through a trusted platform that connects sellers, buyers, and enthusiasts.
                  </p>
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

export default Contact;