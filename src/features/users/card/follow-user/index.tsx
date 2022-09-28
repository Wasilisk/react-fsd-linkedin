import { FollowUserProps } from "features/users/card/follow-user/types";

import { Button } from "shared/ui/buttons/button";

export const FollowUser = ({ userId }: FollowUserProps) => {

    const handleClick = () => { console.log(userId) }

    return (
        <Button
            variant="outlined"
            onClick={handleClick}
        >
            Connect
        </Button>
    );
}