import React from "react";

import { InvitationsProps } from "widgets/network/invitations/types"

import { InvitationCard } from "entities/users/invitation-card";

import { Button } from "shared/ui/buttons/button";
import { Paper } from "shared/ui/paper";
import { Section } from "shared/ui/section";
import { Divider } from "shared/ui/divider";

export const Invitations = ({ invitations }: InvitationsProps) => (
    <Paper>
        <Section
            title={invitations.length > 0 ? "Invitations" : "No pending invitations"}
            actions={
                <>
                    {invitations.length === 0 && <Button>Manage</Button>}
                    {invitations.length > 3 && <Button href="to">See all {invitations.length}</Button>}
                </>
            }
        >
            {
                invitations.slice(0, 3).map(itemData => <React.Fragment key={itemData.id}>
                    <Divider />
                    <InvitationCard
                        userInfo={itemData.user_info}
                        mutual_connections={itemData.mutual_connections}
                        actions={
                            <>
                                <Button>Ignore</Button>
                                <Button variant="outlined">Accept</Button>
                            </>
                        }
                    />
                </React.Fragment>)
            }
        </Section>
    </Paper>
)