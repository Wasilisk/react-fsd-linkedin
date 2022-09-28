import { UserType } from "entities/users/types"

export type InvitationsProps = {
    invitations: Array<{
        id: number,
        user_info: UserType,
        mutual_connections: string
}>
}