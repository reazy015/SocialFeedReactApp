import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import FunctionalFeedContainer from '../components/FunctionalFeedContainer';

test('Renders FeedComponent', () => {
    const component = shallow(<App/>);
    expect(component.find(FunctionalFeedContainer)).toHaveLength(1);
});
