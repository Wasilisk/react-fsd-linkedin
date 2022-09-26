import { styled } from "shared/libs/mui/styled";
import { Link } from "shared/libs/router/link";

export const FooterLink = styled(Link)({
    textDecoration: "none",
    color: "rgba(0,0,0,0.6)",
    position: "relative",
    fontSize: "12px",
    margin: "4px 8px",

    ":hover": {
        textDecoration: "underline",
        color: "#0a66c2"
    }
}) 