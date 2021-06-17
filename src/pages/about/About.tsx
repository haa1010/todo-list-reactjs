import React from 'react';

import Header from '../../components/Header/Header';
import AppConstants from '../../common/constants/app';
import './AboutStyles.scss';

const About: React.FunctionComponent = (): React.ReactElement => {
    return (
        <div className="container">
            <Header tabs={AppConstants.tabSetting} />
            About
        </div>
    );
};

export default About;
