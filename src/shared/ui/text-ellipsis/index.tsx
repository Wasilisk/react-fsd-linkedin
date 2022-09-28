import { Box } from "../box";
import { TextEllipsisProps } from "./types";

export const TextEllipsis = ({ children, lineClamp }: TextEllipsisProps) => (
    <Box sx={{
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: "vertical",
    }}>
        {children}
    </Box>
);