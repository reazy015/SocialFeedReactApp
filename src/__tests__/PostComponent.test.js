import React from 'react';
import MemoPost from '../components/PostComponent/PostComponent';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Post component', () => {
    const post = {
        id: 99,
        created_at: new Date('Fri Dec 29 19:15:04 +0000 2017'),
        user: {
            name: 'John Doe'
        },
        text: 'Lorem ipsum test'
    }

    it('renders correctly', async () => {
        const component = shallow(<MemoPost {...post}/>);
        expect(component).toMatchSnapshot();
    });

    it('Re-renders  with correct props when new props are coming', () => {
        const newPost = {
            id: 100,
            created_at: new Date('Fri Dec 28 19:01:00 +0000 2017'),
            user: {
                name: 'Foo Bar'
            },
            text: 'New post text'
        }
        const component = mount(<MemoPost {...post}/>);
        component.setProps({post: {...newPost}}, () => {
            expect(component).toMatchSnapshot();
         });
        component.unmount();
    })
});

