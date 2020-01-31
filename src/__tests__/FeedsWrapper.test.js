import React from 'react';
import FeedsWrapper from '../components/FeedsWrapper';
import MemoPost from '../components/PostComponent/PostComponent';
import {shallow} from 'enzyme';
import posts_mock from '../__mocks__/posts_mock';

describe('FeedsWrapper component', () => {
    it('Renders MemmoPost components if receives posts array, wrapper div has feeds-wrapper class', () => {
        const component = shallow(<FeedsWrapper posts={posts_mock} error={undefined}/>);
        expect(component.find(MemoPost).length).toBeGreaterThan(0);
        expect(component.find('div').hasClass('feeds-wrapper')).toBe(true);
    });

    it('Div wrapper has no feeds-wrapper class if there is only one item in feeds array', () => {
        const component = shallow(<FeedsWrapper posts={posts_mock.slice(1,2)} error={undefined}/>);
        expect(component.find(MemoPost).length).toBe(1);
        expect(component.find('div').hasClass('feeds-wrapper')).toBe(false);
    });

    it('Renders error message when url is incorrect', () => {
        const errorMessage = '404 error';
        const component = shallow(<FeedsWrapper posts={[]} error={new Error(errorMessage)} />);

        expect(component.find(MemoPost).length).toBe(0);
        expect(component.find('.error').length).toBe(1);
        expect(component.find('.error').text()).toBe(errorMessage);
    });
});