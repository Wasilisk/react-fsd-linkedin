import { networkNavigationData } from "widgets/network/navigation/mock-data";

import { NetworkNavigationItem } from "entities/navigation/network-item";

import { navigationIcons } from "shared/ui/icons/navigations";
import { Section } from "shared/ui/section";

export const NetworkNavigation = () => (
    <Section title="Manage my network" py={1}>
        {
            networkNavigationData.map(({ id, icon, ...itemData }) => <NetworkNavigationItem
                key={id}
                icon={navigationIcons[icon]}
                {...itemData}
            />)
        }
    </Section>
);