import { FC } from "react";
import Flex from "../../Flex";
import { FlightElement } from "../../../types/flight";
import {
  getDepartureDate,
  getArrivalDate,
  getDuration,
} from "../../../lib/utils/formatDate";
import Text from "../../Text";

interface SegmentProps {
  departureAirport: FlightElement;
  departureCity: FlightElement;
  arrivalAirport: FlightElement;
  arrivalCity: FlightElement;
  departureDate: string;
  arrivalDate: string;
  travelDuration: number;
  airline: FlightElement;
}

const Segment: FC<SegmentProps> = ({
  arrivalAirport,
  arrivalCity,
  departureAirport,
  departureCity,
  departureDate,
  arrivalDate,
  travelDuration,
  airline,
}) => {
  return (
    <Flex direction="column">
      <Flex justify="space-between">
        <Flex>
          {departureCity?.caption}, {departureAirport?.caption},{" "}
          {departureAirport?.uid}
        </Flex>
        ➝
        <Flex>
          {arrivalCity?.caption}, {arrivalAirport?.caption}
        </Flex>
      </Flex>
      <Flex justify="space-between">
        <Text>{getDepartureDate(departureDate)}</Text>
        <Text>{getDuration(travelDuration)}</Text>
        <Text>{getArrivalDate(arrivalDate)}</Text>
      </Flex>
      <Text>Рейс выполняет: {airline.caption}</Text>
    </Flex>
  );
};

export default Segment;
