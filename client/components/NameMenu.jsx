import React from "react";

const NameMenu = ({state, onChange}) => {
    return (
        <div className="container">
            <textarea value={state.name} onChange={(e) => {onChange({...state, name: e.target.value})}}></textarea>
        </div>
    );
};

export default NameMenu;