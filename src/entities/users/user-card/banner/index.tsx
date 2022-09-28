import { styled } from "shared/libs/mui/styled";
import { CardMedia } from "shared/ui/card-media";

export const UserCardBanner = styled(CardMedia)({
    height: "62px",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundRepeat: "repeat",
    backgroundSize: "cover",
    width: "100%",
    objectFit: "cover",
    borderTopLeftRadius: "8px",
    borderTopRightRadius: "8px"
});