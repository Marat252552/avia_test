import { FC } from "react";
import styled from "styled-components";

interface TextProps {
  size?: string;
  children: string | number | string[];
}

const TextStyled = styled.div<{ size: string }>(
  ({ size }) => `
          font-size: ${size}
      `
);

const Text: FC<TextProps> = ({ size = "14px", children }) => {
  return <TextStyled size={size}>{children}</TextStyled>;
};

export default Text;
