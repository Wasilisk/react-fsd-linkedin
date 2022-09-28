import { Link } from "shared/libs/router/link";
import { Box } from "shared/ui/box";
import { RelationIcon } from "shared/ui/icons/relation";
import { Typography } from "shared/ui/typography";
import { MutualConnectionsInfoProps } from "./types";

export const MutualConnectionsInfo = ({ userId, mutual_connections }: MutualConnectionsInfoProps) => (
    <Link to={`/mutual_connection/${userId}`}>
        <Box
            display="flex"
            alignItems="center"
            color="rgba(0,0,0,0.6)"
            pt={0.5}
        >
            <RelationIcon />
            <Typography pl={1} variant="link_caption">{mutual_connections}</Typography>
        </Box>
    </Link>
)