import { AvatarProps as MuiAvatarRrops } from "@mui/material";

type AvatarSize = "small" | "medium" | "large";

export type AvatarProps = MuiAvatarRrops & {
    size: AvatarSize
}