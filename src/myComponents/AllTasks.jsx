import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Plus,Pencil,Check,Trash } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
export function AllTasks() {
  const [task,setTask]=useState(JSON.parse (localStorage.tasks))
  localStorage.setItem("tasks",JSON.stringify(task))
  function deleteTask(i){
    setTask(task.filter((_,x)=>x!=i))
  }
  let updateTaskInput;
  function updateTask(i,newTask){
      let updateArry=task.map((item,x)=>{
        if(x===i){
          return item=newTask
        }
        else{
          return item
        }
      })
      setTask(updateArry)
  }


  let dataCompleted;
  if(localStorage.tasksCompleted!=null){
    dataCompleted=JSON.parse(localStorage.tasksCompleted)
  }
  else{
    dataCompleted=[]
  }
  const [tasksCompleted,setTasksCompleted]=useState(dataCompleted)
  localStorage.setItem("tasksCompleted",JSON.stringify(tasksCompleted))
  function taskCompleted(item,i){
    setTask(task.filter((_,x)=>x!=i))
    setTasksCompleted([...tasksCompleted,item])
  }
  return (
    <>
      {task.map((item,i)=>{
        return(
        <Item key={i} variant="outline" className={"mt-3"}>
            <ItemContent>
              <ItemTitle>{item}</ItemTitle>
              <ItemDescription></ItemDescription>
              
            </ItemContent>
            <ItemActions>
              <Button
                size="icon-sm"
                variant="outline"
                className="rounded-full shadow bg-green-500 cursor-pointer hover:scale-125"
                aria-label="Invite" onClick={()=>taskCompleted(item,i)}
              >
                <Check />
              </Button>
              <AlertDialogTrigger>
                    <Button 
                      
                        size="icon-sm"
                        variant="outline"
                        className="rounded-full shadow bg-amber-600 cursor-pointer hover:scale-125"
                        aria-label="Invite"
                      >
                      <Pencil />
                    </Button>
                  <AlertDialog>
                    <AlertDialogHeader>
                      <AlertDialogTitle >  بدل المهمة  </AlertDialogTitle>
                      <AlertDialogDescription className={" w-full"}><Input className={"text-right w-full"}
                    id="updateTaskInput"
                    type="text"
                    placeholder="   ... اكتب المهمة"
                    required onChange={(e)=>updateTaskInput=e.target.value}
                  />
                  </AlertDialogDescription>
                      
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className={"bg-red-300 cursor-pointer"}>لا</AlertDialogCancel>
                      <AlertDialogAction onClick={()=>updateTask(i,updateTaskInput)}  className={"bg-green-300 cursor-pointer"}>متأكد</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialog>
                </AlertDialogTrigger>
              <Button onClick={()=>deleteTask(i)} 
                size="icon-sm"
                variant="outline"
                className="rounded-full shadow bg-red-500 cursor-pointer hover:scale-125"
                aria-label="Invite"
              >
                <Trash />
              </Button>
            </ItemActions>
        </Item>
          )
          
      })}
    </>
    
      
  )
}


