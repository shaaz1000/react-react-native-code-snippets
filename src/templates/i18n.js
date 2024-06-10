import React from "react";
import { useTranslation, Trans } from "react-i18next";

const I18nExample = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>English</button>
      <button onClick={() => changeLanguage("de")}>German</button>
      <h1>{t("Welcome to React")}</h1>
      <Trans>Welcome to React</Trans>
    </div>
  );
};

export default I18nExample;
