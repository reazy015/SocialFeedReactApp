import fetchData from '../utils/fetchData';
import posts_mock from '../__mocks__/posts_mock';
import axios from 'axios';

jest.mock('axios');

describe('fetchData utility', () => {
    const url = 'http://api.massrelevance.com/MassRelDemo/kindle.json';
    const limit = 4;

    it('fetches data correctly with correctly passed params', async () => {
        axios.get.mockImplementationOnce(() => Promise.resolve(posts_mock));
        await expect(fetchData(url, {limit})).resolves.toEqual(posts_mock);
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledWith(url, {params: {limit}});
    });
});