import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import FeedComponent from './components/FeedComponent';

test('Renders FeedComponent', () => {
    const component = shallow(<App/>);
    expect(component.find(FeedComponent)).toHaveLength(1);
});
