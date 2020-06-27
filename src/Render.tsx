import ReactDOM from "react-dom";
import {changeStatus, PropsType, state, StateType} from "./state";
import React from "react";
import App from "./App";



export const renderTree =(state:StateType) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state}
                 changeStatus={changeStatus}

            />
        </React.StrictMode>,
        document.getElementById('root')
    );

}