import { FC } from "react";
import Flex from "../../../components/Flex";

interface Props {
  onChange: (value: string | number | boolean | string[] | null) => void;
  value: number;
}

const MaxPriceInput: FC<Props> = ({ value, onChange }) => {
  return (
    <Flex gap="5px">
      <label>До</label>
      <input value={value} onChange={(e) => onChange(e.target.value)} />
    </Flex>
  );
};

export default MaxPriceInput;
