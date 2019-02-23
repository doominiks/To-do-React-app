import React from 'react';

const InputSearch = props => {
    return (
        <input type="text" placeholder="Search for Todo"
            onChange={props.change} />
    );
}

export default InputSearch;