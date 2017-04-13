import React, { Component } from 'react';

import { Table, Switch, Badge, Icon } from 'antd';

import './index.css';

const { Column } = Table;

export default class SwitchingConsole extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { key: '1', outputGroups: '第1路输出', state: 0, updateTime: '2016-09-21', checked: false },
                { key: '2', outputGroups: '第2路输出', state: 1, updateTime: '2016-09-21', checked: true },
                { key: '3', outputGroups: '第2路输出', state: 1, updateTime: '2016-09-21', checked: true },
                { key: '4', outputGroups: '第2路输出', state: 1, updateTime: '2016-09-21', checked: true },
                { key: '5', outputGroups: '第2路输出', state: 1, updateTime: '2016-09-21', checked: true },
                { key: '6', outputGroups: '第2路输出', state: 1, updateTime: '2016-09-21', checked: true },
                { key: '7', outputGroups: '第2路输出', state: 1, updateTime: '2016-09-21', checked: true },
                { key: '8', outputGroups: '第2路输出', state: 1, updateTime: '2016-09-21', checked: true },
            ]
        };
    }

    handleChanged(key, checked) {
        const { statusGroup } = this.props;
        statusGroup[key - 1].checked = checked;
        this.props.updateViewData({ statusGroup });
    }

    render() {
        const { statusGroup } = this.props;

        return (
            <Table className="c-sls-sc-table" size="small" pagination={false} dataSource={statusGroup}>
                <Column
                  width={120}
                  title="8路支路输出"
                  dataIndex="outputGroup"
                  key="outputGroup"
                />
                <Column
                  width={120}
                  title="状态"
                  key="state"
                  render={(text, record) => (
                      <Badge status={record.state ? 'success' : 'default'} text={record.state ? '开启' : '关闭'} />
                  )}
                />
                <Column
                  width={150}
                  title="状态更新时间"
                  dataIndex="updateTime"
                  key="updateTime"
                />
                <Column
                  width={150}
                  title="开关灯设置"
                  key="setting"
                  render={(text, record) => (
                    <Switch checkedChildren={'开'} unCheckedChildren={'关'} checked={record.checked} onChange={this.handleChanged.bind(this, record.key)} />
                  )}
                />
            </Table>
        );
    }
}