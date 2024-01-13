import { FC, SVGProps } from "react";

const SpinIcon: FC = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    width="16px"
    height="16px"
    {...props}
  >
    <circle cx="24" cy="24" r="21" stroke="#F0F3F5" strokeWidth="2" />
    <path
      d="M24 45C35.598 45 45 35.598 45 24"
      stroke="#3062D4"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export default SpinIcon;
