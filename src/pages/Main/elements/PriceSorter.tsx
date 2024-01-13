import { FC, memo, useMemo } from "react";

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
      <option value="increase">По возрастанию цены</option>
      <option value="decrease">По убыванию цены</option>
    </select>
  );
});

export default PriceSorter;
