import { UserType } from "entities/users/types"

export type InvitationUserInfoProps = Omit<UserType, "profile_image">;