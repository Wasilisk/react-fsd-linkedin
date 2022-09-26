import { NetworkNavigationItemProps } from "entities/navigation/network-item/types";
import { NetworkNavigationItemContainer } from "entities/navigation/network-item/container";
import { NetworkNavigationLink } from "entities/navigation/network-item/link";

import { Box } from "shared/ui/box";
import { Typography } from "shared/ui/typography";

export const NetworkNavigationItem = ({ icon, label, to, count }: NetworkNavigationItemProps) => (
    <NetworkNavigationLink to={to}>
        <NetworkNavigationItemContainer>
            <Box
                display="flex"
                width="100%"
                color="rgba(0,0,0,0.6)"
                flex={1}
            >
                <Box
                    display="flex"
                    flex={1}
                >
                    {icon}
                    <Typography ml={1}>{label}</Typography>
                </Box>
                {count && <Typography pl={1}>{count}</Typography>}
            </Box>
        </NetworkNavigationItemContainer>
    </NetworkNavigationLink>
);