import React from "react";
import {Button, Result} from "antd";
import {useNavigate} from "react-router";
import {config} from "../../config/theme";

const Index = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate(config.welcomePath, {replace: true});
    }

    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={(
                <Button
                    type="primary"
                    onClick={goHome}
                >
                    Back Home
                </Button>
            )}
        />
    )
}

export default Index;
