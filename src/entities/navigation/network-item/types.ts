import { ReactNode } from "react";

export type NetworkNavigationItemProps = {
    icon: ReactNode,
    label: string,
    to: string,
    count?: number,
}