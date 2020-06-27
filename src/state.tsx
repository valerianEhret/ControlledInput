// import React from "react";


import {renderTree} from "./Render";

export type PropsType = {
    state:StateType
    changeStatus:(value:string) => void
}

export type StateType = {
    newStatus:string
    nameNew:string
}


export let state:StateType = {
    newStatus:"",
    nameNew:""
}

export function changeStatus(value:string) {

    state.newStatus =  value;
    console.log(value);
    renderTree(state);
}