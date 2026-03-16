import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 gap-20">

            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">
                {t("contact.label")}
              </h2>

              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                {t("contact.title_line1")}
                <br />
                {t("contact.title_line2")}
              </h3>

              <div className="space-y-8">

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">
                    {t("contact.email")}
                  </h4>

                  <a
                    href="mailto:miroslav.minkov@gmail.com"
                    className="text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    miroslav.minkov@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">
                    {t("contact.phone")}
                  </h4>

                  <a
                    href="tel:+359898527830"
                    className="text-xl hover:text-muted-foreground transition-colors duration-300"
                  >
                    +359 898 52 78 30
                  </a>
                </div>

                <div>
                  <h4 className="text-minimal text-muted-foreground mb-2">
                    {t("contact.office")}
                  </h4>

                  <address className="text-xl not-italic">
                    {t("contact.address_line1")}
                    <br />
                    {t("contact.address_line2")}
                  </address>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;