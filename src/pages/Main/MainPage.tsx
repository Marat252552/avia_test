import { useCallback, useEffect, useState } from "react";
import Flex from "../../components/Flex";
import useFetchData from "../../hooks/useFetchData";
import useLoadMore from "../../hooks/useLoadMore";
import getFlights from "../../utils/getFlights";
import { useDebounce } from "../../hooks/useDebounce";
import requestCarriers from "../../fakeApi/requestCarriers";
import PriceSorter from "./elements/PriceSorter";
import MinPriceInput from "./elements/MinPriceInput";
import MaxPriceInput from "./elements/MaxPriceInput";
import TransferInput from "./elements/TransferInput";
import CarriersList from "./elements/CarriersList";
import FlightsList from "./elements/FlightsList";
import requestFlights from "../../fakeApi/requestFlights";
import Flight from "../../types/flight";

export interface FiltersQuery {
  minimum_price: number;
  maximum_price: number;
  price_sort: "increase" | "decrease";
  transfer: boolean;
  carriers_uids: string[];
}

const InitialFilters: FiltersQuery = {
  maximum_price: 10000000,
  price_sort: "increase",
  minimum_price: 0,
  transfer: true,
  carriers_uids: [],
};

const MainPage = () => {
  const [filters, setFilters] = useState<FiltersQuery>(InitialFilters);
  const debouncedFilters = useDebounce(filters, 600);
  const [flights, setFlights] = useState<null | Flight[]>(null);
  const { onLoadMoreClick, paginationQuery } = useLoadMore();
  useEffect(() => {
    (async () => {
      const flights = await requestFlights({
        ...debouncedFilters,
        ...paginationQuery,
      });
      console.log("setFlights");
      setFlights(flights);
    })();
  }, [paginationQuery, debouncedFilters]);

  // const [flights] = useFetchData(requestFlights, null, {
  //   ...paginationQuery,
  //   ...debouncedFilters,
  // });

  const [carriers, loading] = useFetchData(requestCarriers, null);
  const onFilterChange = useCallback(
    (name: string) => (value: string | number | boolean | string[] | null) => {
      setFilters((prevState) => ({
        ...prevState,
        [name]: value as string | null,
      }));
    },
    []
  );

  return (
    <Flex gap="30px">
      <Flex direction="column" gap="10px">
        <PriceSorter onChange={onFilterChange("price_sort")} />

        <MinPriceInput
          value={filters.minimum_price}
          onChange={onFilterChange("minimum_price")}
        />

        <MaxPriceInput
          value={filters.maximum_price}
          onChange={onFilterChange("maximum_price")}
        />

        <TransferInput
          checked={filters.transfer}
          onClick={onFilterChange("transfer")}
        />

        <CarriersList
          carriers={carriers}
          carriers_uids={filters.carriers_uids}
          onChange={onFilterChange("carriers_uids")}
        />
      </Flex>

      <FlightsList
        flights={flights}
        loading={loading}
        onLoadMoreClick={onLoadMoreClick}
      />
    </Flex>
  );
};

export default MainPage;
