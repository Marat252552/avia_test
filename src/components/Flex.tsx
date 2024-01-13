import styled from "styled-components";

export interface FlexProps {
  direction?: string;
  wrap?: string;
  align?: string;
  justify?: string;
  gap?: string;
  flex?: string;
  grow?: string;
  shrink?: string;
  basis?: string;
  fullwidth?: boolean;
  width?: string;
}

const Flex = styled.div<FlexProps>(
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
    fullwidth,
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
  ${fullwidth || width ? `width: ${width ? width : "100%"};` : ""}
  
  & > * {
    ${basis && `flex-basis: calc(${basis} - ${gap || "0px"}/2)`}
  }
 
`
);

export default Flex;
