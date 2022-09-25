import { NavigationLinksSection } from "widgets/header/navigation/links-section";

import { NavigationItem } from "entities/navigation/item";

import { Avatar } from "shared/ui/avatar";
import { Divider } from "shared/ui/divider";
import { WorkIcon } from "shared/ui/icons/navigations/work";

export const HeaderNavigation = () => (
    <>
        <NavigationLinksSection/>
        <NavigationItem
            icon={<Avatar
                size="small"
                src="https://media-exp1.licdn.com/dms/image/C4E03AQHfN3i4r84uIw/profile-displayphoto-shrink_100_100/0/1650923467052?e=1669852800&v=beta&t=PFkMhZ2awEIZfDbgItnqXc92DplEloOSgpjB4JAs3QU"
            />}
            label="Me"
            hasArrow
        />
        <Divider orientation="vertical" />
        <NavigationItem
            icon={<WorkIcon/>}
            label="Work"
            hasArrow
        />
    </>
)