import { UserCardTextInfoProps } from "entities/users/user-card/text-info/types";

import { Link } from "shared/libs/router/link";
import { TextEllipsis } from "shared/ui/text-ellipsis";
import { Typography } from "shared/ui/typography";

export const UserCardTextInfo = ({ id, username, headline }: UserCardTextInfoProps) => (
    <>
        <Link to={`/user/${id}`}>
            <TextEllipsis lineClamp={1}>
                <Typography
                    variant="link_title"
                >
                    {username}
                </Typography>
            </TextEllipsis>
            <TextEllipsis lineClamp={2}>
                <Typography
                    flex={1}
                    minHeight="40px"
                    variant="subtitle1"
                >
                    {headline}
                </Typography>
            </TextEllipsis>
        </Link>
    </>
);