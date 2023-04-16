// React
import { CSSProperties, FC, useEffect, useState } from "react";

// Chakra
import { Flex, Box, Icon, Text } from "@chakra-ui/react";

// i18n
import { useTranslation } from "react-i18next";

// Common
import { styles } from "./ChangeLangStyles";
import { ENFlag, UKFlag } from "../../assets/svg";

const languages = [
  {
    label: "Українська",
    lang: "uk",
    icon: UKFlag
  },
  {
    label: "English",
    lang: "en",
    icon: ENFlag
  }
]

type LangState = {
  langName: string
  visibility?: boolean
  icon: FC
};

type changeLang = (lang: string, label: string, icon: FC) => void;

export const ChangeLang: FC = (): JSX.Element => {
  const [ langData, setLangData ] = useState<LangState>({langName: "Українська", visibility: false, icon: UKFlag});
  const { i18n } = useTranslation();

  const changeLanguage: changeLang = (lang, label, icon) => {
    i18n.changeLanguage(lang);
    setLangData({langName: label, icon: icon })
  };

  useEffect(() => {
    i18n.changeLanguage("uk");
  }, []);


  const selectedInput = languages.map((item, index) =>
    <Flex
      onClick={() => changeLanguage(item.lang, item.label, item.icon)}
      _hover={styles.langMenuItemHover}
      style={styles.langMenuItem}
      key={index}>
      <Icon as={item.icon}/>
      <Text >{item.label}</Text>
    </Flex>
  )

  const toggleVisibility = (): void => {
    setLangData((prevState) => ({
      ...prevState,
      visibility: !prevState.visibility
    }));
  }

  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Flex onClick={toggleVisibility} style={styles.button}>
        <Icon as={langData.icon}/>
        <Text >{langData.langName}</Text>
      </Flex>
      <Flex style={styles.langMenuWrapper as CSSProperties}>
        {langData.visibility &&
          <Box style={styles.langMenu as CSSProperties}>
            {selectedInput}
          </Box>
        }
      </Flex>
    </Flex>
  );
};
