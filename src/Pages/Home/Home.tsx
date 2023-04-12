import { Divider, Flex, Text, Image, Button, AspectRatio, useBreakpointValue } from "@chakra-ui/react";

import right from "../../assets/images/scooterRight.png"
import h10 from "../../assets/images/h10Scooter.png"
import top from "../../assets/images/scooterTop.png"
import topLogo from "../../assets/images/scooterTopLogo.png"
import men from "../../assets/images/scooterForMen.jpg"
import girl from "../../assets/images/scooterForGirl.jpg"
import left from "../../assets/images/scooterLeft.jpg"
import h20 from "../../assets/images/h20Scooter.png"
import quad from "../../assets/images/qadro.jpg"
import quadLogo from "../../assets/images/quadroLogo.png"
import wheely from "../../assets/images/wheely.jpg"
import wheelyLogo from "../../assets/images/wheelyLogo.png"

import { tPage } from "../../i18n/translator";
import { ReactNode} from "react";
import { breakpointStyles, styles } from "./HomeStyles";
import { mergeStyles } from "../../styles/helper";
import { breakpoints } from "../../styles/variables/breakpoints";

type WrapperProps = {
  children: ReactNode
}

export const Home = () => {
  const breakpoint = (useBreakpointValue(breakpoints) as string) || breakpoints.lg;

  const mainImage = (src: string) => <Image style={styles.image} alt="error" src={src}/>;

  const mainDescription = (src: string, title: string, moreInfo?: string) =>
    <Flex style={mergeStyles(styles.mainContentBlock, breakpointStyles[breakpoint].mainContentBlock)}>
      <Image alt="error" src={src}/>
      <Text>{title}</Text>
      <Text>{moreInfo}</Text>
      <Button style={styles.button}>{tPage("button.moreInfo")}</Button>
    </Flex>;


  const Wrapper = ({children}: WrapperProps) =>
    <>
      <Divider style={styles.divider}/>
      <Flex style={mergeStyles(styles.mainContentWrapper, breakpointStyles[breakpoint].mainContentWrapper)}>
        {children}
      </Flex>
    </>

  return (
    <Flex style={mergeStyles(styles.wrapper, breakpointStyles[breakpoint].wrapper)}>
      <Wrapper>
        {mainImage(right)}
        {mainDescription(h10, tPage("homeContent.h10first"), tPage("homeContent.h10second"))}
      </Wrapper>
      <Wrapper>
        {mainDescription(topLogo, tPage("homeContent.neon"))}
        {mainImage(top)}
      </Wrapper>
      <Flex style={mergeStyles(styles.imageBlock, breakpointStyles[breakpoint].imageBlock)}>
        <Image alt="error" src={men}/>
        <Image alt="error" src={girl}/>
      </Flex>
      <Wrapper>
        {mainDescription(h20, tPage("homeContent.h20first"), tPage("homeContent.h20second"))}
        {mainImage(left)}
      </Wrapper>
      <AspectRatio style={styles.videoBlock} ratio={100 / 56.2}>
        <iframe
          title='scooter'
          src="https://www.youtube.com/embed/kESuz6AydDU"
          allowFullScreen
        ></iframe>
      </AspectRatio>
      <Wrapper>
        {mainDescription(quadLogo, tPage("homeContent.quad"))}
        {mainImage(quad)}
      </Wrapper>
      <Wrapper>
        {mainImage(wheely)}
        {mainDescription(wheelyLogo, tPage("homeContent.wheely"))}
      </Wrapper>
    </Flex>
  )
}