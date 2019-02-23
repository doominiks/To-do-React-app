import React from 'react';

const InputAdd = props => {
    const { value, change, keypress } = props

    return (
        <input type="text" placeholder="Add New Todo" value={value} onChange={change} onKeyPress={keypress} />
    );
}

export default InputAdd;