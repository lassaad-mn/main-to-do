
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
  if(localStorage.tasksUnCompleted!=null){
    dataUnCompleted=JSON.parse(localStorage.tasksUnCompleted)
  }
  else{
    dataUnCompleted=[]
  }
  const [TasksUncompleted,setTasksUnCompleted] = useState(dataUnCompleted)
  localStorage.setItem("TasksUncompleted",JSON.stringify(dataUnCompleted))
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
  console.log(dataUnCompleted)
  useEffect(()=>{
    setTasksUnCompleted(dataUnCompleted)
  },[])
  
  
  

  return (
    <>
      {TasksUncompleted.map((item,i)=>{
        return(
        <Item key={i} variant="outline" className={"mt-3"}>
            <ItemContent>
              <ItemTitle>{item}</ItemTitle>
              <ItemDescription>Last seen 5 months ago</ItemDescription>
              
            </ItemContent>
            <ItemActions>
              
            </ItemActions>
        </Item>
          )
          
      })}
    </>
  )
}


