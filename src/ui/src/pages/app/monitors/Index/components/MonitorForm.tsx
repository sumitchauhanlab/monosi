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
  const [monitorType, setMonitorType] = useState('table_metrics');
  const [intervalAmount, setIntervalAmount] = useState('');
  const [intervalType, setIntervalType] = useState('minutes');
  const [datasourceId, setDatasourceId] = useState('');
  const [table, setTable] = useState('');
  const [timestampField, setTimestampField] = useState('');

  const [datasources, setDatasources] = useState([]);
  const [selectedDatasource, setSelectedDatasource] = useState([]);
  const [tableOptions, setTableOptions] = useState([]);
  const [selectedTable, setSelectedTable] = useState([]);
  const [timestampOptions, setTimestampOptions] = useState([]);

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

    async function retrieveTableOptions(datasourceId: any) {
      setTableOptions([]);
      // const resp = await datasourceService.schema(datasourceId);
      // if (resp && resp.schema && resp.schema.tables) {
      //   setTableOptions(resp.schema.tables);
      // }
    }

    setSelectedDatasource(selectedOptions);

    const datasource = selectedOptions[0].value;
    setDatasourceId(datasourceId);
    await retrieveTableOptions(datasourceId);
  };

  const selectTable = (selectedOptions: any) => {
    if (selectedOptions.length === 0) return;

    setSelectedTable(selectedOptions);

    const tableName = selectedOptions[0].value;
    const selectedTable: any = tableOptions.find((el: any) => {
      return el.name === tableName;
    });
    setTable(
      selectedTable.database +
        '.' +
        selectedTable.schema +
        '.' +
        selectedTable.name
    );

    const timestampFields = selectedTable.columns.filter((el: any) => {
      return el.data_type === 'date';
    });
    setTimestampOptions(
      timestampFields.map((el: any) => {
        return { text: el.name, value: el.name };
      })
    );
  };

  const createMonitor = () => {
    const service = MonitorService;
    const body = {
      name: name,
      type: monitorType,
      datasource: datasourceId,
      configuration: {
        table: table,
        timestamp_field: timestampField,
      },
      schedule: {
        interval_amount: intervalAmount,
        interval_type: intervalType,
      },
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
        id="table_health"
        label="Table Health"
        name="Table Health"
        value="table_health"
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
        <EuiComboBox
          isDisabled={
            selectedDatasource.length <= 0 || tableOptions.length <= 0
          }
          selectedOptions={selectedTable}
          singleSelection={{ asPlainText: true }}
          onChange={selectTable}
          options={tableOptions.map((el: any) => {
            return { label: el.name, value: el.name };
          })}
        />
      </EuiFormRow>
      <EuiFormRow label="Timestamp Field">
        <EuiSelect
          disabled={selectedTable.length <= 0}
          options={timestampOptions}
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
