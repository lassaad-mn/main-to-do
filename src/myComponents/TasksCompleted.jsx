
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
import { Input } from "@/components/ui/input"
export function TasksCompleted() {
const [tasksCompleted,setTasksCompleted]=useState(JSON.parse(localStorage.tasksCompleted))
  return (
    <>
      {tasksCompleted.map((item,i)=>{
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

