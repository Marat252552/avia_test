import { FC, ReactNode } from "react";
import styled from "styled-components";

export interface RawFlexProps {
  direction?: string;
  wrap?: string;
  align?: string;
  justify?: string;
  gap?: string;
  flex?: string;
  grow?: string;
  shrink?: string;
  basis?: string;
  width?: string;
}

export interface FlexProps extends RawFlexProps {
  fullwidth?: boolean;
  children?: ReactNode;
}

const RawFlex = styled.div<FlexProps>(
  ({
    direction,
    wrap,
    align,
    justify,
    gap,
    flex,
    grow,
    shrink,
    basis,
    width,
  }) => `
  display: flex;
  ${direction ? `flex-direction: ${direction};` : ""}
  ${wrap ? `flex-wrap: ${wrap};` : ""}
  ${align ? `align-items: ${align};` : ""}
  ${justify ? `justify-content: ${justify};` : ""}
  ${gap ? `gap: ${gap};` : ""}
  ${flex ? `flex: ${flex};` : ""}
  ${grow ? `flex-grow: ${grow};` : ""}
  ${shrink ? `flex-shrink: ${shrink};` : ""}
  ${width ? `width: ${width};` : ""}
  
  & > * {
    ${basis && `flex-basis: calc(${basis} - ${gap || "0px"}/2)`}
  }
 
`
);

const Flex: FC<FlexProps> = ({ fullwidth, width, ...props }) => {
  return (
    <RawFlex
      width={width ? width : fullwidth ? "100%" : undefined}
      {...props}
    />
  );
};

export default Flex;
