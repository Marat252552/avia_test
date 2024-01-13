import { FC } from "react";
import Card from "../../../components/Card";
import Flex from "../../../components/Flex";
import Flight from "../../../types/flight";
import Button from "../../../components/Button";
import Spinner from "../../../components/Spinner";
import styled from "styled-components";

interface Props {
  flights: Flight[] | null;
  loading: boolean;
  onLoadMoreClick: () => void;
}

const SpinnerLayout = styled(Flex)`
  height: 100vh;
`;

const FlightsList: FC<Props> = ({ loading, flights, onLoadMoreClick }) => {
  return (
    <Flex width="800px">
      {loading && (
        <SpinnerLayout fullwidth justify="center" align="center">
          <Spinner />
        </SpinnerLayout>
      )}
      {!loading && (
        <Flex fullwidth direction="column" gap="20px">
          {flights &&
            flights.map((flight) => (
              <Card key={flight.flightToken} flight={flight} />
            ))}
          <Button
            background="green"
            borderColor="black"
            onClick={onLoadMoreClick}
          >
            Загрузить еще
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default FlightsList;
