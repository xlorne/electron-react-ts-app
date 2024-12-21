import React from "react";
import {Button} from "antd";
import {Provider, useDispatch, useSelector} from "react-redux";
import {TestState, testStore, updateUpdateVersion} from "./store/TestSlice";


const $Test = () => {

    const version = useSelector((state: TestState) => state.test.version);

    const dispatch = useDispatch();

    const handlerTest = () => {
        dispatch(updateUpdateVersion(Math.random()));
    }

    return (
        <>
            {version}
            <Button
                onClick={handlerTest}
            >
                test
            </Button>
        </>
    )
}


const Test = () => {
    return (
        <Provider store={testStore}>
            <$Test/>
        </Provider>
    )
}

export default Test;
