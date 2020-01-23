import FeedComponent from './FeedComponent';
import MemoPost from './PostComponent/PostComponent';
import { mount, shallow } from 'enzyme';
import React from 'react';
import axios from 'axios'
import  postsMocks from '../__mocks__/posts_mock'

jest.mock('axios');

describe('Feed Component', () => {
    const props = {
        url: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
        step: 3,
        interval: 4
    }

    it('Call feedTimer function on component did mount lifecycle', () => {
        const component = shallow(<FeedComponent {...props}/>);
        jest.spyOn(component.instance(), 'feedTimer');
        component.instance().componentDidMount();
        expect(component.instance().feedTimer).toHaveBeenCalledTimes(1);
    });

    it('fetchData is calling with correct url', async () => {
        const fetchData = jest.spyOn(FeedComponent.prototype, 'fetchData');
        axios.get.mockImplementationOnce(() => Promise.resolve(postsMocks));
        await expect(fetchData(props.url, props.step));
        expect(axios.get).toHaveBeenCalledWith(`${props.url}/?limit=${props.step}`);
    });

    it('State data should be array of steps length after setStateWithFetch call', async () => {
        const component = shallow(<FeedComponent {...props}/>);
        const setStateWithFetch = component.instance().setStateWithFetch;
        expect(component.state('data').length).toBe(0);
        setStateWithFetch(postsMocks, props.step, component.state('limit'));
        expect(component.state('data').length).toBe(props.step);
    });

    it('Limit should be increased and should be bigger then previous value after setStateWithFetch call', () => {
        const component = shallow(<FeedComponent {...props}/>);
        const setStateWithFetch = component.instance().setStateWithFetch;
        const initialLimitValue = component.state('limit');
        expect(component.state('limit')).toBe(0);
        setStateWithFetch(postsMocks, props.step, component.state('limit'));
        expect(component.state('limit')).toBe(initialLimitValue + props.step);
        expect(component.state('limit')).not.toEqual(initialLimitValue);
    });

    it('Renders child component after state data property is changed', () => {
        const component = mount(<FeedComponent {...props} />);
        component.setState({data: postsMocks.slice(-component.props().step)});

        component.setProps({interval: 5}); // force component re-render update() not working

        expect(component.find(MemoPost)).toHaveLength(props.step);
        component.unmount();
    })
});