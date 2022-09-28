import { Badge as MuiBadge } from '@mui/material';
import { styled } from "shared/libs/mui/styled"

export const Badge = styled(MuiBadge)(({ theme }) => ({
    ".MuiBadge-badge": {
        backgroundColor: "#cc1016",
        color: "#ffffff",
        top: "5px",
        left: "5px",
        height: "16px",
        width: "16px",
        minWidth: "16px",
        fontWeight: theme.typography.fontWeightBold
    }
})) as typeof MuiBadge;