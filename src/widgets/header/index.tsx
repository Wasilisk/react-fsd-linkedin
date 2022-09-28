import { HeaderNavigationLinks } from "features/header/links"
import { GlobalSearch } from "features/global-search";
import { HeaderWork } from "features/header/work";
import { HeaderProfile } from "features/header/profile";

import { Divider } from "shared/ui/divider";
import { LinkedInIcon } from "shared/ui/icons/linkedin/linkedin";

export const Header = () => (
    <>
        <LinkedInIcon />
        <GlobalSearch />
        <HeaderNavigationLinks />
        <HeaderProfile/>
        <Divider orientation="vertical" />
        <HeaderWork/>
    </>
)