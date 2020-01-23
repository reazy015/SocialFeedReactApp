import React from 'react';
import MemoPost from './PostComponent';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import axios from 'axios';

jest.mock('axios');

describe('Post component', () => {
    const post = {
        id: 99,
        created_at: 'Fri Dec 29 19:15:04 +0000 2017',
        user: {
            name: 'John Doe'
        },
        text: 'Lorem ipsum test'
    }

    it('renders correctly', async () => {
        const component = shallow(<MemoPost post={post}/>);
        expect(toJson(component)).toMatchSnapshot();
    });

    it('Re-renders  with correct props when new props are coming', () => {
        const newPost = {
            id: 100,
            created_at: 'Fri Dec 28 19:01:00 +0000 2017',
            user: {
                name: 'Foo Bar'
            },
            text: 'New post text'
        }
        const component = mount(<MemoPost post={post}/>);
        component.setProps({post: {...newPost}}, () => {
            expect(toJson(component)).toMatchSnapshot();
         });
        component.unmount();
    })
});

