import { Avatar as MuiAvatar } from "@mui/material";

import { AvatarProps } from "shared/ui/avatar/types";

export const Avatar = ({ size, ...props }: AvatarProps) => {
    const currentSize = {
        "small": "24px",
        "medium": "48px",
        "large": "72px",
        "extra-large": "102px"
    }[size]

    return (
        <MuiAvatar
            {...props}
            sx={{
                height: currentSize,
                width: currentSize
            }}
        />
    )
}