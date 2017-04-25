import { homeSagas } from '../views/home/sagas';
import { Common } from '../components/common/sagas';
import { Login } from '../views/login/sagas';
import { ManualLampSwitching } from '../views/manual-lamp-switching/sagas';
import { ElectricalParameter } from '../views/electrical-parameter/sagas';
import { LampSwitchingTime } from '../views/lamp-switching-time/sagas';
import { SingleLampWarningInfo } from '../views/single-lamp-warning-info/sagas';

function combineSagas(...sagaArrays) {
    let sagaList = [];
    for (const sagas of sagaArrays) {
        sagaList = [...sagaList, sagas.map(saga => saga())];
    }

    return sagaList;
}

export default function* rootSaga() {
    const saga = combineSagas(
        homeSagas,
        Common,
        Login,
        ManualLampSwitching,
        ElectricalParameter,
        LampSwitchingTime,
        SingleLampWarningInfo
    );

    yield saga;
}
