import { HeaderNavigationItem } from "entities/navigation/header-item";

import { Navlink } from "shared/libs/router/nav-link";
import { Box } from "shared/ui/box";
import { navigationIcons } from "shared/ui/icons/navigations";

//mock-data
const headerData = [
    {
        id: 1,
        label: "Home",
        icon: "home",
        to: "/feed"
    },
    {
        id: 2,
        label: "My Network",
        icon: "network",
        to: "/my-network"
    },
    {
        id: 3,
        label: "Jobs",
        icon: "jobs",
        to: "/jobs"
    },
    {
        id: 4,
        label: "Messaging",
        icon: "messages",
        to: "/messaging",
        count: 6
    },
    {
        id: 5,
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
            headerData.map(({ id, icon, to, ...itemData }) => (
                <Navlink
                    key={id}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    to={to}
                >
                    <HeaderNavigationItem
                        icon={navigationIcons[icon]}
                        {...itemData}
                    />
                </Navlink>)
            )
        }
    </Box>
)