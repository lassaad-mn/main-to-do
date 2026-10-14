
import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import { useState } from "react"
export function TasksCompleted() {
const [tasksCompleted,setTasksCompleted]=useState(JSON.parse(localStorage.tasksCompleted))
function deleteAll(){
  localStorage.tasksCompleted=JSON.stringify([])
  setTasksCompleted([])
}
  return (
    <>
      {tasksCompleted.map((item,i)=>{
        return(
        <Item key={i} variant="outline" className={"mt-3 shadow"}>
            <ItemContent>
              <ItemTitle>{item}</ItemTitle>
              <ItemDescription></ItemDescription>
              
            </ItemContent>
            
        </Item>
          )
          
      })}
      <Button onClick={deleteAll} className={`w-full bg-red-500 mt-2 shadow cursor-pointer ${JSON.parse(localStorage.tasksCompleted).length==0?"hidden":"block"}`}>Delete All</Button>
    </>
  )
}

