import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import Frame from '../layouts/frame';
import Home from '../views/home';
import ManualLampSwitching from '../views/manual-lamp-switching';
import LampSwitchingTime from '../views/lamp-switching-time';
import RecordQuery from '../views/record-query';
import ElectricalParameter from '../views/electrical-parameter';
import CurrentWarning from '../views/current-warning';
import GroupControlSetting from '../views/group-control-setting';
import StabilivoltInterval from '../views/stabilivolt-interval';
import SingleLampMap from '../views/single-lamp-map';
import SingLampControl from '../views/single-lamp-control';

const routes = history => (
    <Router history={history}>
        <Route path="/" component={Frame}>
            <IndexRoute component={Home} />
            <Route path="/integrated_terminal/manual_lamp_switching" component={ManualLampSwitching} />
            <Route path="/integrated_terminal/lamp_switching_time" component={LampSwitchingTime} />
            <Route path="/integrated_terminal/record_query" component={RecordQuery} />
            <Route path="/integrated_terminal/electrical_parameter" component={ElectricalParameter} />
            <Route path="/integrated_terminal/current_warning" component={CurrentWarning} />
            <Route path="/integrated_terminal/group_control_setting" component={GroupControlSetting} />
            <Route path="/integrated_terminal/stabilivolt_interval" component={StabilivoltInterval} />
            <Route path="/single_lamp/single_lamp_map" component={SingleLampMap} />
            <Route path="/single_lamp/single_lamp_control" component={SingLampControl} />
        </Route>
    </Router>
);

export default routes;
