import { NavigationItemProps } from "entities/navigation/item/types"
import { NavigationItemContainer } from "entities/navigation/item/container"

import { Badge } from "shared/ui/badge"
import { DownArrowIcon } from "shared/ui/icons/arrows/down"
import { Typography } from "shared/ui/typography"
import { Box } from "shared/ui/box"

export const NavigationItem = ({ hasArrow, count, label, icon }: NavigationItemProps) => (
    <NavigationItemContainer>
        {count && <Badge badgeContent={count} color="error">{icon}</Badge>}
        {!count && icon}
        <Box
            display="flex"
            alignItems="center"
        >
            <Typography lineHeight="16px" variant="caption">{label}</Typography>
            {hasArrow && <DownArrowIcon />}
        </Box>
    </NavigationItemContainer>
)