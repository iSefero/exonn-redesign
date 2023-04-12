import { CSSProperties, FC } from "react";

import { Divider, Flex, Text } from "@chakra-ui/react";

import { useTranslation } from "react-i18next";

import { styles } from "./ChangeLangStyles";

export const ChangeLang: FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = ( lang: string ): void => {
    i18n.changeLanguage(lang)
  };

  const selectedLang = ( item: string ): string => i18n.language === item ? "#95959e" : "inherit";

  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Text
        onClick={() => changeLanguage("uk")}
        _hover={styles.hover}
        style={styles.button(selectedLang("uk"))}>
        UA
      </Text>
      <Divider style={styles.divider} orientation="vertical"/>
      <Text
        _hover={styles.hover}
        onClick={() => changeLanguage("en")}
        style={styles.button(selectedLang("en"))}>
        EN
      </Text>
    </Flex>
  )
}