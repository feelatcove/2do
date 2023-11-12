import React, { useState } from 'react';

type Props = {
    onChange: (color: string) => void
}

const Dropdown = ({onChange}: Props) => {

    const [selection, selectionSet] = useState('Choose a color of a task!')
    const [color, colorSet] = useState('')
    function handleChange(color: string) {
        selectionSet(color)
        colorSet(color)
        onChange(color)
    }

    return (
        <div>
            <select className={'p-1 m-4 w-auto rounded-md text-3xl drop-shadow ' + color} value={selection} onChange={(e) => handleChange(e.target.value)}>
                    <option disabled>Choose a color of a task!</option>
                    <option value="bg-green-300">🟩Green</option>
                    <option value="bg-yellow-300">🟨Yellow</option>
                    <option value="bg-red-300">🟥Red</option>
                </select>
        </div>
    );
};

export default Dropdown;