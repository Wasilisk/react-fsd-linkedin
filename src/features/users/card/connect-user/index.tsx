import { ConnectUserProps } from "features/users/card/connect-user/types";

import { Button } from "shared/ui/buttons/button";

export const ConnectUser = ({ userId }: ConnectUserProps) => {

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