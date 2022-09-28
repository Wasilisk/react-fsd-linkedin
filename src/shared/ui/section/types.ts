import { BoxProps } from "@mui/material/Box"
import { ReactNode } from "react"

export type SectionProps = BoxProps & {
    title: string,
    actions?: ReactNode,
}