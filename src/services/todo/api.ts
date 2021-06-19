import { AxiosResponse } from 'axios';

import API from '../../common/constants/api';
import AxiosClient from '../../common/utils/axiosClient';

import { TodoInfo } from './types';

const todoApis = {
    getList: (): Promise<AxiosResponse<TodoInfo[]>> => {
        const results = AxiosClient.get<TodoInfo[]>(API.TODO.GET_LIST);
        return results;
    },
    getOne: (id: number): Promise<any> => {
        const results = AxiosClient.get(`/${id}`);
        return results;
    },
    addTodo: (data: TodoInfo): Promise<any> => {
        const results = AxiosClient.post<TodoInfo>('', {
            title: data.title,
            userId: data.userId,
            completed: data.completed,
        });
        return results;
    },
    editTodo: (data: TodoInfo): Promise<any> => {
        const results = AxiosClient.put<TodoInfo>(`/${data.id}`, {
            title: data.title,
            userId: data.userId,
            completed: data.completed,
        });
        return results;
    },
    deleteTodo: (id: number): Promise<any> => {
        const results = AxiosClient.delete<TodoInfo>(`/${id}`);
        return results;
    },
};

export default todoApis;
