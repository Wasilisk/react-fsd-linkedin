import { Box } from "shared/ui/box";
import { Container } from "shared/ui/container";
import { LayoutHeaderProps } from "shared/ui/layout/header/types";

const LayoutHeader = ({ children }: LayoutHeaderProps) => (
    <Box
        width="100vw"
        height="52px"
        position="fixed"
        top={0}
        zIndex={100}
        bgcolor="#ffffff"
        borderBottom="1px solid rgba(0,0,0,0.08)"
    >
        <Container>
            <Box
                display="flex"
                alignItems="center"
                height="100%"
            >
                {children}
            </Box>
        </Container>
    </Box>
);

export default LayoutHeader;