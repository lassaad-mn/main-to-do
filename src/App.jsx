import { useState } from 'react'
import './App.css'
import { Content } from './myComponents'
import { Button } from './components/ui/button'
import {Route,Routes ,useNavigate} from "react-router-dom" 
import { Form } from "./myComponents/Form"
import { AllTasks } from './myComponents/AllTasks'
import { TasksCompleted,TasksUncompleted } from './myComponents'
import { useEffect } from 'react'
function App() {
   
  return (
    <div className='flex justify-center h-screen items-center'>
      <Content>
        
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/All' element={<AllTasks/>}/>
          <Route path='/TasksCompleted' element={<TasksCompleted/>}/>
          <Route path='/TasksUnCompleted' element={<TasksUncompleted/>}/>
        </Routes>
      </Content>
    </div>
  )
}

export default App
