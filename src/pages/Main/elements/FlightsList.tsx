import { FC } from "react";
import Card from "../../../components/Card";
import Flex from "../../../components/Flex";
import Flight from "../../../types/flight";

interface Props {
  flights: Flight[] | null;
  loading: boolean;
  onLoadMoreClick: () => void;
}

const FlightsList: FC<Props> = ({ loading, flights, onLoadMoreClick }) => {
  if (loading) return <div>Loading...</div>;
  return (
    <Flex direction="column" gap="20px">
      {flights &&
        flights.map((flight) => (
          <Card key={flight.flightToken} flight={flight} />
        ))}
      <button onClick={onLoadMoreClick}>Загрузить еще</button>
    </Flex>
  );
};

export default FlightsList;
