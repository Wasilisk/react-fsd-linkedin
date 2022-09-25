import { Box } from "shared/ui/box";
import { LayoutHeaderProps } from "shared/ui/layout/header/types";

const LayoutHeader = ({ children }: LayoutHeaderProps) => (
    <Box
        width="100vw"
        height="52px"
        position="fixed"
        top={0}
        bgcolor="#ffffff"
        borderBottom="1px solid rgba(0,0,0,0.08)"
    >
        <Box
            display="flex"
            alignItems="center"
            height="100%"
            maxWidth="1200px"
            margin="0 auto"
        >
            {children}
        </Box>
    </Box>
);

export default LayoutHeader;