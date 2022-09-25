import { styled } from "shared/libs/mui/styled";
import { Box } from "shared/ui/box";

export const NavigationItemContainer = styled(Box)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    minWidth: "80px",
    color: "#666666",
    height: "100%",
    cursor: "pointer",

    '&:hover': {
        color: "#000000"
    },
})