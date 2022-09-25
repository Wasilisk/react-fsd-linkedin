import { ReactNode } from "react";

export type NavigationItemProps = {
    icon: ReactNode,
    label: string,
    count?: number,
    onClick?: () => void;
    hasArrow?: boolean
}