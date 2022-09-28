import { UserGroupProps } from "widgets/network/groups/types";

import { FollowUser } from "features/users/card/follow-user";

import { UserCard } from "entities/users/user-card";

import { Box } from "shared/ui/box";
import { Button } from "shared/ui/buttons/button";
import { IconButton } from "shared/ui/buttons/icon-button";
import { CloseIcon } from "shared/ui/icons/close";
import { Section } from "shared/ui/section";
import { Typography } from "shared/ui/typography";
import { Grid } from "shared/ui/grid";

export const FollowGroup = ({ title, users }: UserGroupProps) => (
    <Section
        title={title}
        actions={<Button>See all</Button>}
        pt={1}
        pb={2}
    >
        <Box my={1.5} mx={2}>
            <Grid container spacing={1.5}>
                {
                    users.map((userData: any) => <Grid key={userData.id} item xs={4}>
                        <UserCard
                            {...userData}
                            alignItems="flex-start"
                            avatarSize="large"
                            actions={<FollowUser userId={userData.id} />}
                            extraActions={<IconButton size="small"><CloseIcon /></IconButton>}
                            extraInfo={<Typography minHeight="32px" variant="description">{userData.extra_info}</Typography>}
                        />
                    </Grid>)
                }
            </Grid>
        </Box>
    </Section>
);