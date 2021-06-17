import { Tabs, Tab } from 'react-bootstrap';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import './HeaderStyles.scss';

export interface HeaderProps {
    tabs: {
        title: string;
        path: string;
    }[];
}

const Header: React.FunctionComponent<HeaderProps> = ({ tabs }): React.ReactElement => {
    const history = useHistory();
    const match = useRouteMatch();

    const callback = (path: string) => {
        history.push(path);
    };

    return (
        <Tabs defaultActiveKey={match.path} onChange={callback}>
            {tabs.map((tab) => (
                <Tab key={tab.title} title={tab.title} eventKey={tab.path}>
                    {tab.title}
                </Tab>
            ))}
        </Tabs>
    );
};

export default Header;
