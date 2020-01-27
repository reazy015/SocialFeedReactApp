import React from 'react';
import { act } from 'react-dom/test-utils';
import useFeedInterval from '../customHooks/useFeedIntervalHook';
import  { renderHook } from '@testing-library/react-hooks';

describe('useFeedInterval Hook', () => {
    const initialProps = {
        url: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
        step: 3,
        interval: 4
    };

    const wrongUrl = 'http://api.massrelevance.com/MassRlDemo/kindle.json';

    it('Should return array of posts from useIntervalHook, length of returned array should be equal to step prop and be array type', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFeedInterval(initialProps.url, initialProps.step, initialProps.interval));
        await act(async ()=> {
            await waitForNextUpdate();
        });
        expect(result.current[0].length).toEqual(initialProps.step);
        expect(Array.isArray(result.current[0])).toBe(true);
    });

    it('Should return error object with 404 response  if url is incorrect', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFeedInterval(wrongUrl, initialProps.step, initialProps.interval));
        await act(async ()=> {
            await waitForNextUpdate();
        });
        expect(result.current[1].response.status).toEqual(404);
    });
});