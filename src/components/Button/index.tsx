import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 10px;
  background: #ff8c00;
  border-radius: 10px;
  color: white;
  border: solid 2px #ff8c00;
  &:hover {
    border: solid 2px black;
  }
`;

interface ButtonProps {
  children: string | number;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
