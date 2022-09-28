import { headerData } from "features/header/links/mock-data";

import { HeaderNavigationItem } from "entities/navigation/header-item";

import { Navlink } from "shared/libs/router/nav-link";
import { Box } from "shared/ui/box";
import { navigationIcons } from "shared/ui/icons/navigations";
import { Badge } from "shared/ui/badge"

export const HeaderNavigationLinks = () => (
    <Box
        height="100%"
        display="flex"
    >
        {
            headerData.map(({ id, icon, to, count, ...itemData }) => (
                <Navlink
                    key={id}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    to={to}
                >
                    <HeaderNavigationItem
                        icon={
                            <>
                                {count && <Badge badgeContent={count}>{navigationIcons[icon]}</Badge>}
                                {!count && navigationIcons[icon]}
                            </>
                        }
                        {...itemData}
                    />
                </Navlink>)
            )
        }
    </Box>
)