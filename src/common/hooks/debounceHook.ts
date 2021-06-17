import { useCallback, useState } from 'react';
import { debounce } from 'lodash';

export const useDebounce = (delayedFunc: (param: any) => void, delayInMs: number) => {
    return useCallback(debounce(delayedFunc, delayInMs), [delayedFunc, delayInMs]);
};

export const useDebouncedState = (initialState: any, durationInMs: number) => {
    const [internalState, setInternalState] = useState(initialState);
    const debouncedFunction = useDebounce(setInternalState, durationInMs);
    return [internalState, debouncedFunction];
};
