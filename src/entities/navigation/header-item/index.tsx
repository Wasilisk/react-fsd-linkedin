import { HeaderNavigationItemProps } from "entities/navigation/header-item/types"
import { HeaderNavigationItemContainer } from "entities/navigation/header-item/container"

import { DownArrowIcon } from "shared/ui/icons/arrows/down"
import { Typography } from "shared/ui/typography"
import { Box } from "shared/ui/box"

export const HeaderNavigationItem = ({ hasArrow, label, icon }: HeaderNavigationItemProps) => (
    <HeaderNavigationItemContainer>
        {icon}
        <Box
            display="flex"
            alignItems="center"
        >
            <Typography lineHeight="16px" variant="caption">{label}</Typography>
            {hasArrow && <DownArrowIcon />}
        </Box>
    </HeaderNavigationItemContainer>
)