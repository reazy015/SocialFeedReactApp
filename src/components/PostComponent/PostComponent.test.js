import React from 'react';
import MemoPost from './PostComponent';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import axios from 'axios';

jest.mock('axios');

describe('Post component', () => {
    it('renders correctly', async () => {
        const post = {
            id: 99,
            created_at: 'Fri Dec 29 19:15:04 +0000 2017',
            user: {
                name: 'John Doe'
            }
        }
        const component = shallow(<MemoPost post={post}/>);
        expect(toJson(component)).toMatchSnapshot();
    });
});

