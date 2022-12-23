import React from "react";

const NameMenu = ({state, onChange}) => {
    return (
        <>
            <textarea value={state.name} onChange={(e) => {onChange({...state, name: e.target.value})}}></textarea>
        </>
    );
};

export default NameMenu;