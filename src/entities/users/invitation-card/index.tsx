import { InvitationCardAvatar } from "entities/users/invitation-card/avatar";
import { InvitationCardContainer } from "entities/users/invitation-card/container";
import { InvitationUserInfo } from "entities/users/invitation-card/user-info";
import { InvitationCardProps } from "entities/users/invitation-card/types";

import { Box } from "shared/ui/box";
import { MutualConnectionsInfo } from "shared/ui/mutual_connections";
import { Stack } from "shared/ui/stack";

export const InvitationCard = ({ actions, userInfo, mutual_connections }: InvitationCardProps) => {
    const { id, profile_image, username, headline } = userInfo;

    return (
        <InvitationCardContainer>
            <Box
                display="flex"
                flex={1}
            >
                <InvitationCardAvatar
                    id={id}
                    profile_image={profile_image}
                />
                <Box pl={1}>
                    <InvitationUserInfo
                        id={id}
                        username={username}
                        headline={headline}
                    />
                    <MutualConnectionsInfo
                        userId={id}
                        mutual_connections={mutual_connections}
                    />
                </Box>
            </Box>
            <Stack direction="row" spacing={1}>
                {actions}
            </Stack>
        </InvitationCardContainer>
    )
}