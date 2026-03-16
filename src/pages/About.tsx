import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      <Header />

      <section className="pt-32 pb-32 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-20 items-center">

              <div>
                <h1 className="text-minimal text-muted-foreground mb-4">
                  {t("about.label")}
                </h1>

                <h2 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                  {t("about.title")}
                </h2>

                <div className="space-y-8">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description_1")}
                  </p>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("about.description_2")}
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                <div>
                  <h3 className="text-minimal text-muted-foreground mb-6">
                    {t("about.approach_label")}
                  </h3>

                  <div className="space-y-6">

                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">
                        {t("about.research_title")}
                      </h4>
                      <p className="text-muted-foreground">
                        {t("about.research_desc")}
                      </p>
                    </div>

                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">
                        {t("about.collaboration_title")}
                      </h4>
                      <p className="text-muted-foreground">
                        {t("about.collaboration_desc")}
                      </p>
                    </div>

                    <div className="border-l-2 border-architectural pl-6">
                      <h4 className="text-lg font-medium mb-2">
                        {t("about.innovation_title")}
                      </h4>
                      <p className="text-muted-foreground">
                        {t("about.innovation_desc")}
                      </p>
                    </div>

                  </div>
                </div>

                <div className="pt-8 border-t border-border">
                  <div className="grid grid-cols-2 gap-8">

                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">
                        {t("about.founded")}
                      </h3>
                      <p className="text-xl">2015</p>
                    </div>

                    <div>
                      <h3 className="text-minimal text-muted-foreground mb-2">
                        {t("about.projects")}
                      </h3>
                      <p className="text-xl">200+</p>
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