import { HeaderNavigation } from "widgets/header/navigation";

import { GlobalSearch } from "features/global-search";

import { LinkedInIcon } from "shared/ui/icons/linkedin/linkedin";
import { Layout } from "shared/ui/layout";
import { Paper } from "shared/ui/paper";
import { NetworkNavigation } from "widgets/network/navigation";
import { Box } from "shared/ui/box";
import { Divider } from "shared/ui/divider";
import { NetworkFooter } from "widgets/network/footer";


const MyNetwork = () => (
    <Layout>
        <Layout.Header>
            <LinkedInIcon />
            <GlobalSearch />
            <HeaderNavigation />
        </Layout.Header>
        <Layout.Content>
            <Box
                display="grid"
                gridTemplateAreas="sidebar main"
                gridTemplateColumns="minmax(300px,7fr) minmax(0,17fr)"
                mt={3}
            >
                <Paper>
                    <NetworkNavigation />
                    <Divider/>
                    <NetworkFooter/>
                </Paper>
            </Box>
        </Layout.Content>
    </Layout>
)

export default MyNetwork;