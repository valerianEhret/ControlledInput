import React from "react";


type MessagePropsType = {
    newStatus: string
    changeStatus: (value: string) => void
    nameNew: string
}

export function Message(props: MessagePropsType) {

    return (
        <div>
            <div>
                <input value={props.newStatus} onChange={(e) => props.changeStatus(e.currentTarget.value)}/>
                <button>add</button>
            </div>
            <div>
                <ul>

                </ul>

            </div>
        </div>
    );
}