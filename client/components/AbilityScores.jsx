import React from "react";
// import { rollSet } from "../rollFunctions";

const AbilityScores = ({ rollsState, updateRollsState, state, updateAbilityScores }) => {
    return (
        <table>
            <thead><tr>
                <th>Rolls</th>
                <th>Ability Scores</th>
                <th>Modifier</th>
                <th>Attribute</th>
            </tr></thead>
            <tbody>
                {rollsState.rolls.map((rolls, i) => {
                    const abilityScore = rolls.reduce((acc, cur, i) => acc += (i < 3) ? cur : 0);
                    return (
                        <tr key={`row${i}`}>
                            <td key={`ab${i}`}>{rolls}</td>
                            <td>{abilityScore}</td>
                            <td>{Math.floor(abilityScore / 2) - 5}</td>
                            <td>
                                <select 
                                    onChange={(e) => {
                                        const updateArr = JSON.parse(e.target.value);
                                        // console.log(e.target.parentElement.removeChild(e.target));
                                        // e.target.querySelector(updateArr[2]).innerText = updateArr[0];
                                        const newLabel = document.createElement('p');
                                        const attributeLabel = document.createTextNode(updateArr[0]);
                                        newLabel.appendChild(attributeLabel);
                                        e.target.parentElement.appendChild(newLabel);
                                        e.target.parentElement.removeChild(e.target)
                                        updateRollsState({
                                            ...rollsState, 
                                            attributes: {
                                                ...rollsState.attributes, 
                                                [updateArr[0]]: true
                                            }});
                                        updateAbilityScores({
                                            ...state, 
                                            abilityScores: {
                                                ...state.abilityScores,
                                                [updateArr[0]]: updateArr[1]
                                            }
                                        });
                                    }}
                                    key={`s${i}`} 
                                    id={`select${i}`}>
                                    <option id='opt0' key='o0' value={[null]}>-</option>
                                    {Object.keys(rollsState.attributes).map((attribute, j) => {
                                        if (!rollsState.attributes[attribute]) return (
                                        <option
                                            id={`select${i}opt${j + 1}`}
                                            key={`o${j + 1}`} 
                                            value={JSON.stringify([attribute, abilityScore])}>
                                                {attribute}
                                        </option>
                                        )
                                        })}
                                </select>
                            </td>
                        </tr>
                    )}
                )}
            </tbody>
        </table>
    );
};

export default AbilityScores;