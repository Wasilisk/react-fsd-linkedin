import { ReactNode } from "react"

import { UserType } from "entities/users/types"

export type InvitationCardProps = {
    userInfo: UserType,
    mutual_connections: string
    actions: ReactNode
}