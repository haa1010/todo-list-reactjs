import produce from 'immer';
import { Action } from 'redux-actions';

export type ActionHandleMapping<S> = { [type: string]: (draftStore: S, action: Action<any>) => any };

const findActionToHandle = <S>(action: Action<any>, actionHandles: ActionHandleMapping<S>) => (draftStore: S) => {
    return actionHandles[action.type] && actionHandles[action.type](draftStore, action);
};

export const produceReducer = <S>(actionHandles: ActionHandleMapping<S>, initState: S) => (
    state: S = initState,
    action: Action<any>,
) => {
    return produce(state, (draft: S) => {
        return findActionToHandle(action, actionHandles)(draft);
    });
};
