import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{
  background?: string;
  color?: string;
  borderColor?: string;
}>(
  ({ background = "#ff8c00", color = "white", borderColor = background }) => `
    padding: 10px;
    background: ${background};
    border-radius: 10px;
    color: ${color};
    border: solid 2px ${borderColor};
    &:hover {
      border: solid 2px black;
    }
  `
);

interface ButtonProps {
  children: string | number;
  background?: string;
  color?: string;
  onClick?: () => void;
  borderColor?: string;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
