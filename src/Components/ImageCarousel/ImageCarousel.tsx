// React
import { CSSProperties, FC, useState } from 'react';

// Chakra
import { Flex, Image, Icon, Button } from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';

// Common
import { carouselItems } from "../../data/carouselArray";
import { styles } from "./ImageCarouselStyles";

export const ImageCarousel: FC = (): JSX.Element => {
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
      <Image src={carouselItems[activeIndex].original} style={styles.mainImage as CSSProperties}/>
      <Flex mt={4} alignItems="center">
        <Button onClick={handlePrev} style={styles.button} >
          <Icon
            color={start === 0 ? "gray.300" : "black"}
            as={ArrowLeftIcon}
          />
        </Button>
        <Flex style={styles.carouselWrapper as CSSProperties} >
          {carouselItems.slice(start, start + 4).map((image, index) => (
            <Flex
              key={index}
              onClick={() => handleClick(start + index)}
              cursor="pointer"
            >
              <Flex style={styles.carouselItem}>
                <Image
                  boxSize="50px"
                  src={image.thumbnail}
                  style={styles.thumbnailImage as CSSProperties}
                  borderWidth={index === activeIndex - start ? 2 : 0}
                />
              </Flex>
            </Flex>
          ))}
        </Flex>
          <Button onClick={handleNext} style={styles.button}>
            <Icon
              color={start + 5 >= carouselItems.length ? "gray.300" : "black"}
              as={ArrowRightIcon}
            />
          </Button>
      </Flex>
    </Flex>
  );
};
