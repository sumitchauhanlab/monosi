import React, { useState, useEffect } from 'react';

import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiButton,
  EuiTitle,
  EuiFlexGroup,
  EuiFormRow,
  EuiFieldText,
  EuiFlexItem,
  EuiSelect,
  EuiCheckableCard,
  EuiSpacer,
  EuiHorizontalRule,
  EuiPageHeader,
  EuiFieldNumber,
  EuiFlyoutFooter,
  EuiComboBox,
} from '@elastic/eui';

import MonitorService from 'services/monitors';
import datasourceService from 'services/datasources';

const MonitorForm: React.FC = () => {
  const [name, setName] = useState('');
  const [type, setType] = useState('table');  
  const [datasourceName, setDatasourceName] = useState('');
  const [table, setTable] = useState('');
  const [timestampField, setTimestampField] = useState('');

  const [intervalAmount, setIntervalAmount] = useState('');
  const [intervalType, setIntervalType] = useState('minutes');

  const [datasources, setDatasources] = useState([]);
  const [selectedDatasource, setSelectedDatasource] = useState([]);


  useEffect(() => {
    async function loadDatasources() {
      let res = await datasourceService.getAll();
      if (res !== null && res.datasources) {
        setDatasources(res.datasources);
      }
    }
    loadDatasources();
  }, []);

  const selectDatasource = async (selectedOptions: any) => {
    if (selectedOptions.length === 0) return;

    setSelectedDatasource(selectedOptions);

    console.log(selectedOptions);

    const datasource = selectedOptions[0].label;
    setDatasourceName(datasource);
  };

  const createMonitor = () => {
    const service = MonitorService;
    const body = {
      name: name,
      type: type,
      datasource: datasourceName,
      configuration: {
        table: table,
        timestamp_field: timestampField,
      },
      // schedule: {
      //   interval_amount: intervalAmount,
      //   interval_type: intervalType,
      // },
    };

    const resp = service.create(body);
    window.location.reload();
  };

  return (
    <>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiFormRow label="Name">
            <EuiFieldText
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </EuiFormRow>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFormRow label="Check every">
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFieldNumber
                  value={intervalAmount}
                  onChange={(e) => setIntervalAmount(e.target.value)}
                />
              </EuiFlexItem>
              <EuiFlexItem grow={false}>
                <EuiSelect
                  value={intervalType}
                  options={[{ text: 'minutes' }]}
                />
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFormRow>
        </EuiFlexItem>
      </EuiFlexGroup>

      <EuiHorizontalRule />
      <EuiPageHeader
        pageTitle="Configure Monitor"
        description="Choose a monitor type and configure it's details"
      />
      <EuiHorizontalRule />
      <EuiCheckableCard
        id="table"
        label="Table Health"
        name="Table Health"
        value="table"
        checked={true}
        onChange={() => {}}
      />
      <EuiSpacer size="s" />
      <EuiCheckableCard
        id="custom_sql"
        label="Custom SQL"
        name="Custom SQL"
        value="custom_sql"
        checked={false}
        disabled
        onChange={() => {}}
      />
      <EuiHorizontalRule />

      <EuiFormRow label="Data Source">
        <EuiComboBox
          onChange={selectDatasource}
          singleSelection={{ asPlainText: true }}
          selectedOptions={selectedDatasource}
          options={datasources.map((el: any) => {
            return { label: el.name, value: el.id };
          })}
        />
      </EuiFormRow>
      <EuiFormRow label="Table">
        <EuiFieldText
          value={table}
          onChange={(e) => setTable(e.target.value)}
        />
      </EuiFormRow>
      <EuiFormRow label="Timestamp Field">
        <EuiFieldText
          value={timestampField}
          onChange={(e) => setTimestampField(e.target.value)}
        />
      </EuiFormRow>

      <EuiButton fill onClick={createMonitor}>
        Save
      </EuiButton>
    </>
  );
};

export default MonitorForm;
