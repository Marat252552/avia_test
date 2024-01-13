import { FC, memo, useMemo } from "react";
import Flex from "../../../components/Flex";
import Text from "../../../components/Text";

interface Props {
  onFilterChange: (
    name: string
  ) => (value: string | number | boolean | string[] | null) => void;
  value: number;
}

const MaxPriceInput: FC<Props> = memo(({ value, onFilterChange }) => {
  const onChange = useMemo(
    () => onFilterChange("maximum_price"),
    [onFilterChange]
  );
  return (
    <Flex gap="5px">
      <label>
        <Text size="15px">До</Text>
      </label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </Flex>
  );
});

export default MaxPriceInput;
