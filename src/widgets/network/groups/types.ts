import { UserType } from "entities/users/types"

export type UserGroupProps = {
    title: string,
    users: Array<UserType & {
        banner: string,
        extra_info: string
    }>
}