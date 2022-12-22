import React from "react";
// import { rollSet } from "../rollFunctions";

const AbilityScores = ({ rollsState, updateRollsState, state, updateAbilityScores }) => {
    return (
        <table>
            <thead><tr>
                <th>Rolls</th>
                <th>Ability Scores</th>
                <th>Modifier</th>
                <th>Ability Type</th>
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
                                        // [0] is ability, [1] is roll value
                                        const newLabel = document.createElement('span').appendChild(document.createTextNode(updateArr[0]));
                                        e.target.parentElement.appendChild(newLabel);
                                        e.target.parentElement.removeChild(e.target)
                                        updateRollsState({
                                            ...rollsState, 
                                            abilityTypes: {
                                                ...rollsState.abilityTypes, 
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
                                    {Object.keys(rollsState.abilityTypes).map((ability, j) => {
                                        if (!rollsState.abilityTypes[ability]) return (
                                        <option
                                            id={`select${i}opt${j + 1}`}
                                            key={`o${j + 1}`} 
                                            value={JSON.stringify([ability, abilityScore])}>
                                                {ability}
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