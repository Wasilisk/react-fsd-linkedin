import { Box } from "shared/ui/box";
import { Container } from "shared/ui/container";
import { LayoutContentProps } from "shared/ui/layout/content/types";

const LayoutContent = ({ children }: LayoutContentProps) => (
    <Box
        flexGrow={1}
        paddingTop="52px"
        bgcolor="#f3f2ee"
    >
        <Container>
            {children}
        </Container>
    </Box>
)

export default LayoutContent;