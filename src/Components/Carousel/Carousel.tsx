import { CSSProperties, useState } from 'react';

import { Flex, Image, IconButton } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

import { carouselItems } from "../../data/carouselArray";
import {styles} from "./CarouselStyles";

export const Carousel = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [start, setStart] = useState<number>(0);

  const handlePrev = (): void => {
    if (start > 0) {
      setStart(start - 1);
    }
  };

  const handleNext = (): void => {
    if (start + 5 < carouselItems.length) {
      setStart(start + 1);
    }
  };

  const handleClick = (index: number): void => {
    setActiveIndex(index);
  };

  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Image src={carouselItems[activeIndex].original} objectFit="cover" />
      <Flex mt={4} alignItems="center">
        <Flex onClick={handlePrev} _hover={styles.IconHover} style={styles.leftSideIcon}>
          <IconButton
            style={styles.arrowIcon}
            aria-label="Previous Image"
            icon={<ChevronLeftIcon />}
            disabled={start === 0}
          />
        </Flex>
        <Flex style={styles.carouselWrapper as CSSProperties} >
          {carouselItems.slice(start, start + 5).map((image, index) => (
            <Flex
              key={index}
              onClick={() => handleClick(start + index)}
              cursor="pointer"
            >
              <Flex style={styles.carouselItem}>
                <Image
                  src={image.thumbnail}
                  boxSize="100%"
                  objectFit="contain"
                  borderWidth={index === activeIndex - start ? 2 : 0}
                />
              </Flex>
            </Flex>
          ))}
        </Flex>
        <Flex onClick={handleNext} _hover={styles.IconHover} style={styles.rightSideIcon} >
          <IconButton
            style={styles.arrowIcon}
            aria-label="Next Image"
            icon={<ChevronRightIcon />}
            disabled={start + 5 >= carouselItems.length}
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
