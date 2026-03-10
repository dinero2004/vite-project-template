const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20">
            
            <div className="space-y-12">
              
              <div>
                <h2 className="text-minimal text-muted-foreground mb-4">GET IN TOUCH</h2>
                <h3 className="text-4xl md:text-6xl font-light text-architectural">
                  Let's work together
                </h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">EMAIL</h4>
                  <a href="mailto:lazar.minkov@gmail.com" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    lazar.minkov@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">PHONE</h4>
                  <a href="tel:+41782348028" className="text-xl hover:text-muted-foreground transition-colors duration-300">
                    +41 78 234 80 28
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">LOCATION</h4>
                  <address className="text-xl not-italic">
                    Musterstrasse 3
                    <br />
                    3000 Bern, Switzerland
                  </address>
                </div>
              </div>

              <div>
                <h4 className="text-minimal text-muted-foreground mb-4">FOLLOW US</h4>
                <div className="space-y-3">
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

              <div className="pt-8 border-t border-border">
                <p className="text-muted-foreground">
                  Delivering exceptional automotive experiences through carefully curated vehicles and uncompromising quality.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;