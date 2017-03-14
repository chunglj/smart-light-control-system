import React, { Component } from 'react';

import { Select, Tree, Spin } from 'antd';

import './index.css';

const { Option } = Select,
      { TreeNode } = Tree;

// TODO: 修复切换路由时组件状态重置问题，添加列表生成逻辑
export default class DeviceList extends Component {

    constructor(props) {
        super(props);

        this.fillDeviceList = this.fillDeviceList.bind(this);
        this.handleDeviceSelected = this.handleDeviceSelected.bind(this);
    }

    componentDidMount() {
        const { groupType, loadDeviceList } = this.props;
        loadDeviceList(groupType);
    }

    fillDeviceList(groupType) {
        this.props.loadDeviceList(groupType);
    }

    handleDeviceSelected(selectedKey, e) {
        console.log('selectedKey', selectedKey);
        console.log('e', e);
    }

    render() {
        const { loading, groupType, deviceList } = this.props,
            treeNodes = [];

        // 根据设备列表数据生成视图
        if (deviceList) {
            for (const deviceGroup in deviceList) {
                treeNodes.push(<TreeNode title={deviceGroup} key={deviceGroup} >
                    {deviceList[deviceGroup].map(device => (
                        <TreeNode title={device} key={device}></TreeNode>
                    ))}
                </TreeNode>);
            }
        }


        return (
            <div className="c-dl-container">
                <div className="c-dl-group-selector">
                    <span className="c-dl-label">设备分组：</span>
                    <Select className="c-dl-selector" dropdownMatchSelectWidth value={groupType} onSelect={this.fillDeviceList}>
                        <Option value="区域分组">区域分组</Option>
                        <Option value="电话分组">电话分组</Option>
                        <Option value="自定义分组">自定义分组</Option>
                    </Select>
                </div>
                <div className="c-dl-wrapper">
                    <div className="c-dl-title">
                        设备列表
                    </div>
                    <Spin spinning={loading} tip="加载中...">
                        <Tree className="c-dl-list" onSelect={this.handleDeviceSelected}>
                            { treeNodes }
                        </Tree>
                    </Spin>
                </div>
            </div>
        );
    }
}