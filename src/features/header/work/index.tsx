import { HeaderNavigationItem } from "entities/navigation/header-item";

import { WorkIcon } from "shared/ui/icons/navigations/work";

export const HeaderWork = () => {

    const handleClick = () => console.log("actions");

    return (
        <HeaderNavigationItem
            icon={<WorkIcon />}
            label="Work"
            hasArrow
            onClick={handleClick}
        />
    );
}