import { Box } from "shared/ui/box";
import { LinkedInLogoIcon } from "shared/ui/icons/logo";
import { Typography } from "shared/ui/typography";

import { FooterLink } from "widgets/network/footer/footer-link";

const networkFooterData = [
    {
        id: 1,
        label: "About",
        to: "/about"
    },
    {
        id: 2,
        label: "Accessibility",
        to: "/accessibility"
    },
    {
        id: 3,
        label: "Help Center",
        to: "/help_center"
    },
    {
        id: 4,
        label: "Privacy & Terms",
        to: "/privacy"
    },
    {
        id: 5,
        label: "Ad Choices",
        to: "/ad_Choices"
    },
    {
        id: 6,
        label: "Advertising",
        to: "/advertising"
    },
    {
        id: 7,
        label: "Business Services",
        to: "/business_services"
    },
    {
        id: 8,
        label: "Get the LinkedIn app",
        to: "/get_linkedin_app"
    },
    {
        id: 9,
        label: "More",
        to: "/more"
    }
]

export const NetworkFooter = () => (
    <Box
        px={3}
        pb={0.5}
        mt={2}
    >
        <Box
            display="flex"
            flexWrap="wrap"
            alignItems="center"
            justifyContent="center"
            mx={3}
            my={2}
        >
            {
                networkFooterData.map(({id, to, label}) => <FooterLink key={id} to={to}>{label}</FooterLink>)
            }
        </Box>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx={3}
            my={2}
        >
        <LinkedInLogoIcon/> 
        <Typography variant="caption" ml={1}>Vasyl Petryna © 2022</Typography>
        </Box>
    </Box>
);