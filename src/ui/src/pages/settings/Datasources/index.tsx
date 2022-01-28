import React from 'react';

// import CreateSourceFlyout from 'components/CreateSourceFlyout';
import SettingsPage from 'components/SettingsPage';

import DatasourcesTable from './components/DatasourcesTable';


const SourcesSettings: React.FC = () => {
  return (
    <SettingsPage
      title="Data Sources"
      // rightSideItems={[<CreateSourceFlyout />]}
    >
      <DatasourcesTable />
    </SettingsPage>
  );
};

export default SourcesSettings;
