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

export function Confirmbutton({children}) {
  
  return (
    <AlertDialogTrigger>
      <Button variant="outline"  className={"cursor-pointer"}>{children[1]}</Button>
      <AlertDialog>
        <AlertDialogHeader>
          <AlertDialogTitle >{children[2]}</AlertDialogTitle>
          
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className={"bg-red-300 cursor-pointer"}>{children[4]}</AlertDialogCancel>
          <AlertDialogAction  className={"bg-green-300 cursor-pointer"}>{children[3]}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialog>
    </AlertDialogTrigger>
  )
}
