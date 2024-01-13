import { FC } from "react";
import Flex from "../../../components/Flex";
import { Carrier } from "../../../types/flight";

interface Props {
  carriers: Carrier[] | null;
  onChange: (value: string | number | boolean | string[] | null) => void;
  carriers_uids: string[];
}

const CarriersList: FC<Props> = ({ carriers, onChange, carriers_uids }) => {
  return (
    <Flex direction="column">
      {carriers &&
        carriers.map((carrier) => {
          return (
            <Flex key={carrier.uid}>
              <input
                onChange={(e) => {
                  if (e.target.checked) {
                    onChange([...carriers_uids, carrier.uid]);
                  } else {
                    onChange(
                      carriers_uids.filter((uid) => carrier.uid !== uid)
                    );
                  }
                }}
                type="checkbox"
              />
              <label>{carrier.caption}</label>
            </Flex>
          );
        })}
    </Flex>
  );
};

export default CarriersList;
