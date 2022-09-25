import {Box} from "../box";
import LayoutContent from "./content";
import LayoutHeader from "./header";
import { LayoutProps } from "shared/ui/layout/types";


export const Layout = ({children}: LayoutProps) => (
    <Box
        height="100%"
        display="flex"
        flexDirection="column"
    >
        {children}
    </Box>
);

Layout.Header = LayoutHeader;
Layout.Content = LayoutContent;
