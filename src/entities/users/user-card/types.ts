import { ReactNode } from "react"

import { AvatarSize } from "shared/ui/avatar/types"

import { UserType } from "entities/users/types"

export type UserCardProps = UserType & {
    extraInfo?: ReactNode,
    banner: string,
    actions?: ReactNode,
    alignItems: "flex-start" | "center" | "flex-end",
    avatarSize: AvatarSize,
    extraActions?: ReactNode
}