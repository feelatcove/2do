import React from 'react';
type Props = {
    setColor: () => void
    deleted: () => void
}
const Options = ({setColor, deleted}: Props) => {
    return (
        <div className='flex flex-col bg-gray-300 rounded-md absolute text-xl self-end mr-8 mb-1'>
            <button className='border border-gray-500 rounded-t-md hover:bg-gray-200 py-1 px-4' onClick={setColor}>Change color</button>
            <button className='border border-gray-500 rounded-b-md hover:bg-gray-200 py-1 px-4' onClick={deleted}>Delete</button>
        </div>
    );
};

export default Options;