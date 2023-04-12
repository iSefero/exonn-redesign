import { Link, Tab, TabList, TabPanel, TabPanels, Text, Tabs } from "@chakra-ui/react";

import { TabMenuDescription } from "../TabMenuDescription/TabMenuDescription";
import { TabMenuSpecification } from "../TabMenuSpecification/TabMenuSpecification";
import pdf from "../../assets/images/pdf.png"
import { styles } from "./TabMenuStyles";
import { tPage } from "../../i18n/translator";

export const TabMenu = () => {
  return (
    <Tabs variant='enclosed'>
      <TabList>
        <Tab>{tPage("title.description")}</Tab>
        <Tab>{tPage("title.specification")}</Tab>
        <Tab>{tPage("title.manual")}</Tab>
      </TabList>
      <TabPanels style={styles.tabContent}>
        <TabPanel>
          <TabMenuDescription/>
        </TabPanel>
        <TabPanel>
          <TabMenuSpecification/>
        </TabPanel>
        <TabPanel>
          <Link _hover={styles.linkHover} style={styles.link}
                href='https://www.scotex.de/out/media/SCOTEX_MAH10_V1.1..pdf' isExternal>
            <img width="35px" height="35px" alt="error" src={pdf}/>
            <Text >Scotex H10</Text>
          </Link>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
}