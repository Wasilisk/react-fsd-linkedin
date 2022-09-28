import { styled } from "shared/libs/mui/styled";
import { Paper } from "shared/ui/paper";

export const UserCardContainer = styled(Paper)({
    position: "relative",
    
    ":hover": {
        boxShadow: "0 0 0 1pxrgba(0,0,0,.08),0 4px 6px rgba(0,0,0,.3)"
    }
});