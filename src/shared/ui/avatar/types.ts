import { AvatarProps as MuiAvatarRrops } from "@mui/material";

export type AvatarSize = "small" | "medium" | "large" | "extra-large";

export type AvatarProps = MuiAvatarRrops & {
    size: AvatarSize
}