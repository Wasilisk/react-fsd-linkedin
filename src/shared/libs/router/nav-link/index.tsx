import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const Navlink = styled(NavLink)({
    textDecoration: "none",
    color: "inherit",
    position: "relative",

    "&.active:after": {
        borderBottom: "2px solid #000000",
        content: '""',
        bottom: 0,
        left: 0,
        position: "absolute",
        width: "100%"
    }
})