import { InvitationUserInfoProps } from "entities/users/invitation-card/user-info/types";

import { Link } from "shared/libs/router/link";
import { Typography } from "shared/ui/typography";

export const InvitationUserInfo = ({id, username, headline}: InvitationUserInfoProps) => (
    <Link to={`/user/${id}`}>
        <Typography variant="link_title">{username}</Typography>
        <Typography variant="subtitle1">{headline}</Typography>
    </Link>
)