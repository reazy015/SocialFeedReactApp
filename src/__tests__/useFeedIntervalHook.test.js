import React from 'react';
import { act } from 'react-dom/test-utils';
import useFeedInterval from '../customHooks/useFeedIntervalHook';
import  {renderHook } from '@testing-library/react-hooks';

describe('useFeedInterval Hook', () => {
    const initialProps = {
        url: 'http://api.massrelevance.com/MassRelDemo/kindle.json',
        step: 3,
        interval: 4
    };

    it('Should receive array of posts from useIntervalHook, length of received array should be equal to step prop and be array type', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFeedInterval(initialProps.url, initialProps.step, initialProps.interval));
        await act(async ()=> {
            await waitForNextUpdate();
        });
        expect(result.current.length).toEqual(initialProps.step);
        expect(Array.isArray(result.current)).toBe(true);
    });
});