import React from 'react';
import FeedsWrapper from '../components/FeedsWrapper';
import FeedsWrapperContainer from '../components/FeedsWrapperContainer';
import { shallow } from 'enzyme';

jest.mock('../utils/fetchData');

describe('FeedsWrapperContainer', () => {
    const initialProps = {
        url: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
        step: 3,
        interval: 4
    };

    it('Should render FeedsWrapper component', () => {
        const component = shallow(<FeedsWrapperContainer {...initialProps}/>);
        expect(component.find(FeedsWrapper).length).toEqual(1);
    });

    it('Should call getFeeds function on did mount lifecycle', () => {
        const startFeedTimer = jest.spyOn(FeedsWrapperContainer.prototype, 'getFeeds');
        const component = shallow(<FeedsWrapperContainer {...initialProps}/>);

        expect(startFeedTimer).toHaveBeenCalledTimes(1);
    });
});