import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      <button
        onClick={() => changeLanguage("en")}
        className="hover:opacity-70 transition"
      >
        🇬🇧 EN
      </button>

      <button
        onClick={() => changeLanguage("bg")}
        className="hover:opacity-70 transition"
      >
        🇧🇬 BG
      </button>

      <button
        onClick={() => changeLanguage("de")}
        className="hover:opacity-70 transition"
      >
        🇩🇪 DE
      </button>
    </div>
  );
};

export default LanguageSwitcher;