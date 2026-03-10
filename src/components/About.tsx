const About = () => {
  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">ABOUT</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Apex Motorsport
              </h3>
              
              <div className="space-y-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Apex Motorsport is a premium digital platform dedicated to exceptional sports and luxury vehicles. 
                  We help car owners showcase and sell their vehicles while connecting buyers with unique and carefully 
                  presented cars from around the world.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  In addition to vehicle sales, we offer exclusive car rental experiences, allowing enthusiasts to 
                  discover and drive high-performance machines. Our platform combines professional presentation, 
                  detailed vehicle information, and a curated selection of cars for people who truly appreciate 
                  automotive excellence.
                </p>
              </div>
            </div>
            
            <div className="space-y-12">
              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">OUR VALUES</h4>
                <div className="space-y-6">
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Transparency</h5>
                    <p className="text-muted-foreground">
                      Clear vehicle information, verified listings, and honest presentation for buyers and sellers.
                    </p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Quality</h5>
                    <p className="text-muted-foreground">
                      A curated collection of exceptional vehicles with professional images and detailed specifications.
                    </p>
                  </div>
                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">Experience</h5>
                    <p className="text-muted-foreground">
                      From discovering rare cars to driving exclusive rentals, we create memorable automotive experiences.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">PLATFORM</h4>
                    <p className="text-xl">Digital Showroom</p>
                  </div>
                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">FOCUS</h4>
                    <p className="text-xl">Luxury & Sports Cars</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;