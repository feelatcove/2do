import React, { useState } from 'react';
import Board from '../Molecules/Board';
import Task from '../Molecules/Task';
import { useAppSelector } from '../hooks'
import { deleteTask, moveTask, changeTask, changeColor } from '../slice';
import { useDispatch } from 'react-redux'
const Mainboard = () => {
    const allTasks = useAppSelector((state) => state.tasks)
    const dispatch = useDispatch()
    const [taskID, taskIDSet] = useState(Number)
    const [boards, boardsSet] = useState([{name: 'To Do:'}, {name: 'Ongoing:'}, { name: 'Done:'}]) //Nikita legenda (boardSet использовать в случае нужды добавления/удаления бордов)
    return (
        <div >
            <div className='flex flex-row justify-evenly mt-8'>
                {boards.map((item, boardIndex) => <Board onDrop={handleDrop} onDragOver={handleDragOver} key={item.name + boardIndex+1} row={boardIndex + 1} name={item.name}>
                {allTasks.allTasks.map((item) => item.row === boardIndex+1 ? <Task  taskNumber={item.id} info={item.info} color={item.color} key={item.id + item.info}
                    deleted={() => handleDelete(item.id)} changed={handleChange} changedColor={handleChangeColor} onDragStart={handleDrag}/> : <></>)}
                </Board>)}
            </div>
        </div>
    );
    //Функции перетаскивалок: Драговер дает возможность дропать, дроп запоминает НА что дропнули таску, а драг запоминает какую таску взяли
    function handleDragOver(e: React.DragEvent<Element>) {
        e.preventDefault()
    }
    function handleDrop(row:number) {
        dispatch(moveTask({
            index: taskID-1,
            row: row
        }))
    }
    function handleDrag(id:number) {
        taskIDSet(id)
    }

    function handleChangeColor(id: number, color: string) {
        dispatch(changeColor({
            id: id,
            color: color
        }))
    }
    function handleChange(id: number, info: string | null) {
        dispatch(changeTask({
            id: id,
            info: info,
        }))
    }

    function handleDelete(id: number) {
        dispatch(deleteTask(id))
    }
};

export default Mainboard;
