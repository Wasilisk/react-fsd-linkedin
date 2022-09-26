import { styled } from "shared/libs/mui/styled";
import { Box } from "shared/ui/box";


export const NetworkNavigationItemContainer = styled(Box)(({theme})=> ({
    display: "flex",
    padding: theme.spacing(1, 2.5),

    ":hover": {
        backgroundColor: "rgba(0,0,0,0.08)"
    }
}));