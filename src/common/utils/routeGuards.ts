import { route } from '../constants/routes';

import { storage, storageKey } from './storage';

export interface RouteGuard {
    /**
     * If the condition is not met then either redirect to onFail or don't render the route
     */
    failCondition: boolean;
    /**
     * If request is still in progress we don't want to call onFail yet
     */
    requestDone: boolean;
    /**
     * URL where to redirect to, when condition is not met
     */
    onFail?: string | null;
}

const unAuthGuard: RouteGuard = {
    failCondition: !!storage.getToken(storageKey.USER_TOKEN),
    requestDone: true,
    onFail: route.HOME,
};

export { unAuthGuard };
