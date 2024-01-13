import { FC } from "react";
import Flex from "../../../components/Flex";

interface Props {
  onClick: (value: string | number | boolean | string[] | null) => void;
  checked: boolean;
}

const TransferInput: FC<Props> = ({ onClick, checked }) => {
  return (
    <Flex>
      <input
        onClick={() => onClick(!checked)}
        type="checkbox"
        checked={checked}
      />
      <label>С пересадками</label>
    </Flex>
  );
};

export default TransferInput;
