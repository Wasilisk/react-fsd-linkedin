import { InvitationCardAvatarProps } from "entities/users/invitation-card/avatar/types";

import { Link } from "shared/libs/router/link";
import { Avatar } from "shared/ui/avatar";

export const InvitationCardAvatar = ({profile_image, id}: InvitationCardAvatarProps) => (
    <Link to={`/user/${id}`}>
        <Avatar size="large" src={profile_image} />
    </Link>
)