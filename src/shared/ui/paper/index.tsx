import {Paper as MuiPaper} from "@mui/material";

import {styled} from "shared/libs/mui/styled";

export const Paper = styled(MuiPaper)(({ theme }) => ({
    borderRadius: theme.spacing(1)
}));