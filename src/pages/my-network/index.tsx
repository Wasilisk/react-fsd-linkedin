import React from "react";

import { Header } from "widgets/header";
import { NetworkNavigation } from "widgets/network/navigation";
import { NetworkFooter } from "widgets/network/footer";
import { Invitations } from "widgets/network/invitations";
import { FollowGroup } from "widgets/network/groups/follow-group";
import { ConnectGroup } from "widgets/network/groups/connect-group";

import { Layout } from "shared/ui/layout";
import { Paper } from "shared/ui/paper";
import { Box } from "shared/ui/box";
import { Divider } from "shared/ui/divider";
import { Grid } from "shared/ui/grid";

import { networkData } from "pages/my-network/mock-data";

const MyNetwork = () => (
    <Layout>
        <Layout.Header>
            <Header />
        </Layout.Header>
        <Layout.Content>
            <Grid container mt={3}>
                <Grid item xs={3.5}>
                    <Paper>
                        <NetworkNavigation />
                        <Divider />
                        <NetworkFooter />
                    </Paper>
                </Grid>
                <Grid item xs={8.2} ml="auto" mb={3}>
                    <Box mb={2}>
                        {networkData.invitations && <Invitations invitations={networkData.invitations} />}
                    </Box>
                    <Paper>
                        {
                            networkData.networks.map(groupData => <React.Fragment key={groupData.id}>
                                {groupData.type === "follow" && <FollowGroup {...groupData} />}
                                {groupData.type === "connect" && <ConnectGroup {...groupData} />}
                            </React.Fragment>)
                        }
                    </Paper>
                </Grid>
            </Grid>
        </Layout.Content>
    </Layout>
)

export default MyNetwork;