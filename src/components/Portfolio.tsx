import case1 from "@/assets/portfolio/case-1.png";
import case2 from "@/assets/portfolio/case-2.png";
import case3 from "@/assets/portfolio/case-3.png";

import { useTranslation } from "react-i18next";

const Portfolio = () => {
  const { t } = useTranslation();

  const cases = [
    {
      image: case1,
      title: t("cases.case_1_title"),
      category: t("cases.case_1_category"),
      description: t("cases.case_1_desc")
    },
    {
      image: case2,
      title: t("cases.case_2_title"),
      category: t("cases.case_2_category"),
      description: t("cases.case_2_desc")
    },
    {
      image: case3,
      title: t("cases.case_3_title"),
      category: t("cases.case_3_category"),
      description: t("cases.case_3_desc")
    }
  ];

  return (
    <section id="cases" className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">

          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">
              {t("cases.label")}
            </h2>

            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              {t("cases.title")}
            </h3>
          </div>

          <div className="space-y-32">
            {cases.map((item, index) => (
              <div key={index} className="group">

                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-2xl font-light text-architectural mb-2">
                      {item.title}
                    </h4>

                    <p className="text-minimal text-muted-foreground">
                      {item.category}
                    </p>
                  </div>

                  <div className="md:col-span-2">
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;