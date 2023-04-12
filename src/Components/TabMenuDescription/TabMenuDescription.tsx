import { AspectRatio, Flex, Text} from "@chakra-ui/react";
import { styles } from "./TabMenuDescriptionStyles";
import { CSSProperties } from "react";

export const TabMenuDescription = () => {
  return (
    <Flex style={styles.wrapper as CSSProperties}>
      <Flex style={styles.videoWrapper as CSSProperties}>
        <AspectRatio ratio={100 / 56.2}>
          <iframe
            title='scooter'
            src="https://www.youtube.com/embed/eU4LIfsfwaY"
            allowFullScreen
          ></iframe>
        </AspectRatio>
        <AspectRatio ratio={100 / 56.2}>
          <iframe
            title='scooter'
            src="https://www.youtube.com/embed/C8VuUo4MdyE"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </Flex>
      <Flex style={styles.textWrapper as CSSProperties}>
        <Text>The SCOTEX H10 is the new star in the electric scooter sky and of course the whole thing with approval according to eKFV (small electric vehicle regulation) and thus legally approved for use in road traffic.
        </Text>
        <Text>
          Based on a stable & torsion-resistant vehicle frame made of a magnesium alloy, the vehicle weighs a slim 14.8 kg and is therefore also ideal for use in conjunction with public transport. Even commuters who cover parts of the journey by car get along well when loading and unloading from the car due to the low weight
        </Text>
        <Text>
          The tires of the SCOTEX H10 consist of 8.5 inch pneumatic tires with tubes which ensure a quiet driving experience and absorb a lot of vibrations. In addition to a maintenance-free drum brake at the front, the Escooter has an electric brake on the rear drive axle. Both brakes in combination bring the vehicle to a standstill within a few meters from any speed.
        </Text>
        <Text>
          The maximum speed is eKFV-compliant 20 km/h, which the electric scooter easily achieves thanks to the brushless DC hub motor with a maximum motor power of up to 540 W. The maximum range is up to 30 km. The 36V 7.5 Ah lithium battery built into the footboard is charged via the charging socket on the front side of the vehicle frame with the 2A charger supplied in around 3.5 hours.
        </Text>
        <Text>
          The SCOTEX H10 has an easy-to-read, high-contrast LCD display on the front of the handlebars, which is easy to read under all conditions and, in addition to the speed, also shows the battery level, the current drive level, daily kilometers and total kilometers.
          Of course, the handlebar can also be folded down at the front and locked in place at the rear of the vehicle so that the scooter can be carried comfortably on the handlebar. The H10 has a sturdy side stand at the front left for parking when it is unfolded. The e-scooter can easily be protected against theft with a cable lock which is quickly and easily pulled through the front frame.
        </Text>
        <Text>
          <span style={{fontFamily: "Arial", fontWeight: "600"}}>Attention! </span>Minimum age 14 years - no helmet requirement, no driving license requirement.
        </Text>
        <Text>
          Note for customers from Switzerland and Austria: This scooter model is also within the values ​​prescribed by the legislator in these two countries, i.e. it may also be used legally in road traffic there (in this case, no approval).
        </Text>
      </Flex>
    </Flex>
  )
}