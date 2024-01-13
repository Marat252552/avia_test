import { FC } from "react";
import Flex from "../../../components/Flex";

interface Props {
  onChange: (value: string | number | boolean | string[] | null) => void;
  value: number;
}

const MinPriceInput: FC<Props> = ({ value, onChange }) => {
  return (
    <Flex gap="5px">
      <label>От</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </Flex>
  );
};

export default MinPriceInput;
