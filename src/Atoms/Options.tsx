import React from 'react';
type Props = {
    setcolor: () => void
    deleted: () => void
    moved: () => void
}
const Options = ({setcolor, deleted, moved}: Props) => {
    return (
        <div className='flex flex-col bg-gray-300 rounded-md absolute text-xl self-end mr-8 mb-1'>
            <button className='border border-gray-500 rounded-t-md hover:bg-gray-200 py-1 px-4' onClick={setcolor}>Change color</button>
            <button className='border border-gray-500 hover:bg-gray-200 py-1 px-4' onClick={deleted}>Delete</button>
            <button className='border border-gray-500 rounded-b-md hover:bg-gray-200 py-1 px-4' onClick={moved}>Move</button>
        </div>
    );
};

export default Options;