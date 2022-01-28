import React from 'react';

// import CreateIntegrationFlyout from 'components/CreateIntegrationFlyout';
import SettingsPage from 'components/SettingsPage';
import IntegrationsTable from './components/IntegrationsTable';

const IntegrationsSettings: React.FC = () => {
    return (
        <SettingsPage
            title="Integrations"
            // rightSideItems={[<CreateIntegrationFlyout />]}
            >
            <IntegrationsTable />
        </SettingsPage>
    )
}

export default IntegrationsSettings;
