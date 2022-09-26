import { HeaderNavigationItemProps } from "entities/navigation/header-item/types"
import { HeaderNavigationItemContainer } from "entities/navigation/header-item/container"

import { Badge } from "shared/ui/badge"
import { DownArrowIcon } from "shared/ui/icons/arrows/down"
import { Typography } from "shared/ui/typography"
import { Box } from "shared/ui/box"

export const HeaderNavigationItem = ({ hasArrow, count, label, icon }: HeaderNavigationItemProps) => (
    <HeaderNavigationItemContainer>
        {count && <Badge badgeContent={count} color="error">{icon}</Badge>}
        {!count && icon}
        <Box
            display="flex"
            alignItems="center"
        >
            <Typography lineHeight="16px" variant="caption">{label}</Typography>
            {hasArrow && <DownArrowIcon />}
        </Box>
    </HeaderNavigationItemContainer>
)