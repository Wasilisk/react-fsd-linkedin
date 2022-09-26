import { NetworkNavigationItem } from "entities/navigation/network-item";

import { Box } from "shared/ui/box";
import { navigationIcons } from "shared/ui/icons/navigations";
import { Typography } from "shared/ui/typography";

const networkNavigationData = [
    {
        id: 1,
        icon: "connections",
        label: "Connections",
        to: "connections",
        count: 142
    },
    {
        id: 2,
        icon: "contacts",
        label: "Contacts",
        to: "contacts"
    },
    {
        id: 3,
        icon: "people",
        label: "People | Follow",
        to: "people",
        count: 6
    },
    {
        id: 4,
        icon: "group",
        label: "Group",
        to: "group",
        count: 1
    },
    {
        id: 5,
        icon: "event",
        label: "Events",
        to: "events"
    },
    {
        id: 6,
        icon: "pages",
        label: "Pages",
        to: "pages",
        count: 9
    },
    {
        id: 7,
        icon: "news",
        label: "Newsletters",
        to: "newsletters"
    },
    {
        id: 8,
        icon: "hashtag",
        label: "Hashtags",
        to: "hashtags"
    },

]

export const NetworkNavigation = () => (
    <Box py={1}>
        <Typography my={1} mx={2}>Manage my network</Typography>
        {
            networkNavigationData.map(({ id, icon, ...itemData }) => <NetworkNavigationItem
                key={id}
                icon={navigationIcons[icon]}
                {...itemData}
            />)
        }
    </Box>
);