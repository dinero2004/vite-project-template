import { useTranslation } from "react-i18next";

type Props = {
  image: string;
  nameKey: string;
  titleKey: string;
  email: string;
  phone: string;
};

const TeamCard = ({ image, nameKey, titleKey, email, phone }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="group border border-border p-8 bg-card hover:shadow-lg transition-all duration-300">

      <div className="mb-6">
        <img
          src={image}
          alt={t(nameKey)}
          className="w-full h-72 object-cover"
        />
      </div>

      <h3 className="text-xl font-medium text-foreground mb-1">
        {t(nameKey)}
      </h3>

      <p className="text-minimal text-muted-foreground mb-6">
        {t(titleKey)}
      </p>

      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          <a href={`mailto:${email}`} className="hover:text-foreground">
            {email}
          </a>
        </p>

        <p>
          <a href={`tel:${phone}`} className="hover:text-foreground">
            {phone}
          </a>
        </p>
      </div>

    </div>
  );
};

export default TeamCard;