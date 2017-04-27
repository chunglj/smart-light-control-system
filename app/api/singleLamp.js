import fetch from 'isomorphic-fetch';
import { dataFetcher } from '../utils/dataFetcher';

const URL = {
    FETCH_TERMINAL_MESSAGE: '/single_alarm_terminal_message/get_status',
    FETCH_WARNING_INFO: '/single_lamp_warning_info/get_status',
    FETCH_SINGLE_FAULT_STATUS: '/single_fault_query/get_status',
    FETCH_SINGLE_NEAR_TERMINAL: '/single_near_terminal/get_status',
    FETCH_ROD_LIST: '/single_lamp_detail_initialization/get_status'
};

export const fetchTerminalMessage = dataFetcher(URL.FETCH_TERMINAL_MESSAGE);
export const fetchWarningInfo = dataFetcher(URL.FETCH_WARNING_INFO);
export const fetchSingleFaultStatus = dataFetcher(URL.FETCH_SINGLE_FAULT_STATUS);
export const fetchSingleNearTerminal = dataFetcher(URL.FETCH_SINGLE_NEAR_TERMINAL);
export const fetchRodList = dataFetcher(URL.FETCH_ROD_LIST);