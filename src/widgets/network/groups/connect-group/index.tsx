import { UserGroupProps } from "widgets/network/groups/types";

import { DeleteFromNetwork } from "features/users/card/delete-from-network";

import { UserCard } from "entities/users/user-card";

import { Box } from "shared/ui/box";
import { Button } from "shared/ui/buttons/button";
import { Grid } from "shared/ui/grid";
import { MutualConnectionsInfo } from "shared/ui/mutual_connections";
import { Section } from "shared/ui/section";

export const ConnectGroup = ({ title, users }: UserGroupProps) => (
    <Section
        title={title}
        actions={<Button>See all</Button>}
        pt={1}
        pb={2}
    >
        <Box my={1.5} mx={2}>
            <Grid container spacing={1.5}>
                {
                    users.map((userData: any) => <Grid item key={userData.id} xs={3}>
                        <UserCard
                            {...userData}
                            alignItems="center"
                            avatarSize="extra-large"
                            actions={<Button variant="outlined">Connect</Button>}
                            extraActions={<DeleteFromNetwork userId={userData.id} />}
                            extraInfo={<MutualConnectionsInfo userId={userData.id} mutual_connections={userData.extra_info} />}
                        />
                    </Grid>)
                }
            </Grid>
        </Box>
    </Section>
);