// React
import {CSSProperties, FC, useRef} from "react";

// Chakra
import {
  Box,
  Divider,
  Flex,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';

// Common
import { Carousel } from "../../components/Carousel/Carousel";
import { Payment } from "../../components/Payment/Payment";
import { breakpoints } from "../../styles/variables/breakpoints";
import { breakpointStyles, styles } from './ItemStyle';
import { mergeStyles } from "../../styles/helper";
import { ExtraCard } from "../../components/ExtraCard/ExtraCard";
import { tPage } from "../../i18n/translator";
import { AboutProduct} from "../../components/AboutProduct/AboutProduct";
import { specification } from "../../data/specificationData";
import pdf from "../../assets/images/pdf.png";
import { extraBought } from "../../data/extraBought";
import { ItemDescription } from "../../components/ItemDescription/ItemDescription";
import { ItemSpecification } from "../../components/ItemSpecification/ItemSpecification";
import { IExtraCard } from "../../types/types";

export const Item: FC = (): JSX.Element => {
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;
  const specificationRef = useRef<HTMLParagraphElement>(null)

  const renderExtraItem = (data: IExtraCard[]) => {
    return (
      data.map((item, index) =>
        <Flex
          key={index}
          _hover={styles.hoverExtraItem}
          style={mergeStyles(styles.extraItem, breakpointStyles[breakpoint].extraItem)}
        >
          <ExtraCard
            src={item.src}
            title={item.title}
            price={item.price}
            rating={item.rating}
            available={item.available}
            priceOld={item.priceOld}
          />
        </Flex>
      )
    )
  };

  return (
    <Flex style={mergeStyles(styles.wrapper, breakpointStyles[breakpoint].wrapper)}>
      <Tabs>
        <TabList>
          <Tab>{tPage("title.about")}</Tab>
          <Tab>{tPage("title.specification")}</Tab>
          <Tab>{tPage("title.manual")}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel padding="0px">
            <Flex style={mergeStyles(styles.contentWrapper, breakpointStyles[breakpoint].contentWrapper)}>
              <Flex style={mergeStyles(styles.itemInfo, breakpointStyles[breakpoint].itemInfo)}>
                <Flex style={styles.paymentBlock}>
                  <Carousel/>
                </Flex>
                <Flex style={styles.paymentBlock}>
                  <AboutProduct specificRef={specificationRef} data={specification}/>
                </Flex>
              </Flex>
              <Box>
                <Payment/>
              </Box>
            </Flex>
            <Flex style={styles.descriptionBlock}>
              <ItemDescription/>
            </Flex>
            <Text ref={specificationRef} style={styles.textSpecification}>{tPage("title.specification")}</Text>
            <ItemSpecification/>
            <Text style={styles.reviewText}>{tPage("title.reviewProduct")}</Text>
            <Divider style={styles.dividerAboveReview}/>
            <Text style={styles.redText}>{tPage("description.mustLogged")}</Text>
            <Text style={styles.blueText}>{tPage("description.noReview")}</Text>
            <Divider style={styles.dividerUnderReview}/>
            <Text style={styles.customerTextLarge as CSSProperties}>{tPage("description.customers")}</Text>
            <Text style={styles.customerTextSmall as CSSProperties}>{tPage("description.customers")}</Text>
            <Flex style={styles.extraBlock as CSSProperties}>
              {renderExtraItem(extraBought.slice(0,2))}
            </Flex>
            <Text style={styles.similarText as CSSProperties}>{tPage("title.similar")}</Text>
            <Text style={styles.similarTextSmall as CSSProperties}>{tPage("description.similarProduct")}</Text>
            <Flex style={styles.extraBlock as CSSProperties}>
              {renderExtraItem(extraBought)}
            </Flex>
          </TabPanel>
          <TabPanel padding="0px">
            <ItemSpecification/>
          </TabPanel>
          <TabPanel padding="0px">
            <Link _hover={styles.linkHover} style={styles.link}
                  href='https://www.scotex.de/out/media/SCOTEX_MAH10_V1.1..pdf' isExternal>
              <img width="35px" height="35px" alt="error" src={pdf}/>
              <Text >Scotex H10</Text>
            </Link>
          </TabPanel>
        </TabPanels>
      </Tabs>

    </Flex>
  );
};
