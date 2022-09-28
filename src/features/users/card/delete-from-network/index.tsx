import { IconButton } from "shared/ui/buttons/icon-button";
import { CloseIcon } from "shared/ui/icons/close";
import { DeleteFromNetworkProps } from "features/users/card/delete-from-network/types";

export const DeleteFromNetwork = ({userId}: DeleteFromNetworkProps) => {

    const handleClick = () => {console.log(userId)};

    return (
        <IconButton
            onClick={handleClick}
            size="small"
        >
            <CloseIcon />
        </IconButton>
    );
}