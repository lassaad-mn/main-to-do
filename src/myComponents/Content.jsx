import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
 
} from "@/components/ui/card"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination"
import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
export function Content({children}) {
  let indexPage;
  
  if(localStorage.page>1){
    indexPage=JSON.parse(localStorage.page)
  }
  else{
    indexPage=1
  }
  const [activePage,setActivePage]=useState(indexPage)
  localStorage.setItem("page",JSON.stringify(activePage))
  return (
    <Card className="w-full max-w-sm">

      <CardHeader>
        <CardTitle className={"text-center p-4 text-3xl "}>مهامي</CardTitle>
        <CardDescription className={"text-center text-1xl font-bold py-3"}>
          أدخل مهامك خذ بالأسباب وتوكل على  الله
        </CardDescription>
        {/* pagination  */}
          <Pagination >
            <PaginationContent>
              <PaginationItem>
                <PaginationLink href="#" className={"w-full p-4"} onClick={()=>setActivePage(4)}  isActive={activePage==4?true:false}> <Link to='/TasksUnCompleted'><span>الغير منجز</span></Link></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className={"w-full p-4"} onClick={()=>setActivePage(3)}  isActive={activePage==3?true:false}><Link to='/TasksCompleted'><span>المنجز</span></Link></PaginationLink>
              </PaginationItem>
              <PaginationItem>
                
              <PaginationLink className={"w-full p-4"}  href="#" onClick={()=>setActivePage(2)}  isActive={activePage==2?true:false} >
                   <Link to='/All'><span> الكل</span></Link>
              </PaginationLink>
               
              </PaginationItem>
              <PaginationItem >
                <PaginationLink className={"w-full p-4"} href="#" onClick={()=>setActivePage(1)}  isActive={activePage==1?true:false}><Link to='/'><span >أدخل المهام</span></Link></PaginationLink>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        {/* pagination */}
      </CardHeader>

      <CardContent>
        {/* variable content */}
            {children}
        {/* variable content */}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <span>كبش في حلمتك</span>
      </CardFooter>
    </Card>
  )
}


