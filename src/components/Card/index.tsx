import { FC } from "react";
import Flight from "../../types/flight";
import CardHeader from "./elements/CardHeader";
import Segment from "./elements/Segment";
import { CardLayout } from "./styles";
import Button from "../Button";
import Flex from "../Flex";

interface CardProps {
  flight: Flight;
}

const Card: FC<CardProps> = ({ flight }) => {
  const segments = flight.flight.legs[0].segments;
  return (
    <Flex direction="column" gap="10px">
      <CardHeader
        airline={flight.flight.carrier.caption}
        price={flight.flight.price.total.amount}
      />
      {segments && (
        <Flex direction="column" gap="20px">
          {segments.map((segment) => {
            return <Segment {...segment} />;
          })}
        </Flex>
      )}
      <Button>Выбрать</Button>
    </Flex>
  );
};

export default Card;
