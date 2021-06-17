import React from 'react';
import Loadable from 'react-loadable';

type ComponentType =
    | (React.ComponentClass<unknown, any> & Loadable.LoadableComponent)
    | (React.FunctionComponent<unknown> & Loadable.LoadableComponent);

type LoaderType = () => Promise<React.ComponentType<any> | { default: React.ComponentType<any> }>;

export const getLoadableHelper = (loader: LoaderType): ComponentType => {
    return Loadable({
        loader,
        loading() {
            return <div>loading...</div>;
        },
    });
};
