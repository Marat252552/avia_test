import { FC, memo, useMemo } from "react";
import Text from "../../../components/Text";

interface Props {
  onFilterChange: (
    name: string
  ) => (value: string | number | boolean | string[] | null) => void;
}

const PriceSorter: FC<Props> = memo(({ onFilterChange }) => {
  const onChange = useMemo(
    () => onFilterChange("price_sort"),
    [onFilterChange]
  );
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="increase">
        <Text>По возрастанию цены</Text>
      </option>
      <option value="decrease">
        <Text>По убыванию цены</Text>
      </option>
    </select>
  );
});

export default PriceSorter;
