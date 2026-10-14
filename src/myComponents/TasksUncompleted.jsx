import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { useState,useEffect } from "react"
export function TasksUncompleted() {
const [task,setTask]=useState(JSON.parse (localStorage.tasks))
const [tasksCompleted,setTasksCompleted]=useState(JSON.parse(localStorage.tasksCompleted))
let dataUnCompleted;
  if(localStorage.TasksUnCompleted!=null){
    dataUnCompleted=JSON.parse(localStorage.TasksUnCompleted)
  }
  else{
    dataUnCompleted=[]
  }
  const [TasksUncompleted,setTasksUnCompleted] = useState(dataUnCompleted)
  localStorage.setItem("TasksUncompleted",JSON.stringify(TasksUncompleted))
  // variable bch nzid bih lil array taa tasksUncompleted
  
  for(let i=0;i<task.length;i++){
    //variable exist to check the item  is in tasksCompleted or no 
        let exist=0
        for(let j=0;j<tasksCompleted.length;j++){
            if(task[i]==tasksCompleted[j]){
                exist=1
            }
        }
        if(exist==0){
            dataUnCompleted=[...dataUnCompleted,task[i]]
        }
  }
  useEffect(()=>{
    setTasksUnCompleted(dataUnCompleted)
  },[])
  
  function deleteAll(){
  localStorage.TasksUnCompleted=JSON.stringify([])
  setTasksUnCompleted([])
}
  

  return (
    <>
      {TasksUncompleted.map((item,i)=>{
        return(
        <Item key={i} variant="outline" className={"mt-3 shadow"}>
            <ItemContent>
              <ItemTitle>{item}</ItemTitle>
              <ItemDescription></ItemDescription>
              
            </ItemContent>
            <ItemActions>
              
            </ItemActions>
        </Item>
          )
          
      })}
      <Button onClick={deleteAll} className={`w-full bg-red-500 mt-2 shadow cursor-pointer ${JSON.parse(localStorage.TasksUncompleted).length==0?"hidden":"block"}`}>Delete All</Button>
    </>
  )
}


