import { FC, memo, useMemo } from "react";
import Flex from "../../../components/Flex";
import Text from "../../../components/Text";

interface Props {
  onFilterChange: (
    name: string
  ) => (value: string | number | boolean | string[] | null) => void;
  value: number;
}

const MinPriceInput: FC<Props> = memo(({ value, onFilterChange }) => {
  const onChange = useMemo(
    () => onFilterChange("minimum_price"),
    [onFilterChange]
  );

  return (
    <Flex gap="5px">
      <label>
        <Text size="15px">От</Text>
      </label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </Flex>
  );
});

export default MinPriceInput;
