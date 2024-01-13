import { FC } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{
  background?: string;
  color?: string;
  border: string;
}>(
  ({ background = "#ff8c00", color = "white", border }) => `
    padding: 10px;
    background: ${background};
    border-radius: 10px;
    color: ${color};
    border: ${border};
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

const Button: FC<ButtonProps> = ({ children, borderColor, ...props }) => {
  const border = `solid 2px ${borderColor ? borderColor : props.background}`;
  return (
    <StyledButton border={border} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
