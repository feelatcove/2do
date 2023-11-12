import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { Task } from './types'



export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    allTasks:  [] as Task[]
  },
  reducers: {
    addNewTask: (state, action) => {
      state.allTasks.push(action.payload)
    },
    deleteTask: (state, action) => {
      state.allTasks = state.allTasks.filter(item => item.id !== action.payload).map((item, index) => {
        return {
          info: item.info,
          color: item.color,
          id: index + 1,
          row: item.row
        }
      })
    },
    moveTask: (state, action) => {
      state.allTasks[action.payload.index].row = action.payload.row
    },
    changeTask: (state, action) => {
      state.allTasks[action.payload.id-1].info = action.payload.info
    },
    changeColor: (state, action) => {
      state.allTasks[action.payload.id-1].color = action.payload.color
    },
  },
})

export const { addNewTask, deleteTask, moveTask, changeTask, changeColor } = tasksSlice.actions


export default tasksSlice.reducer