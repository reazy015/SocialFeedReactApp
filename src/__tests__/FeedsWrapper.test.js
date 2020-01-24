import React from 'react';
import FeedsWrapper from '../components/FeedsWrapper';
import MemoPost from '../components/PostComponent/PostComponent';
import {shallow} from 'enzyme';
import posts_mock from '../__mocks__/posts_mock';

describe('FeedsWrapper component', () => {
    it('Renders MemmoPost components if receives posts array, wrapper div has feeds-wrapper class', () => {
        const component = shallow(<FeedsWrapper posts={posts_mock}/>);
        expect(component.find(MemoPost).length).toBeGreaterThan(0);
        expect(component.find('div').hasClass('feeds-wrapper')).toBe(true);
    });

    it('Div wrapper has no feeds-wrapper class if there is only one item in feeds array', () => {
        const component = shallow(<FeedsWrapper posts={posts_mock.slice(1,2)} />);
        expect(component.find(MemoPost).length).toBe(1);
        expect(component.find('div').hasClass('feeds-wrapper')).toBe(false);
    });
});