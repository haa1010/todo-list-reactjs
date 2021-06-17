import API from '../../common/constants/api';
import AxiosClient from '../../common/utils/axiosClient';

import { LoginParams } from './types';

const authApis = {
    login: (data: LoginParams): Promise<any> => {
        const results = AxiosClient.post(API.AUTH.LOGIN, data);
        return results;
    },
};

export default authApis;
