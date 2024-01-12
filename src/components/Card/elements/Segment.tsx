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
      <div>
        {departureCity?.caption}, {departureAirport?.caption},{" "}
        {departureAirport?.uid} ➝ {arrivalCity?.caption},{" "}
        {arrivalAirport?.caption}
      </div>
      <Flex justify="space-between">
        <div>{getDepartureDate(departureDate)}</div>
        <div>{getDuration(travelDuration)}</div>
        <div>{getArrivalDate(arrivalDate)}</div>
      </Flex>
      <Text>Рейс выполняет: {airline.caption}</Text>
    </Flex>
  );
};

export default Segment;
