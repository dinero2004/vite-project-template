import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";
import ContactForm from "@/components/ui/contact-form";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-32 bg-background">
        {/* <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            <div className="grid md:grid-cols-2 gap-20">

              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">
                  {t("contact.label")}
                </h1>

                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  {t("contact.title_line1")}
                  <br />
                  {t("contact.title_line2")}
                </h2>

                <div className="space-y-8">

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">
                      {t("contact.email")}
                    </h3>

                    <a
                      href="mailto:miroslav.minkov@gmail.com"
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      miroslav.minkov@gmail.com
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">
                      {t("contact.phone")}
                    </h3>

                    <a
                      href="tel:+359898527830"
                      className="text-xl hover:text-muted-foreground transition-colors duration-300"
                    >
                      +359 898 52 78 30
                    </a>
                  </div>

                  <div>
                    <h3 className="text-minimal text-muted-foreground mb-2">
                      {t("contact.office")}
                    </h3>

                    <address className="text-xl not-italic">
                      {t("contact.address_line1")}
                      <br />
                      {t("contact.address_line2")}
                    </address>
                  </div>

                </div>
              </div>

              <div className="space-y-8">

                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">
                    {t("contact.follow")}
                  </h3>

                  <div className="space-y-4">
                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      Instagram
                    </a>

                    <a href="#" className="block text-xl hover:text-muted-foreground transition-colors duration-300">
                      LinkedIn
                    </a>
                  </div>
                </div>

                <div className="pt-12 border-t border-border">
                  <p className="text-muted-foreground">
                    {t("contact.description")}
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div> */}
        <div className="container mx-auto px-6">
        <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;