import { CSSProperties } from "react";

import { Box, Divider, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import { Carousel } from "../../Components/Carousel/Carousel";
import { Payment } from "../../Components/Payment/Payment";
import { useItemArray } from "../../Hooks/itemArray";
import { breakpoints } from "../../styles/variables/breakpoints";
import { breakpointStyles, styles } from './ItemStyle';
import { mergeStyles } from "../../styles/helper";
import { TabMenu } from "../../Components/TabMenu/TabMenu";
import { ExtraCard } from "../../Components/ExtraCard/ExtraCard";
import h20 from "../../assets/images/H20Scooter.jpg"
import { tPage } from "../../i18n/translator";

export const Item = () => {
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;
  const [itemArray] = useItemArray();

  return (
    <Flex style={mergeStyles(styles.wrapper, breakpointStyles[breakpoint].wrapper)}>
      <Flex style={mergeStyles(styles.contentWrapper, breakpointStyles[breakpoint].contentWrapper)}>
        <Flex style={breakpointStyles[breakpoint].carouselWrapper}>
          <Carousel/>
        </Flex>
        <Flex style={breakpointStyles[breakpoint].paymentWrapper}>
          <Payment/>
        </Flex>
        <Box>
          <Flex>
            <Divider style={styles.dividerExtraMenu} orientation="vertical"/>
            <Flex style={styles.contentExtraMenu as CSSProperties}>
              {itemArray.map((item, index) =>
                <Text _hover={styles.hoverExtraItem} style={styles.extraItem} key={index}>{item.label}</Text>)}
            </Flex>
          </Flex>
        </Box>
      </Flex>
      <Divider/>
      <TabMenu/>
      <Text style={styles.reviewText}>{tPage("title.reviewProduct")}</Text>
      <Divider style={{paddingTop: "20px"}}/>
      <Text style={styles.redText}>{tPage("description.mustLogged")}</Text>
      <Text style={styles.blueText}>{tPage("description.noReview")}</Text>
      <Divider style={{marginTop: "40px"}}/>
      <Text style={styles.customerTextLarge as CSSProperties}>{tPage("description.customers")}</Text>
      <Text style={styles.customerTextSmall as CSSProperties}>{tPage("description.customers")}</Text>
      <Flex>
        <Flex style={breakpointStyles[breakpoint].alsoBought}>
          <ExtraCard src={h20} title="Scotex H20 eKFV" priceOld="849" priceNew="749" weight="24.8"/>
        </Flex>
      </Flex>
      <Text style={styles.similarText as CSSProperties}>{tPage("title.similar")}</Text>
      <Text style={styles.similarTextSmall as CSSProperties}>{tPage("description.similarProduct")}</Text>
      <Text style={styles.youSeenText as CSSProperties}>{tPage("title.youSeen")}</Text>
      <Text style={styles.footerText as CSSProperties}>{tPage("description.followingProd")}</Text>
    </Flex>
  );
};
