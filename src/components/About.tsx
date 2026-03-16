import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">

            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">
                {t("about.label")}
              </h2>

              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                {t("about.title")}
              </h3>

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
                <h4 className="text-minimal text-muted-foreground mb-6">
                  {t("about.approach_label")}
                </h4>

                <div className="space-y-6">

                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      {t("about.research_title")}
                    </h5>
                    <p className="text-muted-foreground">
                      {t("about.research_desc")}
                    </p>
                  </div>

                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      {t("about.collaboration_title")}
                    </h5>
                    <p className="text-muted-foreground">
                      {t("about.collaboration_desc")}
                    </p>
                  </div>

                  <div className="border-l-2 border-architectural pl-6">
                    <h5 className="text-lg font-medium mb-2">
                      {t("about.innovation_title")}
                    </h5>
                    <p className="text-muted-foreground">
                      {t("about.innovation_desc")}
                    </p>
                  </div>

                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <div className="grid grid-cols-2 gap-8">

                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">
                      {t("about.founded")}
                    </h4>
                    <p className="text-xl">2015</p>
                  </div>

                  <div>
                    <h4 className="text-minimal text-muted-foreground mb-2">
                      {t("about.projects")}
                    </h4>
                    <p className="text-xl">200+</p>
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