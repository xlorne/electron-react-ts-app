import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';


export interface TestStore {
    version: number;
}

export type TestStoreAction = {

    updateUpdateVersion: (state: TestStore, action: PayloadAction<number>) => void;

}

export const testSlice = createSlice<TestStore, TestStoreAction, "test", {}>({
    name: 'test',
    initialState: {
        version: 0
    },
    reducers: {
        updateUpdateVersion: (state, action) => {
            state.version = action.payload;
        },
    },
});

export const {
    updateUpdateVersion,
} = testSlice.actions;

export const testStore = configureStore({
    reducer: {
        test: testSlice.reducer
    },
});

export type TestState = ReturnType<typeof testStore.getState>;
