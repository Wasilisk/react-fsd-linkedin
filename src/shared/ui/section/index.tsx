import { Box } from "../box";
import { Typography } from "../typography";
import { SectionProps } from "./types";

export const Section = ({ title, actions, children, ...props }: SectionProps) => (
    <Box {...props}>
        <Box py={1} pl={2} pr={1} display="flex" alignItems="center">
            <Typography flex={1}>{title}</Typography>
            {actions}
        </Box>
        {children}
    </Box>
)