import { FC, memo, useMemo } from "react";
import Flex from "../../../components/Flex";

interface Props {
  onFilterChange: (
    name: string
  ) => (value: string | number | boolean | string[] | null) => void;
  checked: boolean;
}

const TransferInput: FC<Props> = memo(({ onFilterChange, checked }) => {
  const onChange = useMemo(() => onFilterChange("transfer"), [onFilterChange]);
  return (
    <Flex>
      <input
        onChange={() => onChange(!checked)}
        type="checkbox"
        checked={checked}
      />
      <label>С пересадками</label>
    </Flex>
  );
});

export default TransferInput;
