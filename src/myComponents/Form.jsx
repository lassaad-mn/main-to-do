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
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react";
export function Form() {
  let data;
  if(localStorage.tasks!=null){
    data=JSON.parse(localStorage.tasks)
  }
  else{
    data=[]
  }
  const [task,setTask] = useState( data)
  localStorage.setItem("tasks",JSON.stringify(task))
  var taskInput;
  function putTaskLocalStorage(val){
      setTask( [...task , val] )
  }
  return (
    <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <span  className={"text-right font-bold"}>المهمة</span>
                  <Input className={"text-right"}
                    id="taskInput"
                    type="text"
                    placeholder="   ... اكتب المهمة"
                    required onChange={(e)=>taskInput=e.target.value}
                  />
                </div>
                <div className="grid gap-2">
                  <span   className={"text-right  font-bold"}>التفاصيل</span>
                  <Input  className={"text-right"} id="password" type="text" placeholder="  ... اكتب التفاصيل " required />
                </div>



                {/* button confirm */}
                <AlertDialogTrigger>
                  <Button variant="outline"    className={"cursor-pointer"}>توثيق المهمة</Button>
                  <AlertDialog>
                    <AlertDialogHeader>
                      <AlertDialogTitle >متأكد من هذه المهمة !     </AlertDialogTitle>
                      
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className={"bg-red-300 cursor-pointer"}>لا</AlertDialogCancel>
                      <AlertDialogAction onClick={()=>putTaskLocalStorage(taskInput)}  className={"bg-green-300 cursor-pointer"}>متأكد</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialog>
                </AlertDialogTrigger>
                {/* button confirm */}




              </div>
    </form>
  )
}

