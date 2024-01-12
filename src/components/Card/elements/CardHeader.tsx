import styled from "styled-components";
import Flex from "../../Flex";
import { FC } from "react";
import Text from "../../Text";

interface CardHeaderProps {
  airline: string;
  price: string;
}

const Layout = styled(Flex)`
  background: #007fff;
  padding: 5px;
  border-radius: 5px;
  color: white;
`;

const CardHeader: FC<CardHeaderProps> = ({ airline, price }) => {
  return (
    <Layout justify="space-between">
      {airline}
      <Flex direction="column" align="end">
        <Text size="30px">{price}</Text>
        <Text>Стоимость для одного взрослого пассажира</Text>
      </Flex>
    </Layout>
  );
};

export default CardHeader;
