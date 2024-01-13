import { FC, useCallback, useMemo, useState } from "react";
import Flex from "../../components/Flex";
import useFetchData from "../../hooks/useFetchData";
import useLoadMore from "../../hooks/useLoadMore";
import { useDebounce } from "../../hooks/useDebounce";
import requestCarriers from "../../fakeApi/requestCarriers";
import PriceSorter from "./elements/PriceSorter";
import MinPriceInput from "./elements/MinPriceInput";
import MaxPriceInput from "./elements/MaxPriceInput";
import TransferInput from "./elements/TransferInput";
import CarriersList from "./elements/CarriersList";
import FlightsList from "./elements/FlightsList";
import requestFlights from "../../fakeApi/requestFlights";

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

const MainPage: FC = () => {
  const [filters, setFilters] = useState<FiltersQuery>(InitialFilters);
  const debouncedFilters = useDebounce(filters, 600);
  const { onLoadMoreClick, paginationQuery } = useLoadMore();

  const queries = useMemo(() => {
    return { ...debouncedFilters, ...paginationQuery };
  }, [debouncedFilters, paginationQuery]);

  const [flights, loading] = useFetchData(requestFlights, null, queries);

  const [carriers] = useFetchData(requestCarriers, null, filters.transfer);
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
    <Flex fullwidth gap="30px">
      <Flex direction="column" gap="10px">
        <PriceSorter onFilterChange={onFilterChange} />

        <MinPriceInput
          value={filters.minimum_price}
          onFilterChange={onFilterChange}
        />

        <MaxPriceInput
          value={filters.maximum_price}
          onFilterChange={onFilterChange}
        />

        <TransferInput
          checked={filters.transfer}
          onFilterChange={onFilterChange}
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
