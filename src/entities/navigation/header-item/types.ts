import { ReactNode } from "react";

export type HeaderNavigationItemProps = {
    icon: ReactNode,
    label: string,
    count?: number,
    onClick?: () => void;
    hasArrow?: boolean
}