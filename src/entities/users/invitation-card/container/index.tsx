import { styled } from "shared/libs/mui/styled";
import { Box } from "shared/ui/box";

export const InvitationCardContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(1.5, 2)
  }));