import React, { useState } from 'react';
import Dropdown from '../Atoms/Dropdown';
import MyButton from '../Atoms/myButton';
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../hooks'
import { addNewTask } from '../slice'

type Props = {
    setModal : (a: boolean) => void
}

const MyModal = ({setModal}: Props) => {

    const [inputValue, inputValueSet] = useState('')
    const [colorValue, colorValueSet] = useState('')
    const allTasks = useAppSelector((state) => state.tasks)
    const dispatch = useDispatch()



    return (
        <div className="flex justify-center items-center h-screen w-screen absolute bg-black/75 text-2xl font-bold" onClick={() => setModal(false)}>
          <div className={'bg-violet-500 rounded-2xl w-1/3 text-center self-center p-16 flex flex-col justify-center shadow-lg'} onClick={(e) => e.stopPropagation()}>
            <p className='text-4xl text-white animate-bouncecalm'>Adding a new task ;)</p>
            <Dropdown onChange={colorValueSet} />
            <input placeholder={inputValue} className='p-4 m-4 h-1/4 text-4xl rounded-xl truncate' onChange={(e) => inputValueSet(e.target.value)}></input>
                <div className='flex flex-row justify-end gap-10 mr-10 mt-6'>
                  <MyButton name='Cancel' className={'bg-red-500 rounded-xl text-white text-2xl hover:brightness-125'} onClick={() => setModal(false)}/> 
                  <MyButton name='Add!' className={'bg-green-500 rounded-xl text-white hover:brightness-125'} onClick={() => handleCreate()}/> 
                </div>
          </div>
        </div>
    );

    function handleCreate() {
        if (inputValue !== '' && colorValue) {
            dispatch(addNewTask({
                info: inputValue,
                color: colorValue,
                id: allTasks.allTasks.length + 1,
                row: 1
            }))
            inputValueSet('')
            colorValueSet('')
            setModal(false)
        } else {
            alert('Include both color and task info!')
        }
    }
};

export default MyModal;
