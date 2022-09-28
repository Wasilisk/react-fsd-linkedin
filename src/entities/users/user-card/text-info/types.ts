import { UserType } from "entities/users/types";

export type UserCardTextInfoProps = Pick<UserType, "id" | "username" | "headline">