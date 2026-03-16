import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      number: "01",
      title: t("services.service_1_title"),
      description: t("services.service_1_desc")
    },
    {
      number: "02",
      title: t("services.service_2_title"),
      description: t("services.service_2_desc")
    },
    {
      number: "03",
      title: t("services.service_3_title"),
      description: t("services.service_3_desc")
    },
    {
      number: "04",
      title: t("services.service_4_title"),
      description: t("services.service_4_desc")
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h1 className="text-minimal text-muted-foreground mb-4">
                {t("services.label")}
              </h1>
              <h2 className="text-4xl md:text-6xl font-light text-architectural">
                {t("services.title")}
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