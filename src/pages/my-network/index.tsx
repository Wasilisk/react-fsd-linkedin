import { HeaderNavigation } from "widgets/header/navigation";

import { GlobalSearch } from "features/global-search";

import { LinkedInIcon } from "shared/ui/icons/linkedin/linkedin";
import {Layout} from "shared/ui/layout";


const MyNetwork = () => (
    <Layout>
        <Layout.Header>
            <LinkedInIcon />
            <GlobalSearch />
            <HeaderNavigation />
        </Layout.Header>
        <Layout.Content>

        </Layout.Content>
    </Layout>
)

export default MyNetwork;