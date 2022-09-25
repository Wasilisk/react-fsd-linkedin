import { NavigationItem } from "entities/navigation/item";

import { Navlink } from "shared/libs/router/nav-link";
import { Box } from "shared/ui/box";
import { navigationIcons } from "shared/ui/icons/navigations";

//mock-data
const headerData = [
    {
        label: "Home",
        icon: "home",
        to: "/feed"
    },
    {
        label: "My Network",
        icon: "network",
        to: "/my-network"
    },
    {
        label: "Jobs",
        icon: "jobs",
        to: "/jobs"
    },
    {
        label: "Messaging",
        icon: "messages",
        to: "/messaging",
        count: 6
    },
    {
        label: "Nofitications",
        icon: "notification",
        to: "/notifications",
        count: 3
    }
]

export const NavigationLinksSection = () => (
    <Box
            height="100%"
            display="flex"
        >
            {
                headerData.map(({ icon, to, ...itemData }) => (
                    <Navlink
                        className={({ isActive }) => (isActive ? 'active' : '')}
                        to={to}
                    >
                        <NavigationItem
                            icon={navigationIcons[icon]}
                            {...itemData}
                        />
                    </Navlink>)
                )
            }
        </Box>
)