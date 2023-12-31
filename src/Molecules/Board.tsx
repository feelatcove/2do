import React, {useEffect, useState} from 'react';

type Props = {
    name: string
    row: number
    children: React.JSX.Element[]
    onDrop: (row: number) => void
    onDragOver: (e: React.DragEvent<Element>) => void
}


const Board = ({name, row, children, onDrop, onDragOver}: Props) => {
    return (
        <div onDrop={() => onDrop(row)} onDragOver={(e) => onDragOver(e)} className={'bg-white rounded-2xl text-4xl font-bold w-1/4 px-4 p-2 cursor-default shadow-lg flex flex-col'}>
            {name}
            {children}
        </div>
    );
};

export default Board;