export const roll = () => {
    return Array.from(Array(4)).map(el => 1 + Math.floor(Math.random() * 6)).sort((a, b) => b - a); // <- must be 6 since Math.random is 0-0.99999
}

export const rollSet = () => {
    return Array.from(Array(6)).map(el => roll());
}