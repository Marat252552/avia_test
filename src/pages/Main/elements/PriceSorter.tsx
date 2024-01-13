import { FC } from "react";

interface Props {
  onChange: (value: string | number | boolean | string[] | null) => void;
}

const PriceSorter: FC<Props> = ({ onChange }) => {
  return (
    <select onChange={(e) => onChange(e.target.value)}>
      <option value="increase">По возрастанию цены</option>
      <option value="decrease">По убыванию цены</option>
    </select>
  );
};

export default PriceSorter;
