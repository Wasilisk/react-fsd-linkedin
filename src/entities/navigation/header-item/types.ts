import { ReactNode } from "react";

export type HeaderNavigationItemProps = {
    icon: ReactNode,
    label: string,
    onClick?: () => void;
    hasArrow?: boolean
}