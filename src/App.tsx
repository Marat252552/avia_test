import { useCallback, useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import Flex from "./components/Flex";
import Flight from "./types/flight";
import useFetchData from "./hooks/useFetchData";
import { PaginationQueryParams } from "./types/common";
import useLoadMore from "./hooks/useLoadMore";
import getFlights from "./fakeApi/getFlights";
import Button from "./components/Button";

interface FiltersQuery {
  // minimum_price: number;
  // maximum_price: number;
  price_sort: "increase" | "decrease";
  // time_sort: "increase" | "decrease";
  // transfer: boolean;
}

const InitialFilters: FiltersQuery = {
  // maximum_price: 10000000,
  price_sort: "increase",
  // time_sort: "increase",
  // minimum_price: 0,
  // transfer: false,
};

const App = () => {
  const [filters, setFilters] = useState<FiltersQuery>(InitialFilters);
  const { onLoadMoreClick, paginationQuery } = useLoadMore();
  let { current: firstLoading } = useRef(true);
  const [flights, isLoading] = useFetchData(
    async (
      paginationQuery: PaginationQueryParams,
      filtersQuery: FiltersQuery
    ): Promise<Flight[]> => {
      const flights = await getFlights({
        price_sort: filtersQuery.price_sort,
        ...paginationQuery,
      });
      firstLoading = false;
      return flights;
    },
    null,
    paginationQuery,
    filters
  );
  const onFilterChange = useCallback(
    (name: string) => (value: string | number | null) => {
      setFilters((prevState) => ({
        ...prevState,
        [name]: value as string | null,
      }));
    },
    []
  );

  return (
    <Flex gap="30px">
      <Flex direction="column">
        <select
          onChange={(e) => {
            onFilterChange("price_sort")(e.target.value);
          }}
        >
          <option value="increase">По возрастанию цены</option>
          <option value="decrease">По убыванию цены</option>
        </select>
      </Flex>
      <Flex direction="column" gap="20px">
        {flights &&
          flights.map((flight) => (
            <Card key={flight.flightToken} flight={flight} />
          ))}
        <button onClick={onLoadMoreClick}>Загрузить еще</button>
      </Flex>
    </Flex>
  );
};

export default App;
