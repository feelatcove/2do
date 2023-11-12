import React, { useState } from 'react';
import Options from '../Atoms/Options';

type Props = {
    taskNumber: number
    info: string | null
    color: string
    deleted: () => void
    moved: () => void
    changed: (id: number, info: string | null) => void
    changedColor: (id: number, color: string) => void
    onDragStart: (id: number) => void
}



const Task = ({taskNumber, info, color, deleted, moved, changed, changedColor, onDragStart}: Props) => {
    const [optionsActive, optionsActiveSet] = useState<boolean>(false)
    const [currentColor, currentColorSet] = useState<string>(color)
    const [taskValue, taskValueSet] = useState<string | null>(`${info}`)
    return (
        <div draggable onDragStart={() => onDragStart(taskNumber)} className={'w-full rounded-md flex flex-col text-3xl shadow-sm border-gray-400 border mb-4 cursor-grab ' + currentColor}>
            <div className='flex flex-row justify-between px-2 items-center'>
                <div></div>
                <div className='ml-6'>{'Task №' + taskNumber.toString()}</div>
                <button className={'text-[6px] p-0 m-0 hover:invert'}  onBlur={() => setTimeout(() => optionsActiveSet(false), 100)} onClick={() => optionsActiveSet(optionsActive ? false : true)}>⚫⚫⚫</button>
            </div>
            {optionsActive ? <Options setcolor={() => handleColor()} deleted={deleted} moved={moved} /> : <></>}
            <div className='text-center w-full bg-gray-200 rounded-b-md cursor-pointer hover:bg-gray-100' onClick={() => handleChanging()}>{taskValue}</div>
        </div>
    ); //Описание таски /|\ через <div> а не <input>*

    function handleChanging() { //Изменение описания таски + запись в хранилище (*через промпт ибо с инпута слетал фокус из-за ререндера, можно пофиксить useRef'om но не стал)
        const newInfo = prompt('Change your task', `${info}`)
        taskValueSet(newInfo)
        console.log('prompt - ' + newInfo)
        changed(taskNumber, newInfo)
    }

    function handleColor() {  //Измнение цвета таски + запись в хранилище
        if (currentColor === 'bg-green-300') {
            currentColorSet('bg-yellow-300')
            changedColor(taskNumber, 'bg-yellow-300')
        }
        if (currentColor === 'bg-yellow-300') {
            currentColorSet('bg-red-300')
            changedColor(taskNumber, 'bg-red-300')
        }
        if (currentColor === 'bg-red-300') {
            currentColorSet('bg-green-300')
            changedColor(taskNumber, 'bg-green-300')
        }
    }

};

export default Task;