import { useTranslation } from "react-i18next";

export const tPage = (key: string): string => {
  const { t } = useTranslation();

  return t(key);
};
