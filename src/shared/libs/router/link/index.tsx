import { styled } from "shared/libs/mui/styled";

import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)({
    textDecoration: "none",
    color: "inherit",
    position: "relative",
})