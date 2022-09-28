import { Link } from "shared/libs/router/link";
import { Avatar } from "shared/ui/avatar";
import { Box } from "shared/ui/box";
import { Stack } from "shared/ui/stack";

import { UserCardBanner } from "entities/users/user-card/banner";
import { UserCardContainer } from "entities/users/user-card/container";
import { UserCardExtraActions } from "entities/users/user-card/extra-actions";
import { UserCardTextInfo } from "entities/users/user-card/text-info";
import { UserCardProps } from "entities/users/user-card/types";

export const UserCard = ({id, banner, profile_image, actions, extraActions, alignItems, avatarSize, extraInfo, ...userInfo}: UserCardProps) => (
    <UserCardContainer>
        <Box p={1.5}>
            <UserCardBanner
                image={banner}
            />
            <Box display="flex" flexDirection="column" alignItems={alignItems}>
                <Link to={`/user/${id}`}>
                    <Avatar size={avatarSize} src={profile_image} />
                </Link>
                <UserCardTextInfo
                    id={id}
                    {...userInfo}
                />
                {extraInfo}
            </Box>
            <Stack mt={1} spacing={1}>
                {actions}
            </Stack>
        </Box>
        <UserCardExtraActions>
           {extraActions}
        </UserCardExtraActions>
    </UserCardContainer>
)