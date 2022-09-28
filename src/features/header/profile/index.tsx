import { HeaderNavigationItem } from "entities/navigation/header-item";

import { Avatar } from "shared/ui/avatar";

export const HeaderProfile = () => {

    const handleClick = () => console.log("actions");

    return (
        <HeaderNavigationItem
            icon={<Avatar
                size="small"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHfN3i4r84uIw/profile-displayphoto-shrink_100_100/0/1650923467052?e=1669852800&v=beta&t=PFkMhZ2awEIZfDbgItnqXc92DplEloOSgpjB4JAs3QU"
            />}
            onClick={handleClick}
            label="Me"
            hasArrow
        />
    )
}