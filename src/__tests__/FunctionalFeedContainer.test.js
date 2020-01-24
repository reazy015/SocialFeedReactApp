import React from 'react';
import FunctionalFeedContainer from '../components/FunctionalFeedContainer';
import FeedsWrapper from '../components/FeedsWrapper';
import { mount, shallow } from 'enzyme';

describe('FunctionalFeedContainer', () => {
    const initialProps = {
        url: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
        step: 3,
        interval: 4
    };

    it('Should receive props correctly', () => {
        const component = mount(<FunctionalFeedContainer {...initialProps}/>);
        expect(component.props()).toEqual(initialProps);
        component.unmount();
    });

    it('Should render FeedsWrapper', () => {
        const component = mount(<FunctionalFeedContainer {...initialProps}/>);
        expect(component.find(FeedsWrapper).length).toEqual(1);
        component.unmount();
    });
});